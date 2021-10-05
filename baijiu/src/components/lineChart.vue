<template>
  <div id="mywordcloud" style="width: 100%; height: 100%;">
    <!-- <h6>Product review word cloud</h6> -->
  </div>
</template>
<script>
import Highcharts from "highcharts/highcharts";
import wordcloud from "highcharts/modules/wordcloud";
import PubSub from "pubsub-js";
import cloudData from "../../public/static/wordTest.json";
wordcloud(Highcharts);
export default {
  name: "mywordCloud2",
  data() {
    return {
      worddata: [
        {
          name: "请选择企业",
          weight: 1,
        },
      ],
    };
  },
  mounted() {
    this.initcloud(this.worddata);
    PubSub.subscribe("companyName", (msg, data) => {
      for (let i = 0; i < cloudData.length; i++) {
        if (data == cloudData[i].label) {
          this.initcloud(cloudData[i].datas);
          break;
        }
      }
    });
  },
  methods: {
    initcloud: function(data) {
      Highcharts.chart("mywordcloud", {
        // 关闭Highcharts右下方logo
        credits: { enabled: false },
        chart: {
          backgroundColor: "#081130",
          colors: [
            "#f7a35c",
            "#8085e9",
            "#f15c80",
            "#e4d354",
            "#f45b5b",
            "white",
          ],
        },

        series: [
          {
            // 把字摆正
            rotation: {
              from: 0,
              to: 0,
              orientations: 5,
            },
            type: "wordcloud",
            data: data,
          },
        ],
        title: {
          text: "产品评论词云",
          y: 20,
          // subtext: "Product review word cloud",
          style: {
            fontSize: 16,
            color: "white",
            fontWeight: "bold",
            fontFamily: "serif",
            fontSize: 20,
          },
        },
      });
    },
  },
};
</script>
<style scoped>
#sub {
  position: absolute;
  width: 10px;
  height: 10px;
  border-color: red;
  border-width: 20px;
  /*  6px solid */
  /* margin: 100px; */
}
</style>
