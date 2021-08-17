<template>
  <div id="example">
    <input type="text" v-model="searchData" placeholder="请输入公司名字" />
    <ul class="d1">
      <li v-for="(item, index) in Newitems" :key="index">
        <span id="itemName">name:{{ item.name }}</span>
        <span>competitive:{{ item.competitive }}分</span>
        <span>provinceRanking:{{ item.provinceRanking }}名</span>
        <span>cityRanking:{{ item.cityRanking }}名</span>
      </li>
    </ul>
  </div>
</template>

<script>
import Data from "../../public/static/searchDataItems";
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
    method1() {
      if (this.searchData == "") {
        return 0;
      } else return 1;
    },

    Newitems() {
      var _this = this;
      var Newitems = [];
      _this.items.map(function(item) {
        if (item.name.search(_this.searchData) != -1) {
          Newitems.push(item);
        }
      });
      if (this.searchData == "") {
        console.log(Newitems[10]);
        return Newitems.slice(0, 10);
      } else {
        return Newitems;
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
  display: block;
  line-height: 26px;
  color: white;
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
}
</style>
