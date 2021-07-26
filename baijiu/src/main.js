import Vue from 'vue'
import App from './App.vue'
import store from './store'

import * as  G2 from '@antv/g2'
import * as echarts from 'echarts';


require('echarts-wordcloud')
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.use(G2)

new Vue({
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
