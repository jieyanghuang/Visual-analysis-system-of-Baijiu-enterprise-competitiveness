<template>
  <div id="c1" style="width: 100%; height: 100%"></div>
</template>
<script>
import Labels from "@antv/g2/lib/component/labels";
import * as echarts from "echarts";
import PubSub from "pubsub-js";
import comdata from "../../public/static/qiyejingzhengli.json";
export default {
  name: "sortChart2",
  data() {
    return {
      sortdata: {
        市州: [
          "成都市",
          "泸州市",
          "宜宾市",
          "德阳市",
          "遂宁市",
          "达州市",
          "绵阳市",
          "资阳市",
          "自贡市",
          "南充市",
          "眉山市",
          "内江市",
          "巴中市",
          "乐山市",
          "广安市",
          "雅安市",
          "广元市",
          "凉山彝族自治州",
          "攀枝花市",
          "甘孜藏族自治州",
          "阿坝藏族羌族自治州",
        ],
        竞争力指数: [
          647.27, 481.85, 285.6, 160.0, 91.9, 48.28, 45.66, 44.22, 39.63, 37.21,
          31.84, 30.5, 20.84, 17.68, 8.13, 6.8, 6.67, 5.51, 4.92, 1.27, 1.1,
        ],
      },
      // sortdata: {
      //   市州: [
      //     "四川省宜宾五粮液集团有限公司",
      //     "四川广汉金雁酒业有限公司",
      //     "得荣县太阳谷绿色食品有限责任公司",
      //     "康定市琼浆酒业有限责任公司",
      //     "四川戎春酒业集团有限公司",
      //     "舍得酒业股份有限公司",
      //     "四川省金波酒业有限公司",
      //     "雅安市雨城区古家酒厂",
      //     "雅安市雨城区李俊瓦屋山泉纯粮酒厂",
      //     "隆昌市贵香酒业有限公司",
      //   ],
      //   竞争力指数: [
      //     647.27, 481.85, 285.6, 160.0, 91.9, 48.28, 45.66, 44.22, 39.63, 37.21,
      //   ],
      // },
    };
  },
  mounted() {
    for (var j = 0; j < 10; j++) {
      this.sortdata["竞争力指数"][j] =
        this.sortdata["竞争力指数"][j].toFixed(2);
    }
    this.initsort(this.sortdata);
    PubSub.subscribe("countryName", (msg, data) => {
      for (let i = 0; i < comdata.length; i++) {
        if (data == comdata[i]["市州"]) {
          this.sortdata["市州"] = comdata[i]["企业"];
          for (var j = 0; j < 10; j++) {
            this.sortdata["竞争力指数"][j] =
              comdata[i]["竞争力指数"][j].toFixed(2);
          }
          this.initsort(this.sortdata);
          break;
        }
      }
    });
  },
  methods: {
    initsort: function (data) {
      var chartDom = document.getElementById("c1");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "市州竞争力排名",
          x: "center",
          y: 5,
          textStyle: {
            color: "white",
            fontFamily: " serif ",
            fontSize: 20,
          },
          subtextStyle: {
            color: "#C0C0C0",
            fontSize: 13,
          },
        },

        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          left: "1%",
          right: "4%",
          bottom: "0.5%",
          top: "6.5%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
          splitLine: { show: false },
        },
        yAxis: {
          type: "category",
          data: data["市州"],
          inverse: true,
          axisLabel: {
            show: false,
          },
          show: false,
        },
        series: [
          {
            name: "竞争力指数",
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(1, 180, 180, 0.2)",
            },
            data: data["竞争力指数"],
            label: {
              show: true,
              fontSize: 11,
              position: "insideLeft",
              color: "white",
              formatter: function (params) {
                let txtArry = params.name;
                return txtArry;
              },
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  { offset: 1, color: "#000046" },
                  { offset: 0, color: "#1CB5E0" },
                ]),
              },
              emphasis: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#5D9CEC" },
                  { offset: 1, color: "#0000FF" },
                ]),
              },
            },
          },
        ],
      };
      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  },
};
</script>
<style scoped></style>
