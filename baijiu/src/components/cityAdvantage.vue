<template>
  <div class="info">
    <div id="charts"></div>
    <div class="content" id="water"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
import PubSub from "pubsub-js";
import "echarts-liquidfill";
export default {
  name: "cityAdvantage",
  data() {
    return {
      curCountry: "",
      geography: "暂时没有内容～",
      market: "暂时没有内容～",
    };
  },
  created() {},
  mounted() {
    this.init();
  },
  methods: {
    init() {
      PubSub.subscribe("countryName", (msg, data) => {
        this.curCountry = data;
      });
      var chartDom = document.getElementById("charts");
      var myChart = echarts.init(chartDom);
      var chartDom = document.getElementById("water");
      var WaterChart = echarts.init(chartDom);
      var option;
      var optionWater;
      // 测试数据集
      const waterObj = { 成都市: 0.81, 泸州市: 0.92 };
      optionWater = {
        series: [
          {
            type: "liquidFill",
            data: waterObj[this.curCountry]
              ? [waterObj[this.curCountry]]
              : [0.8],
            shape: "container",
            outline: {
              show: false,
            },
            label: {
              formatter: function (param) {
                return `成功率:${param.value * 100}%`;
              },
              fontSize: 12,
            },
            color: ["rgb(24, 165, 207)"],
            amplitude: "3%",
          },
        ],
      };

      // Schema:
      // date,AQIindex,PM2.5,PM10,CO,NO2,SO2
      const dataBJ = [[154, 117, 157, 3.05, 92, 58]];
      const lineStyle = {
        width: 2,
        opacity: 1,
      };
      option = {
        tooltip: {
          trigger: "item",
        },
        radar: {
          indicator: [
            { name: "区域白酒研发能力", max: 300 },
            { name: "区域白酒财务能力", max: 250 },
            { name: "区域白酒人力资源情况", max: 300 },
            { name: "区域白酒企业对外信用", max: 5 },
            { name: "政府扶持力度", max: 200 },
          ],
          // shape: "circle",
          splitNumber: 5,
          axisName: {
            //属性名字的颜色
            color: "#fff",
            fontWeight: "bold",
          },
          splitLine: {
            lineStyle: {
              //分割圈颜色
              color: "rgba(24, 165, 207, 0.5)",
            },
          },
          splitArea: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              //分割线颜色
              color: "rgba(24, 165, 207, 0.5)",
            },
          },
        },
        series: [
          {
            name: "区域综合信息",
            type: "radar",
            lineStyle: lineStyle,
            data: dataBJ,
            itemStyle: {
              color: "rgb(24, 165, 207)",
            },
            areaStyle: {
              opacity: 0.8,
            },
          },
        ],
      };

      option && myChart.setOption(option);
      optionWater && WaterChart.setOption(optionWater);
      window.addEventListener("resize", function () {
        myChart.resize(); //自适应屏幕宽度
        WaterChart.resize();
      });
    },
    getData() {
      this.$axios
        .post("http://127.0.0.1:5000/searchData", {
          CompanyName: "成都",
        })
        .then((re) => {
          let data = re;
          console.log("houduan", data);
          if (data.isHaveContent) {
            this.geography = data.geography;
            this.market = data.market;
          } else {
            this.geography = "暂时没有内容～";
            this.market = "暂时没有内容～";
          }
        });
    },
  },
  watch: {
    curCountry() {
      // this.getData();
      this.init();
    },
  },
};
</script>
<style>
.info {
  width: 95%;
  height: calc(100% - 28px);
  display: flex;
}
#charts {
  margin: 15px 0 10px 0;
  width: 85%;
  height: 100%;
}
.content {
  height: 90%;
  /* border: 1px solid #03a9f3; */
  margin: 10px 10px 0px 0px;
  color: white;
  flex: 1;
}
</style>
