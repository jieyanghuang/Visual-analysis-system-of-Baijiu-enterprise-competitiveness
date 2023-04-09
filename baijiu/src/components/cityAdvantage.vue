<template>
  <div class="info">
    <div id="charts"></div>
    <div class="content">文字显示区域{{ geography }}</div>
  </div>
</template>
<script>
import * as echarts from "echarts";
import $ from "jquery";
import PubSub from "pubsub-js";
import * as axios from "axios";
export default {
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
      var option;

      // Schema:
      // date,AQIindex,PM2.5,PM10,CO,NO2,SO2
      const dataBJ = [[154, 117, 157, 3.05, 92, 58]];
      const lineStyle = {
        width: 1,
        opacity: 0.5,
      };
      option = {
        tooltip: {
          trigger: "item",
        },
        radar: {
          indicator: [
            { name: "人才储备", max: 300 },
            { name: "市场", max: 250 },
            { name: "政策", max: 300 },
            { name: "运输", max: 5 },
            { name: "原材料", max: 200 },
          ],
          shape: "circle",
          splitNumber: 5,
          axisName: {
            //属性名字的颜色
            color: "#03a9f3",
          },
          splitLine: {
            lineStyle: {
              //分割圈颜色
              color: "rgba(24, 165, 207, 0.2)",
            },
          },
          splitArea: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              //分割线颜色
              color: "rgba(24, 165, 207, 0.2)",
            },
          },
        },
        series: [
          {
            name: "区域综合信息",
            type: "radar",
            lineStyle: lineStyle,
            data: dataBJ,
            symbol: "none",
            itemStyle: {
              color: "rgb(24, 165, 207)",
            },
            areaStyle: {
              opacity: 0.5,
            },
          },
        ],
      };

      option && myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize(); //自适应屏幕宽度
      });
    },
    getData() {
      this.$axios
        .post("http://127.0.0.1:5000/hello", {
          countryName: this.curCountry,
        })
        .then((re) => {
          let data = re.data;
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
      this.getData();
      this.init();
    },
  },
};
</script>
<style>
.info {
  width: 100%;
  height: calc(100% - 28px);
  display: flex;
}
#charts {
  margin: 0 0 10px 0;
  width: 55%;
  height: 100%;
}
.content {
  height: 90%;
  border: 1px solid #03a9f3;
  margin: 10px 10px 0px 0px;
  color: white;
  flex: 1;
}
</style>
