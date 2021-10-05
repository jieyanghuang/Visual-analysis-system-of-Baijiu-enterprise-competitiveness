<template>
  <div id="parellelChart">
    <!-- <div id='flag'></div> -->
  </div>
</template>

<script>
import * as echarts from "echarts";
import * as d3 from "d3";
import comparadata from "../../public/static/parallel_final.json";
import PubSub from "pubsub-js";
import { color } from "highcharts";
export default {
  name: "parellelChart",
  data() {
    return {};
  },
  mounted() {
    this.initChart(comparadata[0]);
    // console.log(comparadata[1])
    PubSub.subscribe("countryName", (msg, data) => {
      for (let i = 1; i < comparadata.length; i++) {
        if (data == comparadata[i]["label"]) {
          this.initChart(comparadata[i]);
          break;
        }
      }
    });
  },
  created() {},
  methods: {
    initChart: function(data) {
      console.log(data);
      var chartDom = document.getElementById("parellelChart");
      var myChart = echarts.init(chartDom);
      var countryAxisx = [
        "市州",
        "注册资本（万)",
        "有限公司数",
        "独资企业数",
        "个体工商户数",
        "专利数",
        "天眼评分",
        "商标数",
      ];
      var companyAxisx = [
        "酒企",
        "注册资本（万）",
        "参保人数",
        "行政许可",
        "商标信息",
        "专利信息",
        "天眼评分",
        "法律诉讼",
      ];
      var option;
      var axisData;
      var data_f = [
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
      ].reverse();
      var data_l = [
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
      ].reverse();
      if (data.label == "市州") axisData = countryAxisx;
      else axisData = companyAxisx;
      var option1 = {
        parallel: [
          {
            left: "2%",
            right: "21%",
            bottom: 20,
            parallelindex: 0,
            parallelAxisDefault: {
              nameTextStyle: {
                color: "#fff",
                fontSize: 12,
              },
              axisLine: {
                lineStyle: {
                  color: "#fff",
                },
              },
              axisTick: {
                lineStyle: {
                  color: "#fff",
                },
              },
              splitLine: {
                show: false,
              },
              axisLabel: {
                color: "#fff",
              },
            },
          },
          {
            left: "2%",
            right: "21%",
            bottom: 20,
            parallelIndex: 1,
            parallelAxisDefault: {
              nameTextStyle: {
                color: "#fff",
                fontSize: 12,
              },
              axisLine: {
                lineStyle: {
                  color: "#fff",
                },
              },
              axisTick: {
                lineStyle: {
                  color: "#fff",
                },
              },
              splitLine: {
                show: false,
              },
              axisLabel: {
                color: "#fff",
              },
            },
          },
        ],
        parallelAxis: [
          {
            dim: 0,
            name: axisData[0],
            type: "category",
            parallelIndex: 0,
            data: data_f,
          },
          { dim: 1, name: axisData[1], parallelIndex: 0 },
          { dim: 2, name: axisData[2], parallelIndex: 0 },
          { dim: 3, name: axisData[3], parallelIndex: 0 },
          { dim: 4, name: axisData[4], parallelIndex: 0 },
          { dim: 5, name: axisData[5], parallelIndex: 0 },
          { dim: 6, name: axisData[6], parallelIndex: 0 },
          { dim: 7, name: axisData[7], parallelIndex: 0 },
          {
            dim: 8,
            name: axisData[0],
            type: "category",
            parallelIndex: 1,
            data: data_l,
          },
          { dim: 9, name: axisData[1], parallelIndex: 1 },
          { dim: 10, name: axisData[2], parallelIndex: 1 },
          { dim: 11, name: axisData[3], parallelIndex: 1 },
          { dim: 12, name: axisData[4], parallelIndex: 1 },
          { dim: 13, name: axisData[5], parallelIndex: 1 },
          { dim: 14, name: axisData[6], parallelIndex: 1 },
          { dim: 15, name: axisData[7], parallelIndex: 1 },
        ],
        legend: {
          left: "47%",
          data: ["排名前十一市", "排名后十市"],
          // show:false,
          selected: {
            排名前十一市: true,
            排名后十市: false,
            //不想显示的都设置成false
          },
          selectedMode: "single",
          itemGap: 20,
          textStyle: {
            color: "#6699CC",
            fontSize: 12,
          },
        },
        title: {
          text: "21市州白酒企业整体数据展示",
          textStyle: {
            color: "white",
            fontFamily: "serif",
          },
        },
        series: [
          {
            type: "parallel",
            name: "排名前十一市",
            parallelIndex: 0,
            smooth: true,
            lineStyle: {
              width: 1.5,
              color: "#0ED2F7",
            },
            data: data.datas.data1,
          },
          {
            type: "parallel",
            parallelIndex: 1,
            name: "排名后十市",
            lineStyle: {
              width: 1.5,
              color: "#0ED2F7",
            },
            smooth: true,
            data: data.datas.data2,
          },
        ],
      };
      var option2 = {
        parallel: [
          {
            left: "2%",
            right: "21%",
            bottom: 20,
            parallelindex: 0,
          },
          {
            left: "2%",
            right: "21%",
            bottom: 20,
            parallelIndex: 1,
          },
        ],
        parallelAxis: [
          {
            dim: 0,
            name: axisData[0],
            type: "category",
            parallelIndex: 1,
            data: ["其他", "个体工商户", "有限责任公司", "个人独资企业"],
          },
          { dim: 1, name: axisData[1], parallelIndex: 1 },
          { dim: 2, name: axisData[2], parallelIndex: 1 },
          { dim: 3, name: axisData[3], parallelIndex: 1 },
          { dim: 4, name: axisData[4], parallelIndex: 1 },
          { dim: 5, name: axisData[5], parallelIndex: 1 },
          { dim: 6, name: axisData[6], parallelIndex: 1 },
          { dim: 7, name: axisData[7], parallelIndex: 1 },
          {
            dim: 8,
            name: axisData[0],
            type: "category",
            parallelIndex: 0,
            data: [
              "第十",
              "第九",
              "第八",
              "第七",
              "第六",
              "第五",
              "第四",
              "第三",
              "第二",
              "第一",
            ],
          },
          { dim: 9, name: axisData[1], parallelIndex: 0 },
          { dim: 10, name: axisData[2], parallelIndex: 0 },
          { dim: 11, name: axisData[3], parallelIndex: 0 },
          { dim: 12, name: axisData[4], parallelIndex: 0 },
          { dim: 13, name: axisData[5], parallelIndex: 0 },
          { dim: 14, name: axisData[6], parallelIndex: 0 },
          { dim: 15, name: axisData[7], parallelIndex: 0 },
        ],
        title: {
          text: "市/州白酒企业数据展示",
          textStyle: {
            left: "40%",
          },
        },
        legend: {
          left: "40%",
          data: ["所有企业情况", "竞争力前十企业"],
          // show:false,
          selected: {
            所有企业情况: false,
            竞争力前十企业: true,
            //不想显示的都设置成false
          },
          //   selectedMode: "single",
          itemGap: 20,
          textStyle: {
            color: "#2F80ED",
            fontSize: 12,
          },
        },
        series: [
          {
            name: "竞争力前十企业",
            type: "parallel",
            parallelIndex: 0,
            smooth: true,
            // coordinateSystem:'parallel',
            // index:0,
            lineStyle: {
              width: 1.5,
              color: "#0ED2F7",
            },
            data: data.datas.data1,
          },
          {
            name: "所有企业情况",
            type: "parallel",
            parallelIndex: 1,
            // index:1,
            // coordinateSystem:'parallel',
            smooth: true,
            lineStyle: {
              width: 1,
              color: "#0ED2F7",
            },
            data: data.datas.data2,
          },
        ],
      };
      if (data.label == "市州") option = option1;
      else option = option2;
      option && myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#parellelChart {
  height: 100%;
  width: 115%;
  position: absolute;
}
</style>
