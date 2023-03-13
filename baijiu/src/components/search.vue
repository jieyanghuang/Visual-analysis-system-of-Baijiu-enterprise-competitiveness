<template>
  <div id="example">
    <input
      type="text"
      v-model="searchData"
      placeholder="请输入公司或地区名字  "
    />
    <ul class="d1">
      <li v-for="(item, index) in Newitems" :key="index">
        <span id="itemName"
          ><svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xingxing"></use>
          </svg>
          <nobr class="pai">error</nobr>{{ item.name }}</span
        >
        <span class="d2">
          <div class="words">
            <svg class="iconCompetitive" aria-hidden="true">
              <use xlink:href="#icon-jz"></use></svg
            >竞争力得分:{{ item.competitive }}分
          </div>
        </span>
        <span class="d2">
          <div class="words">
            <svg class="iconRanking" aria-hidden="true">
              <use xlink:href="#icon-paiming"></use></svg
            >全省排名:{{ item.provinceRanking }}名
          </div></span
        >
        <span class="d2" id="cityRanking">
          <div class="words">
            <svg class="iconRanking2" aria-hidden="true">
              <use xlink:href="#icon-paiming"></use></svg
            >全市排名:{{ item.cityRanking }}名
          </div></span
        >
        <span id="kongge"></span>
      </li>
    </ul>
  </div>
</template>

<script>
import Data from "../../public/static/searchDataItems";
import "../store/iconfont.js";
import "../store/iconfont-ranking.js";
import "../store/iconfont-competitive.js";
import "../store/iconfont-goldcup.js";
export default {
  name: "search",
  data() {
    return {
      searchData: "",
      // name competive sort_area sort_province
      items: Data,
    };
  },
  computed: {
    Newitems() {
      var _this = this;
      var Newitems = [];
      _this.items.map(function (item) {
        if (item.name.search(_this.searchData) != -1) {
          Newitems.push(item);
        }
      });
      if (this.searchData == "") {
        return Newitems.slice(0, 10);
      } else {
        return Newitems;
      }
    },
  },
  mounted() {
    setInterval((_) => {
      this.changeColor();
    }, 100); //每隔100ms调用一次
  },
  methods: {
    changeColor() {
      var len = this.Newitems.length;
      for (var i = 0; i < len; i++) {
        if (this.Newitems[i].competitive >= 60) {
          document.getElementsByClassName("icon")[i].style.fill = "yellow"; //得分大于70
          document.getElementsByClassName("pai")[i].innerHTML = "[金牌]";
        } else if (
          this.Newitems[i].competitive >= 30 &&
          this.Newitems[i].competitive < 60
        ) {
          document.getElementsByClassName("icon")[i].style.fill = "#A9A9A9"; //得分40-70
          document.getElementsByClassName("pai")[i].innerHTML = "[银牌]";
        } else if (
          this.Newitems[i].competitive >= 10 &&
          this.Newitems[i].competitive < 30
        ) {
          document.getElementsByClassName("icon")[i].style.fill = "burlywood"; //得分20-40
          document.getElementsByClassName("pai")[i].innerHTML = "[铜牌]";
        } else {
          document.getElementsByClassName("icon")[i].style.fill = "white"; //得分低于30
          document.getElementsByClassName("pai")[i].innerHTML = "";
        }
      }
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
input {
  color: white;
  width: 88%;
  height: 25px;
  text-indent: 5px;
  background-color: rgba(0, 0, 0, 0);

  outline-style: none;
  border: 1px solid #ccc;
  /* padding: 13px 14px; */
  font-size: 12px;
  font-weight: 700;
  font-family: "Microsoft soft";

  margin-top: 10px;
}

input:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
}
ul li {
  list-style: none;
}
ul li span {
  line-height: 26px;
  color: white;
}
.d2 {
  display: block;
  background: rgba(33, 39, 49, 1);
  text-align: left;
  position: relative;
}

.d1 {
  width: 87.5%;
  height: 70%;
  margin-top: 1%;
  left: 6%;
  overflow-x: hidden; /*设置滚动条*/
  position: absolute;
  text-align: center;
}

#itemName {
  /* background: linear-gradient(rgba(193, 219, 182, 1), rgba(58, 59, 59, 0.6)); */
  background: rgba(88, 195, 216, 0.6);
  background-size: auto auto;
  background-position: right;
  background-repeat: no-repeat;
  display: block;
  text-align: left;
}
.icon {
  width: 1em;
  height: 1em;
  top: 1px;
  vertical-align: -0.15em;
  fill: rgba(193, 219, 182, 1);
  overflow: hidden;
  position: relative;
}

.iconRanking {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: orange;
  overflow: hidden;
}
.iconCompetitive {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.iconRanking2 {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: burlywood;
  overflow: hidden;
}
#kongge {
  display: block;
  margin-bottom: 10px;
}
.words {
  position: relative;
  left: 7%;
}
.pai {
  color: MediumTurquoise;
  font-family: "Hannotate SC";
}
</style>
