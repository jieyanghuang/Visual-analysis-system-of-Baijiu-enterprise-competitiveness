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
          "泸州市",
          "成都市",
          "宜宾市",
          "德阳市",
          "广安市",
          "甘孜",
          "攀枝花市",
          "阿坝",
          "自贡市",
          "遂宁市",
          "雅安市",
          "资阳市",
          "内江市",
          "乐山市",
          "绵阳市",
          "广元市",
          "眉山市",
          "凉山",
          "南充市",
          "巴中市",
          "达州市",
        ],
        竞争力指数: [
          14.24468752,
          3.922286086,
          3.430305383,
          3.430116219,
          2.52799675,
          2.457564839,
          2.327662326,
          2.274064172,
          1.76839262,
          1.725752921,
          1.713046671,
          1.660408331,
          1.521779191,
          1.396548555,
          1.381166268,
          1.328109798,
          1.30689556,
          1.129076261,
          1.021156147,
          0.887072169,
          0.783476215,
        ],
      },
    };
  },
  mounted() {
    console.log(this.sortdata);
    for (var j = 0; j < 10; j++) {
      this.sortdata["竞争力指数"][j] = this.sortdata["竞争力指数"][j].toFixed(
        2
      );
    }
    this.initsort(this.sortdata);
    PubSub.subscribe("countryName", (msg, data) => {
      for (let i = 0; i < comdata.length; i++) {
        if (data == comdata[i]["市州"]) {
          this.sortdata["市州"] = comdata[i]["企业"];
          for (var j = 0; j < 10; j++) {
            this.sortdata["竞争力指数"][j] = comdata[i]["竞争力指数"][
              j
            ].toFixed(2);
          }
          this.initsort(this.sortdata);
          break;
        }
      }
    });
  },
  methods: {
    initsort: function(data) {
      var chartDom = document.getElementById("c1");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "市州竞争力排名",
          // subtext: "Product classification research ",
          x: "center",
          y: 5,
          // textAlign: "center",
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
        },
        yAxis: {
          type: "category",
          data: data["市州"],
          inverse: true,
          axisLabel: {
            show: false, //不显示坐标轴上的文字
          },
        },
        series: [
          {
            // color: "#4B90C3",
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
              formatter: function(params) {
                console.log(params.name);
                let txtArry = params.name;
                return txtArry;
              },
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                  { offset: 1, color: "#000046" },
                  { offset: 0, color: "#1CB5E0" },
                  //  {offset: 1, color: '#4fC1E9'}
                ]),
              },
              emphasis: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#5D9CEC" },
                  { offset: 1, color: "#0000FF" },
                ]),
              },
            },
            //   itemStyle:{
            //           normal:{
            //               //柱体的颜色
            //               //右，下，左，上（1，0，0，0）表示从正右开始向左渐变
            //               color: function(params){
            //                   console.log(params);
            //                   var colorList = [
            //   						['#0F5C7F','#99DFFF'],
            //   						['#8D3510','#FFA783'],
            //   						['#651180','#D099FF'],
            //   						['#4B8D10','#83FFC0'],
            //   						['#8D104B','#FF83D8'],
            //   						['#7F610F','#FFE899'],
            //   						['#108D89','#83FFE9']
            //       			];
            //                   var colorItem = colorList[params.dataIndex];
            //                   return new echarts.graphic.LinearGradient(1,0,0,0,[
            //                               {
            //                                   offset:0,
            //                                   color: colorItem[0]
            //                               },
            //                               {
            //                                   offset:1,
            //                                   color: colorItem[1]
            //                               }
            //                               ],false);
            //                   }
            //               }

            //           }
          },
        ],
      };
      myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
  },
};
</script>
<style scoped></style>
