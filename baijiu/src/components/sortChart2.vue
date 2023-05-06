<template>
  <div id="c1" style="width: 100%; height: 100%" ref="myChart"></div>
</template>
<script>
import * as echarts from "echarts";
import PubSub from "pubsub-js";
import comdata from "../../public/static/qiyejingzhengli.json";
export default {
  name: "sortChart2",
  data() {
    return {
      sortdata: {
        市州: [
          "泸州市",
          "成都市",
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
          47.88, 46.79, 22.71, 3.67, 3.59, 3.66, 2.55, 2.09, 1.25, 1.2, 0.94,
          0.76, 0.73, 0.64, 0.4, 0.34, 0.22, 0.17, 0.04, 0.01, 0.01,
        ],
      },
    };
  },
  mounted() {
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
  beforeDestroy() {
    this.$refs.myChart && this.$refs.myChart.clear();
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
