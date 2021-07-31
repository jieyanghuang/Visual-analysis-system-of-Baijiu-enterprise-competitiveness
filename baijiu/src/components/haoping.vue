<template>
  <div id="haoping" style="width: 50%; height: 50%"></div>
</template>
<script>
import * as echarts from "echarts";
import haopingtiao from "../../public/static/haopingtiao.json";

export default {
  name: "haoping",
  data() {
    return {
      haodata: [
        {
          value: 0.830536,
          name: "五粮液",
        },
      ],
    };
  },
  mounted() {
    this.initsun(this.haodata);
    PubSub.subscribe("companyName", (msg, data) => {
      for (let i = 0; i < haopingtiao.length; i++) {
        if (data == haopingtiao[i].label) {
          console.log(data);
          this.initsun(haopingtiao[i].datas);
          break;
        }
      }
    });
  },

  methods: {
    initsun: function(data) {
      var chartDom = document.getElementById("haoping");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        series: [
          {
            type: "gauge",
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 1,
            splitNumber: 8,
            axisLine: {
              lineStyle: {
                width: 2,
                color: [
                  [0.25, "#FF6E76"],
                  [0.5, "#FDDD60"],
                  [0.75, "#58D9F9"],
                  [1, "#7CFFB2"],
                ],
              },
            },
            pointer: {
              icon: "path://M12.8,0.7l12,40.1H0.7L12.8,0.7z",
              // icon:  "https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/asset/img/custom-gauge-panel.png",
              length: "50%",
              width: 10,
              offsetCenter: [0, "-20%"],
              itemStyle: {
                color: "auto",
              },
            },
            axisTick: {
              length: 3,
              lineStyle: {
                color: "auto",
                width: 2,
              },
            },
            splitLine: {
              length: 30,
              lineStyle: {
                color: "auto",
                width: 0.1,
              },
            },
            axisLabel: {
              color: "#464646",
              fontSize: 10,
              distance: -55,
              formatter: function(value) {
                if (value === 0.875) {
                  return "优";
                } else if (value === 0.625) {
                  return "中";
                } else if (value === 0.375) {
                  return "良";
                } else if (value === 0.125) {
                  return "差";
                }
              },
            },
            title: {
              offsetCenter: [0, "90%"],
              fontSize: 15,
            },
            detail: {
              fontSize: 20,
              offsetCenter: [0, "45%"],
              valueAnimation: true,
              formatter: function(value) {
                return Math.round(value * 100) + "分";
              },
              color: "black",
            },
            data: data,
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>
