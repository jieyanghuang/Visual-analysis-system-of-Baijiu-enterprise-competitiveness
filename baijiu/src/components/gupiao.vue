<template>
  <div id="Stock"></div>
</template>
<script>
import * as echarts from "echarts";
import $ from "jquery";
import PubSub from "pubsub-js";
import stocks from "../../public/static/stocks.json";
import * as axios from "axios";
export default {
  name: "search",
  data() {
    return {
      flag: 1,
      locdata: "",
      re: {
        name: [
          ["2021-04-02", "267.0000", "284.5600", "265.0100", "285.0000"],
          ["2021-04-09", "285.9500", "265.3000", "264.0600", "288.0000"],
          ["2021-04-16", "265.2000", "261.8000", "249.3200", "268.2200"],
          ["2021-04-23", "260.0000", "280.0000", "253.5000", "281.0000"],
          ["2021-04-30", "283.0000", "285.0000", "272.3400", "291.0000"],
          ["2021-05-07", "282.0000", "272.1000", "271.2800", "285.8000"],
          ["2021-05-14", "270.5800", "287.0000", "261.4000", "288.4000"],
          ["2021-05-21", "288.2200", "296.6000", "288.2200", "309.1000"],
          ["2021-05-28", "300.0000", "316.9000", "295.3500", "326.2300"],
          ["2021-06-04", "315.3000", "315.3000", "308.5000", "320.0000"],
          ["2021-06-11", "316.3600", "301.5700", "291.5500", "317.4300"],
          ["2021-06-18", "301.5200", "291.0000", "286.0000", "304.0500"],
          ["2021-06-25", "293.0000", "299.9200", "284.1800", "302.5000"],
          ["2021-07-02", "300.0100", "286.0300", "285.2000", "306.6400"],
          ["2021-07-09", "284.1700", "267.2800", "262.0000", "288.5000"],
          ["2021-07-16", "270.0000", "277.5200", "262.6900", "283.3600"],
          ["2021-07-23", "275.8000", "271.2100", "268.1200", "285.9700"],
          ["2021-07-30", "268.6600", "220.7500", "216.8400", "268.6600"],
          ["2021-08-06", "215.3700", "226.0000", "212.1500", "240.6600"],
          ["2021-08-13", "224.0000", "240.8000", "222.0000", "251.1200"],
        ],
      },
      chengdu: "水井坊",
      yibin: "五粮液",
      luzhou: "沱牌舍得",
      suining: "泸州老窖",
    };
  },
  created() {},
  mounted() {
    this.init(this.re.name);

    PubSub.subscribe("companyName", (msg, data) => {
      for (let i = 0; i < stocks.length; i++) {
        if (data == stocks[i].label) {
          var name_fac = stocks[i].label;
          var a = stocks[i].datas;

          a.push.apply(a, this.locdata[name_fac]);
          console.log(a);
          this.init(a);
          // this.init(this.locdata[i]);
          break;
        }
      }
    });

    this.$axios
      .get("http://127.0.0.1:5000/hello", {
        params: {
          Chengdu: this.chengdu,
          Yibin: this.yibin,
          Suining: this.suining,
          Luzhou: this.luzhou,
        },
      })
      .then((response) => {
        this.locdata = response.data;
        console.log(this.locdata);
        console.log(this.flag);
        // console.log(this.locdata["五粮液"]);
        // var yy="五粮液"
        // var tem=this.locdata[yy];
        //  console.log(tem);
        //  var tem_store= tem;
        // console.log(this.locdata.length);
        for (var key in this.locdata) {
          var tem_store = this.locdata[key];

          for (var i = 0; i < tem_store.length; i++) {
            //  tem_store[k][0] = tem_store[k][0] + "";
            // console.log( tem_store[i][1] );
            tem_store[i][1] = tem_store[i][1] + "";
            tem_store[i][2] = tem_store[i][2] + "";
            tem_store[i][3] = tem_store[i][3] + "";
            tem_store[i][4] = tem_store[i][4] + "";
          }
        }

        // }
      });

    // this.init(this.locdata);

    // PubSub.subscribe("companyName", (msg, data) => {

    //   for (let i = 0; i < stocks.length; i++) {
    //     if (data == stocks[i].label) {

    //       // var a = stocks[i].datas;
    //       // a.push.apply(a, this.locdata);

    //       this.init(stocks[i].datas);

    //       break;

    //     }
    //   }
    // });
  },

  // watch: {
  //   data: 'change' // 值可以为methods的方法名
  // },
  methods: {
    init(rawData) {
      // , predata
      console.log(rawData);
      // console.log(predata);
      var chartDom = document.getElementById("Stock");
      var myChart = echarts.init(chartDom);
      var option;

      function calculateMA(dayCount, dta) {
        var result = [];
        // console.log(dta.length);
        for (var i = 0, len = dta.length; i < len; i++) {
          if (i < dayCount) {
            result.push("-");
            continue;
          }
          var sum = 0;
          for (var j = 0; j < dayCount; j++) {
            sum += dta[i - j][1];
            // console.log(sum);
          }
          // console.log(sum);
          result.push(sum / dayCount);
          // console.log(result);
        }
        return result;
      }

      var dates = rawData.map(function(item) {
        return item[0];
      });
      // for(var i=0;i<=31;i++){
      var dd = dates;
      // dd.push(this.locdata[1][0]);
      // }
      // console.log(dd);

      var dta = rawData.map(function(item) {
        return [+item[1], +item[2], +item[3], +item[4]];
      });

      var option = {
        title: {
          text: "股票预测",
          textStyle: {
            color: "white",
            fontFamily: " serif ",
            fontSize: 20,
          },
        },
        legend: {
          data: ["日K", "MA5", "MA10", "MA20", "MA30", "预测值"],
          right: "2%",
          inactiveColor: "#777",
          selected: {
            日k: false,
            MA5: false,
            MA20: false,
          },
          textStyle: {
            color: "white",
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            animation: false,
            type: "cross",
            lineStyle: {
              color: "white",
              width: 2,
              opacity: 1,
            },
          },
        },
        xAxis: {
          type: "category",
          data: dates,
          axisLine: { lineStyle: { color: "white" } },
        },
        yAxis: {
          scale: true,
          axisLine: { lineStyle: { color: "#8392A5" } },
          splitLine: { show: false },
        },
        grid: {
          bottom: 80,
        },
        dataZoom: [
          {
            zoomLock: true,
            textStyle: {
              color: "#8392A5",
            },
            handleIcon:
              "path://M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
            dataBackground: {
              areaStyle: {
                color: "#8392A5",
              },
              lineStyle: {
                opacity: 0.8,
                color: "#8392A5",
              },
            },
            brushSelect: true,
          },
          {
            type: "inside",
          },
        ],
        series: [
          {
            type: "candlestick",
            name: "日K",
            data: dta,
            itemStyle: {
              color: "#FD1050",
              color0: "#0CF49B",
              borderColor: "#FD1050",
              borderColor0: "#0CF49B",
            },
          },
          {
            name: "MA5",
            type: "line",
            data: calculateMA(5, dta),
            smooth: true,
            showSymbol: false,
            lineStyle: {
              width: 1,
              // color:"red"
            },
          },
          {
            name: "MA10",
            type: "line",
            data: calculateMA(10, dta),
            smooth: true,
            showSymbol: false,
            lineStyle: {
              width: 1,
              // color:"yellow"
            },
          },
          {
            name: "MA20",
            type: "line",
            data: calculateMA(20, dta),
            smooth: true,
            showSymbol: false,
            lineStyle: {
              width: 1,
              // color:"white"
            },
          },
          {
            name: "MA30",
            type: "line",
            data: calculateMA(30, dta),
            smooth: true,
            showSymbol: false,
            lineStyle: {
              width: 1,
            },
          },
          // {
          //   type: "candlestick",
          //   name: "预测值",
          //   data: predata,
          //   itemStyle: {
          //     color: "#FD1050",
          //     color0: "#0CF49B",
          //     borderColor: "blue",
          //     borderColor0: "white",
          //   },
          // },
        ],
      };

      option && myChart.setOption(option);

      window.addEventListener("resize", function() {
        myChart.resize(); //自适应屏幕宽度
      });
    },
  },
};
</script>
<style>
#Stock {
  width: 100%;
  height: 95%;
}
</style>
