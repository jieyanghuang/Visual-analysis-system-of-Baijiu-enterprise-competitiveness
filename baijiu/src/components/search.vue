<template>
  <div id="example">
    <input type="text" v-model="searchData" placeholder="请输入id或姓名" />
    <ul class="d1">
      <li class="d2">
        <span>id</span>
        <span>name</span>
        <span>time</span>
      </li>
      <li v-for="(item, index) in Newitems" :key="index">
        <span>{{ item.id }}</span>
        <span class="name">{{ item.name }}</span>
        <span>{{ item.time }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "search",
  data() {
    return {
      searchData: "",
      items: [
        { id: "1001", name: "哈哈", time: "20170207" },
        { id: "1002", name: "呵呵", time: "20170213" },
        { id: "1103", name: "晓丽", time: "20170304" },
        { id: "1104", name: "小兰", time: "20170112" },
        { id: "1205", name: "财务", time: "20170203" },
        { id: "1206", name: "嘻嘻", time: "20170208" },
        { id: "1307", name: "测试", time: "20170201" },
      ],
    };
  },
  computed: {
    Newitems() {
      var _this = this;
      var Newitems = [];
      _this.items.map(function(item) {
        if (
          item.id.search(_this.searchData) != -1 ||
          item.name.search(_this.searchData) != -1
        ) {
          Newitems.push(item);
        }
      });
      return Newitems;
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
  width: 300px;
  height: 5px;
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
  margin: 0 30px;
  line-height: 30px;
  color: white;
}
.d1 {
  width: 350px;
  height: 130px;
  overflow-x: hidden;
  position: relative;
}
.d2 span {
  margin: 0 36px;
  line-height: 30px;
  color: gray;
  font-weight: bold;
}
</style>
