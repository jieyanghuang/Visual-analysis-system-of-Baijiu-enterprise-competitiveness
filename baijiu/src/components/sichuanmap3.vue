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
      $(function () {
        var myChart = echarts.init(document.getElementById("mapbox"));
        myChart.showLoading();
        $.get("/static/sichuan.json", function (geoJson) {
          var SixPineplants = [
            {
              name: "沱牌舍得",
              value: [105.22636, 30.55541],
            },
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
          ];

          var value = [
            1078, 291, 128, 1484, 342, 693, 493, 413, 362, 546, 1493, 571, 1187,
            745, 1124, 385, 1741, 430, 254, 44, 930,
          ];
          var cities = [
            "成都市",
            "自贡市",
            "攀枝花市",
            "泸州市",
            "德阳市",
            "绵阳市",
            "广元市",
            "遂宁市",
            "内江市",
            "乐山市",
            "南充市",
            "眉山市",
            "宜宾市",
            "广安市",
            "达州市",
            "雅安市",
            "巴中市",
            "资阳市",
            "阿坝藏族羌族自治州",
            "甘孜藏族自治州",
            "凉山彝族自治州",
          ];
          var num = Math.random();

          var namemap = new Map();
          for (var i = 0; i < value.length; i++) {
            namemap.set(cities[i], value[i]);
          }

          console.log(geoJson);
          myChart.hideLoading();
          echarts.registerMap("四川", geoJson);
          var option = {
            tooltip: {
              formatter: "test",
            },

            geo: {
              map: "四川",
              tooltip: {
                show: true,
                confine: true,
                formatter: function (params) {
                  console.log(namemap.get(params.name));
                  return [
                    params.name + ":" + namemap.get(params.name) + "家",
                  ].join("<br>");
                },
              },
              label: {
                normal: {
                  show: true,
                  color: "white",
                  fontSize: 10,
                },

                emphasis: {
                  show: true,
                  color: "white",
                  focus: "self",
                  fontSize: 15,
                },
              },

              roam: true,

              itemStyle: {
                normal: {
                  areaColor: "#40458e",
                  borderColor: "white",
                  borderWidth: 1.5,
                },
                emphasis: {
                  areaColor: "pink",
                },
              },

              left: "25%",
              right: "30%",
              top: "5%",
              bottom: "37%",
            },

            series: [
              {
                name: "六大金花白酒厂",
                symbolSize: 45,
                type: "scatter",
                symbol: "pin",
                color: "yellow",
                coordinateSystem: "geo",
                data: SixPineplants,
              },
            ],
          };
          myChart.setOption(option);

          window.addEventListener("resize", function () {
            myChart.resize();
          });
          myChart.on("click", function (e) {
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
