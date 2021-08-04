<template>
  <div id="app">
    <!-- <div id="title"><p>四川白酒企业可视分析系统</p></div> -->
    <router-view v-if="isRouterAlive"></router-view>

    <!-- <div id="container"> -->
    <!-- <div id="title"><p>四川白酒企业可视分析系统</p></div>
   -->

    <div id="mapbox2">
      <sichuanmap3 />

      <div id="title">
       
      </div>
    </div>

    <div id="frame">
      <haoping />
    </div>

    <div id="c2">
      <sortChart2 />
    </div>

    <div id="ciyun">
      <mywordCloud2 />
    </div>

    <div id="xuritu">
      <sunburstChart2 />
    </div>

    <div id="lineChart2">
      <lineChart />
    </div>
    <div id="parallelChart2">
      <parellelChart />
    </div>

    
  </div>
</template>
<script>
import sortChart2 from "./components/sortChart2.vue";
import sichuanmap3 from "./components/sichuanmap3.vue";
import lineChart from "./components/lineChart.vue";
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
      this.$nextTick(function () {
        this.isRouterAlive = true;
      });
    },
  },
  components: {
    sortChart2,
    sichuanmap3,
    lineChart,
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
   background-color: rgba(2, 55, 255, 1);
  margin-top: 600px;
  
}
#container {
  /* background: url("../assets/back.png") center !important; */
  /* margin: 0;
            padding: 0; */
}
#title {
  position: absolute;
  width: 100%;
  height: 0%;
  top: 0px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  color: white;
  /* background-color: burlywood; */
  border-style: ridge;
  border-color: black;
  /* aqua */
  border-width: 3px;
}
#c2 {
  /* 市州竞争力 */
  position: absolute;
  width: 23%;
  /* height:61.15%; */
  height: 86.8%;
  left: 1%;
  top: 11.7%;
  border-style:ridge;
  border-color: #b0c4de;
  background-color: rgba(224, 255, 255, 0);
  z-index: 1;
  box-shadow: 0px 0px 29px #333399;
  text-align: center;
  border-radius: 6px 6px 6px 6px;
}
#lineChart2 {
  /* 词云 */
  position: absolute;
  width: 23.3%;
  height: 30.2%;
  top: 67.7%;
  /* left:35%; */
  right: 0.4%;
  /* 1.7% */
  border-style: ridge;
  border-color: #b0c4de;
  background-color: rgba(224, 255, 255, 0);
  /* z-index: 1; */
  box-shadow: 0px 0px 29px #333399;
  text-align: center;
  border-radius: 8px 8px 8px 8px;
}
#parallelChart2 {
  position: absolute;
  top: 67.9%;
  left: 24.5%;
  width: 51%;
  height: 30.5%;
  /* box-shadow: 0 0 20 red; */
  border-style: ridge;
  /* border-color: red; */
  background-color: rgba(224, 255, 255, 0);
  /* z-index: 1; */
  box-shadow: 0px 0px 34px #333399;
  text-align: center;
  border-radius: 6px 6px 6px 6px;
}
#mapbox2 {
  position: absolute;
  top: .000009%;
  /* left:30%;
    width:80%;
    height:62%; */
  /* left:20%; */
  width: 100%;
  height: 100%;
  border-style: ridge;
  border-color: #b0c4de;
  background-color: rgba(135, 206, 235, 1);
  z-index: 0;
}
#xuritu {
  position: absolute;
  left: 76%;
  /* 72 */
  /* right: 3.1%; */
  top: 12%;
  width: 23.3%;
  height: 54.5%;
  border-style: ridge;
  border-color: #b0c4de;
  z-index: 1;
  box-shadow: 0px 0px 20px #333399;
  /* rgba(0, 0, 0, 0.2) */
  text-align: center;
  background-color: rgba(224, 255, 255, 0);
  z-index: 1;
  border-radius: 6px 6px 6px 6px;
}
#ciyun {
  /* 好评条 */
  position: absolute;
  left: 63%;
  /* 49 */
  right: 2.1%;
  top: 54%;
  width: 14%;
  /* height:37.5%; */
  height: 19.5%;
  /* border-style: ridge; */
  border-color: #0753b6;
  /* background-color: rgba(28, 145, 145, 0.6);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
  text-align: center;
  z-index: 1;
  border-radius: 6px 6px 6px 6px;
  border-width: 10px;
}
#frame {
  position: absolute;
  border-color: aqua;
  /* left: 23%; */
  border-width: 1px;
  top: 11%;
  width: 100%;
  height: 0%;
  border-style: ridge;
  box-shadow: 0px 10px 20px #333399;
}


</style>

