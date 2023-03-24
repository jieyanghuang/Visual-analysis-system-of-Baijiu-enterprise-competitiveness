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
            { name: "AQI", max: 300 },
            { name: "PM2.5", max: 250 },
            { name: "PM10", max: 300 },
            { name: "CO", max: 5 },
            { name: "NO2", max: 200 },
            { name: "SO2", max: 100 },
          ],
          shape: "circle",
          splitNumber: 5,
          axisName: {
            //属性名字的颜色
            color: "rgb(238, 197, 102)",
          },
          splitLine: {
            lineStyle: {
              //分割圈颜色
              color: "rgba(238, 197, 102, 0.2)",
            },
          },
          splitArea: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              //分割线颜色
              color: "rgba(238, 197, 102, 0.5)",
            },
          },
        },
        series: [
          {
            name: "Beijing",
            type: "radar",
            lineStyle: lineStyle,
            data: dataBJ,
            symbol: "none",
            itemStyle: {
              color: "#F9713C",
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
  height: 100%;
  display: flex;
}
#charts {
  width: 60%;
  height: 90%;
}
.content {
  height: 80%;
  border: 1px solid;
  margin: 10px 10px 0px 0px;
  color: white;
  flex: 1;
}
</style>
