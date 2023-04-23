import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import axios from "axios";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import * as G2 from "@antv/g2";
import * as echarts from "echarts";

require("echarts-wordcloud");
Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
Vue.use(G2);
Vue.use(ElementUI)

new Vue({
  store,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
