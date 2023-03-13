<template>
  <div>
    <div class="text">地理位置优越: {{ geography }}</div>
    <div class="text">消费市场广阔：{{ market }}</div>
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
    },
  },
};
</script>
<style>
.text {
  color: white;
  padding: 10px 10px 0px 10px;
}
</style>
