<template>
  <div id="example">
    <input type="text" v-model="searchData" placeholder="请输入公司名字" />
    <ul class="d1">
      <li v-for="(item, index) in Newitems" :key="index">
        <!-- <span
          ><svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xingxing"></use></svg
        ></span> -->
        <span id="itemName"
          ><svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xingxing"></use>
          </svg>
          name:{{ item.name }}</span
        >
        <span class="d2">competitive:{{ item.competitive }}分</span>
        <span class="d2">provinceRanking:{{ item.provinceRanking }}名</span>
        <span class="d2">cityRanking:{{ item.cityRanking }}名</span>
      </li>
    </ul>
  </div>
</template>

<script>
import Data from "../../public/static/searchDataItems";
import "../store/iconfont.js";
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
      _this.items.map(function(item) {
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
      console.log("changeColor is run");
      var len = this.Newitems.length;
      for (var i = 0; i < len; i++) {
        if (this.Newitems[i].competitive >= 70) {
          document.getElementsByClassName("icon")[i].style.fill = "green"; //得分大于70,green
        } else if (
          this.Newitems[i].competitive >= 50 &&
          this.Newitems[i].competitive < 70
        ) {
          document.getElementsByClassName("icon")[i].style.fill = "blue"; //得分50-70,blue
        } else if (
          this.Newitems[i].competitive >= 30 &&
          this.Newitems[i].competitive < 50
        ) {
          document.getElementsByClassName("icon")[i].style.fill = "gray"; //得分30-50,gray
        } else {
          document.getElementsByClassName("icon")[i].style.fill = "white"; //得分低于30,white
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
  width: 80%;
  height: 10px;
  text-indent: 5px;

  outline-style: none;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 13px 14px;
  font-size: 14px;
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
}
.d1 {
  width: 87.5%;
  height: 70%;
  margin-top: 1%;
  left: 6%;
  overflow-x: hidden; /*设置滚动条*/
  position: absolute;
}
#itemName {
  background: linear-gradient(
    rgba(102, 175, 233, 0.6),
    rgba(102, 175, 233, 0.6)
  );
  background-size: auto auto;
  background-position: right;
  background-repeat: no-repeat;
  display: block;
}
.icon {
  width: 1em;
  height: 1em;
  top: 1px;
  right: 3px;
  vertical-align: -0.15em;
  fill: red;
  overflow: hidden;
  position: relative; /* 相对定位 */
}
</style>
