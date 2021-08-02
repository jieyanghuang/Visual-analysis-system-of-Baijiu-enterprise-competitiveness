<template>
  <div id="app">
    <div id="title" style="position:absolute;z-index:10000;">
      <p>四川白酒企业可视分析系统</p>
    </div>
    <router-view v-if="isRouterAlive"></router-view>
    <div id="container">
      <div id="c2">
        <sortChart2 />
      </div>
      <div id="ciyun">
        <mywordCloud2 />
      </div>
      <div id="xuritu">
        <sunburstChart2 />
        <div id="haoping">
          <haoping />
        </div>
      </div>
      <div id="parallelChart2">
        <parellelChart />
      </div>
      <div id="mapbox2">
        <sichuanmap3 />
      </div>
    </div>
  </div>
</template>
<script>
import sortChart2 from "./components/sortChart2.vue";
import sichuanmap3 from "./components/sichuanmap3.vue";
import parellelChart from "./components/parellelChart.vue";
import sunburstChart2 from "./components/sunburstChart2.vue";
import haoping from "./components/haoping.vue";
import mywordCloud2 from "./components/mywordCloud2.vue";

export default {
  name: "App",
  provide() {
    // 注册一个方法
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      isRouterAlive: true,
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    },
  },
  components: {
    sortChart2,
    sichuanmap3,
    parellelChart,
    sunburstChart2,
    haoping,
    mywordCloud2,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
* {
  margin: 0;
  padding: 0;
}
#title {
  position: absolute;
  width: 100%;
  height: 10%;
  top: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  color: black;
}
#c2 {
  position: absolute;
  width: 20%;
  /* height:61.15%; */
  height: 99%;
  left: 0.1%;
  top: 0%;
  border-style: ridge;
  border-color: #b0c4de;
  background-color: rgba(224, 255, 255, 1);
  z-index: 1;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  border-radius: 6px 6px 6px 6px;
}
#parallelChart2 {
  position: absolute;
  top: 64%;
  left: 20.5%;
  width: 53.2%;
  height: 35.5%;

  border-style: ridge;
  border-color: #b0c4de;
  background-color: rgba(224, 255, 255, 1);
  z-index: 1;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  border-radius: 6px 6px 6px 6px;
}
#mapbox2 {
  position: absolute;
  top: 0.15%;
  /* left:30%;
    width:80%;
    height:62%; */
  /* left:20%; */
  width: 100%;
  height: 100%;
  border-style: ridge;
  border-color: #b0c4de;
  background-color: rgba(135, 206, 235, 0.39);
  z-index: 0;
}
#xuritu {
  position: absolute;
  left: 74%;
  right: 0.1%;
  top: 0%;
  width: 26%;
  height: 63.15%;
  border-style: ridge;
  border-color: #b0c4de;
  z-index: 1;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  background-color: rgba(224, 255, 255);
  z-index: 1;
  border-radius: 6px 6px 6px 6px;
}
#ciyun {
  position: absolute;
  left: 74%;
  right: 0.1%;
  top: 64%;
  width: 26%;
  /* height:37.5%; */
  height: 35.5%;
  border-style: ridge;
  border-color: #b0c4de;
  background-color: rgba(224, 255, 255, 0.6);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  z-index: 1;
  border-radius: 6px 6px 6px 6px;
}
#haoping {
  height: 30%;
  left: 2%;
}
</style>
