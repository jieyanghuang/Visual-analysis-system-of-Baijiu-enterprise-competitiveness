<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>

    <div id="mapbox2">
      <sichuanmap3 />

      <div id="leftline">
        <div id="leftline1"></div>
        <div id="bottomline"></div>
      </div>
      <div id="rightline"><div id="rightline1"></div></div>
      <div class="yansetiao">
        <div id="bottom">0</div>
        <div id="top">1500</div>
        <div id="companyNumber">企业数目</div>
      </div>
    </div>

    <div id="c2" class="border1">
      <sortChart2 />
    </div>

    <div id="ciyun">
      <mywordCloud2 />
    </div>

    <div id="xuritu" class="border1">
      <div id="title-qipao">产品分级研究</div>
      <sunburstChart2 />
    </div>

    <div id="lineChart2" class="border1">
      <lineChart />
    </div>
    <div id="parallelChart2" class="border1">
      <parellelChart />
    </div>
    <div id="search" class="border1">
      <search />
    </div>
    <div id="gupiao" class="border1">
      <gupiao />
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
import search from "./components/search.vue";
import gupiao from "./components/gupiao.vue";

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
    lineChart,
    parellelChart,
    sunburstChart2,
    haoping,
    mywordCloud2,
    search,
    gupiao,
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
#c2 {
  /* 市州竞争力 */
  position: absolute;
  width: 23%;
  /* height:61.15%; */
  height: 62.5%;
  left: 1%;
  top: 4%;
  z-index: 1;
  text-align: center;
  /* border-radius: 6px 6px 6px 6px;
  border-style: ridge;
  border-color: #b0c4de; */

  background-color: rgba(224, 255, 255, 0);
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

  /* z-index: 1; */
  text-align: center;
  /* border-style: ridge;
  border-color: #b0c4de;

  background-color: rgba(224, 255, 255, 0);
  border-radius: 6px 6px 6px 6px; */
}
#parallelChart2 {
  position: absolute;
  top: 67.9%;
  left: 1%;
  width: 38%;
  height: 30.5%;
  /* box-shadow: 0 0 20 red; */
  border-style: ridge;
  /* border-color: red; */
  text-align: center;
  /* border-radius: 6px 6px 6px 6px;
  border-style: ridge;
  border-color: #b0c4de;

  background-color: rgba(224, 255, 255, 0);
  border-radius: 6px 6px 6px 6px; */
}
#mapbox2 {
  position: absolute;
  top: 0.000009%;
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
  top: 25%;
  width: 23.3%;
  height: 41%;
  z-index: 1;
  /* rgba(0, 0, 0, 0.2) */
  text-align: center;
  background-color: rgba(224, 255, 255, 0);
  z-index: 1;
  /* border-radius: 6px 6px 6px 6px;
  border-style: ridge;
  border-color: #b0c4de;

  background-color: rgba(224, 255, 255, 0);
  border-radius: 6px 6px 6px 6px; */
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
  /* background-color: rgba(28, 145, 145, 0.6);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
  text-align: center;
  z-index: 1;
  border-width: 10px;
}
#frame {
  position: absolute;
  border-color: aqua;
  /* left: 23%; */
  border-width: 1px;
  top: 7%;
  width: 100%;
  height: 0%;
  border-style: ridge;
}
#search {
  position: absolute;
  left: 76%;
  /* 72 */
  right: 3.1%;
  top: 4%;
  width: 23.3%;
  height: 19.5%;
  /* border-style: ridge;
  border-color: #b0c4de;
  z-index: 1;

  text-align: center;
  background-color: rgba(224, 255, 255, 0);
  z-index: 1;
  border-radius: 6px 6px 6px 6px;

  border-style: ridge;
  border-color: #b0c4de;

  background-color: rgba(224, 255, 255, 0);
  border-radius: 6px 6px 6px 6px; */
}
.border1 {
  border: 1px solid #03a9f3;
}
.border1::before,
.border1::after {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  transition: all 0.3s;
}
.border1::before {
  top: -5px;
  left: -5px;
  border-top: 1px solid #03a9f3;
  border-left: 1px solid #03a9f3;
}
.border1::after {
  right: -5px;
  bottom: -5px;
  border-bottom: 1px solid #03a9f3;
  border-right: 1px solid #03a9f3;
}
/* .border1:hover::before,
.border1:hover::after {
  width: calc(100% + 9px);
  height: calc(100% + 9px);
} */

#gupiao {
  position: absolute;
  top: 67.9%;
  left: 40%;
  width: 35%;
  height: 30.5%;
  /* box-shadow: 0 0 20 red; */

  /* border-color: red; */
  background-color: rgba(224, 255, 255, 0);
  /* z-index: 1; */

  text-align: center;
  /* border-radius: 6px 6px 6px 6px;
  border-style: ridge;
  border-color: #b0c4de;

  background-color: rgba(224, 255, 255, 0);
  border-radius: 6px 6px 6px 6px; */
}
.literal {
  position: absolute;
  height: 70%;
  width: 60%;
  /* background-color:red; */
  top: 20%;
  left: 49%;
}
#tu {
  position: absolute;
  height: 70%;
  width: 30%;
  top: 8%;
  left: 23%;
}
.yansetiao {
  position: absolute;
  top: 50%;
  left: 27%;
  width: 10px;
  height: 80px;
  background: -webkit-linear-gradient(bottom, #82b1ff, #2196f3) no-repeat;
  border: 1px solid white;
}
#bottom {
  position: relative;
  top: 85%;
  left: 150%;
  color: #fff;
  font-size: 12px;
}
#top {
  position: relative;
  top: -20%;
  left: 150%;
  color: #fff;
  font-size: 12px;
}
#title-qipao {
  color: #fff;
}

#leftline {
  height: 1px;
  width: 32.3%;
  top: 2%;
  border-top: solid #72fafc 1px;
  z-index: 1;
  position: absolute;
}

#leftline1 {
  height: 1px;
  width: 15%;
  margin-top: 6.1%;
  left: 96%;
  border-top: solid #72fafc 1px;
  z-index: 1;
  position: relative;
  transform: rotate(60deg);
}

#rightline {
  height: 1px;
  width: 32.1%;
  top: 2%;
  right: 0%;
  border-top: solid #72fafc 1px;
  z-index: 1;
  position: absolute;
}

#rightline1 {
  height: 1px;
  width: 15%;
  margin-top: 6.2%;
  right: 11%;
  border-top: solid #72fafc 1px;
  z-index: 1;
  position: relative;
  transform: rotate(-60deg);
}
#bottomline {
  left: 107.3%;
  height: 1px;
  width: 95.6%;
  margin-top: 6.1%;
  border-top: solid #72fafc 1px;
  z-index: 1;
  position: relative;
}
#companyNumber {
  height: auto;
  width: 60px;
  position: relative;
  top: 70%;
  left: -235%;
  color: #fff;
  font-size: 1px;
}
</style>
