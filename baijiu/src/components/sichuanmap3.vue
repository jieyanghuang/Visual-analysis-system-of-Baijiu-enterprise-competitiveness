<template>
  <div class="test" id="mapbox"></div>
</template>
<script>
import $ from "jquery";
import * as echarts from "echarts";
import PubSub from "pubsub-js";
export default {
  data() {
    return {};
  },
  mounted() {
    this.initmap();
  },
  methods: {
    initmap() {
      $(function() {
        var myChart = echarts.init(document.getElementById("mapbox"));
        myChart.showLoading();
        $.get("/static/sichuan.json", function(geoJson) {
          //    var value = [1078, 291, 128, 1484, 342, 693, 493,413, 362, 546, 1493, 571, 1187, 745, 1124, 385, 1741, 430, 254, 44,930];
          //    var cities =['成都市','自贡市','攀枝花','泸州','德阳市','绵阳市','广元','遂宁','内江','乐山','南充','眉山','宜宾','广安','达州','雅安','巴中','资阳','阿坝藏族羌族自治州','甘孜藏族自治州','凉山']
          //    var num = Math.random()
          //    var data = [
          //             { name: cities[0], selected: false, value: value[0] },
          //             { name: cities[1], selected: false, value: value[1] },
          //             { name: cities[2], selected: false, value: value[2] },
          //             { name: cities[3], selected: false, value: value[3] },
          //             { name: cities[4], selected: false, value: value[4] },
          //             { name: cities[5], selected: false, value: value[5] },
          //             { name: cities[6], selected: false, value: value[6] },
          //             { name: cities[7], selected: false, value: value[7] },
          //             { name: cities[8], selected: false, value: value[8] },
          //             { name: cities[9], selected: false, value: value[9] },
          //             { name: cities[10], selected: false, value: value[10] },
          //             { name: cities[11], selected: false, value: value[11] },
          //             { name: cities[12], selected: false, value: value[12] },
          //             { name: cities[13], selected: false, value: value[13] },
          //             { name: cities[14], selected: false, value: value[14] },
          //             { name: cities[15], selected: false, value: value[15] },
          //             { name: cities[16], selected: false, value: value[16] },
          //             { name: cities[17], selected: false, value: value[17] },
          //             { name: cities[18], selected: false, value: value[18] },
          //             { name: cities[19], selected: false, value: value[19] },
          //             { name: cities[20], selected: false, value: value[20] },
          //         ]

          //    var  dataColor = {
          //         x: '-1000 px', //图例横轴位置
          //         y: '-1000 px', //图例纵轴位置
          //         splitList: [
          //         { start: 1, end: 1, label: cities[0], color: '#cfc5de' },
          //         { start: 2, end: 2, label: cities[1], color: '#f1ebd1' },
          //         { start: 3, end: 3, label: cities[2], color: '#feffdb' },
          //         { start: 4, end: 4, label: cities[3], color: '#e0cee4' },
          //         { start: 5, end: 5, label: cities[4], color: '#fde8cd' },
          //         { start: 6, end: 6, label: cities[5], color: '#e4f1d7' },
          //         { start: 7, end: 7, label: cities[6], color: '#fffed7' },
          //         { start: 8, end: 8, label: cities[7], color: '#e4f1d7' },
          //         { start: 9, end: 9, label: cities[8], color: '#e4f1d7' },
          //         { start: 10, end: 10, label: cities[9], color: '#fffed7' },
          //         { start: 11, end: 11, label: cities[10], color: '#fffed8' },
          //         { start: 12, end: 12, label: cities[11], color: '#dccee7' },
          //         { start: 13, end: 13, label: cities[12], color: '#fffed7' },
          //         { start: 14, end: 14, label: cities[13], color: '#fce8cd' },
          //         { start: 15, end: 15, label: cities[14], color: '#ddceeb' },
          //         { start: 16, end: 16, label: cities[15], color: '#e4f1d3' },
          //         { start: 17, end: 17, label: cities[16], color: '#fde8cd' },
          //         { start: 18, end: 18, label: cities[17], color: '#fde8cd' },
          //         { start: 19, end: 19, label: cities[18], color: '#fde8cd' },
          //         { start: 20, end: 20, label: cities[19], color: '#fffdd6' },
          //         { start: 21, end: 21, label: cities[20], color: '#ddcfe6' }
          //         ]
          //         };
          //         //从数组中获取最大值和最小值
          //    var dataValue = [];
          //    data.forEach(e => {
          //         dataValue.push(e.value)
          //         });
          //    var max = Math.max.apply(null, dataValue),//数据最大值
          //    min = Math.min.apply(null, dataValue),//数据最小值
          //    min_max = max - min;//极差
          //    var R = 178,//色值差
          //         G = 98,
          //         B = 12,
          //         R_min = 18,
          //         G_min = 139,
          //         B_min = 237;
          //    dataColor.splitList.forEach(e => {
          //         var RED = (R / min_max * e.start) + R_min,
          //         GREEN = (G / min_max * e.start) + G_min,
          //         BLUE = (B / min_max * e.start) + B_min;
          //         e.color = "rgb(" + RED + ',' + GREEN + ',' + BLUE + ")";
          //         });
          var SixPineplants = [
            {
              name: "沱牌舍得",
              value: [105.22636, 30.55541],
            }, //沱牌舍得  遂宁
            {
              name: "剑南春",
              value: [104.20702, 31.09263],
            },
            {
              name: "水井坊",
              value: [103.70194, 30.54984],
            },
            {
              name: "五粮液",
              value: [104.61947, 28.66593],
            },

            {
              name: "泸州老窖",
              value: [105.43501, 28.00875],
            },
            {
              name: "郎酒",
              value: [105.43501, 29.00875],
            },
            // }, // corsica
          ];
          console.log(geoJson);
          myChart.hideLoading();
          echarts.registerMap("四川", geoJson);
          var option = {
            visualMap: {
              min: 0,
              max: 500,
              show: false,
              splitNumber: 5,
              inRange: {
                color: ["#d94e5d", "#eac736", "#50a3ba"].reverse(),
              },
              textStyle: {
                color: "#fff",
              },
            },
            geo: {
              map: "四川",
              label: {
                normal: {
                  show: true,
                  color: "#fff",
                },
                emphasis: {
                  show: true,
                  color: "#fff",
                },
                tooltip: {
                  formatter: "{b}",
                },
              },
              roam: false,
              itemStyle: {
                normal: {
                  areaColor: "#40458e",
                  borderColor: "#6367ad",
                  borderWidth: 1.5,
                },
                emphasis: {
                  areaColor: "#40458e",
                },
                visualMap: {
                  hoverLink: true,
                  // dimension:0
                },
              },
              left: "25%",
              right: "30%",
              top: "5%",
              bottom: "37%",
            },
            tooltip: {
              trigger: "item",
            },
            series: [
              {
                name: "六大金花白酒厂",
                // type: "heatmap",
                type: "scatter",
                coordinateSystem: "geo",
                blurSize: 30,
                // data: value,
                label: {
                  normal: {
                    show: false, //显示省份标签
                    textStyle: {
                      color: "#fff",
                    }, //省份标签字体颜色
                  },
                },
                aspectScale: 0.75,
                zoom: 1.2,
                itemStyle: {
                  normal: {
                    borderWidth: 0.5, //区域边框宽度
                    borderColor: "#009fe8", //区域边框颜色
                    areaColor: "#ffefd5", //区域颜色
                  },
                },
                data: SixPineplants,
                tooltip: {
                   trigger: "item",
                //   formatter: function(params) {
                //     console.log("debug");
                //     console.log(params);
                //     return 1
                //   },
                  formatter:"{b}"
                },
              },
            ],
            // dataRange:dataColor
          };
          myChart.setOption(option);

          window.addEventListener("resize", function() {
            myChart.resize();
          });
          myChart.on("click", function(e) {
            //点击地图板块
            console.log(e);
            if (e.componentType == "geo") {
              PubSub.publish("countryName", e["region"]["name"]);
              console.log(e["region"]["name"]);
            }
            //点击地图学校点触发订阅事件
            else {
              PubSub.publish("companyName", e["data"]["name"]);
              console.log(e["data"]["name"]);
            }
          });
        });
      });
    },
  },
};
</script>

<style>
#mapbox {
  width: 100%;
  height: 100%;
}
</style>
