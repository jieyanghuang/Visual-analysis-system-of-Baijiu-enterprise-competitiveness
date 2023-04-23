<template>
  <div
    class="info"
    v-loading="loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <div id="charts"></div>
    <div class="content">
      <div id="water" class="water"></div>
      <div class="number">
        <div class="number_top">50分</div>
        <div class="number_bottom">0分</div>
      </div>
    </div>
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
      score: 0,
      loading: false,
    };
  },
  computed: {
    scorePer() {
      return Math.floor((this.score / 50) * 100) / 100;
    },
  },
  created() {},
  mounted() {
    this.init([[0, 0, 0, 0, 0]], 0);
    PubSub.subscribe("countryName", (msg, data) => {
      if (this.curCountry === data) return;
      else {
        this.curCountry = data;
        this.getData(data);
      }
    });
    PubSub.subscribe("score", (msg, data) => {
      if (this.score === data) return;
      else {
        this.score = data;
      }
    });
  },
  methods: {
    init(dataBJ, score) {
      var chartDom = document.getElementById("charts");
      var myChart = echarts.init(chartDom);
      var chartDom = document.getElementById("water");
      var WaterChart = echarts.init(chartDom);
      var option;
      var optionWater;
      // 测试数据集
      optionWater = {
        series: [
          {
            type: "liquidFill",
            data: [this.scorePer],
            shape: "container",
            outline: {
              show: false,
            },
            label: {
              formatter: function (param) {
                console.log(param);
                return `${score}`;
              },
              fontSize: 12,
            },
            color: ["rgb(24, 165, 207)"],
            amplitude: "0%",
          },
        ],
      };

      // Schema:
      // date,AQIindex,PM2.5,PM10,CO,NO2,SO2
      const lineStyle = {
        width: 2,
        opacity: 1,
      };
      option = {
        tooltip: {
          trigger: "item",
        },
        radar: {
          // [1284.64, 2678.09, 2561.56, 316.5, 5]
          indicator: [
            { name: "区域白酒研发能力", max: 1285 },
            { name: "区域白酒人力资源情况", max: 2679 },
            { name: "区域白酒企业对外信用", max: 2562 },
            { name: "区域白酒财务能力", max: 317 },
            { name: "政府扶持力度", max: 10 },
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
    async getData(countryName) {
      this.loading = true;
      await this.$axios
        .post("http://127.0.0.1:5000/allInfo", {
          countryName: countryName,
        })
        .then((re) => {
          console.log("dedaoshuju");
          this.init([re.data.data], this.score);
          console.log("ok");
        });
      this.loading = false;
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
  margin: 15px 0 10px 0;
  width: 80%;
  height: 100%;
}
.content {
  height: 90%;
  /* border: 1px solid #03a9f3; */
  margin: 10px 10px 0px 0px;
  color: white;
  flex: 1;
  display: flex;
}
.water {
  width: 50%;
  height: 100%;
}
.number {
  flex: 1;
  font-size: 1.5vh;
}
.number_bottom {
  position: relative;
  top: 80%;
}
</style>
