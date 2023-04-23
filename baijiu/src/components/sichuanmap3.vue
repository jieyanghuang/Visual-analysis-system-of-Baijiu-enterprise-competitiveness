<template>
  <div class="test" id="mapbox">
    <div></div>
  </div>
</template>
<script>
import $ from "jquery";
import * as echarts from "echarts";
import PubSub from "pubsub-js";
export default {
  name: "mapbox2",
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
          var TwoPineplants = [
            {
              name: "剑南春",
              value: [104.20702, 31.09263],
            },
            {
              name: "郎酒",
              value: [105.43501, 29.00875],
            },
          ];

          var FourPineplantss = [
            {
              name: "沱牌舍得",
              value: [105.22636, 30.55541],
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
          ];

          var value = [
            46.79, 47.88, 22.71, 3.67, 2.55, 3.59, 2.09, 1.25, 0.76, 3.66, 1.2,
            0.73, 0.94, 0.64, 0.4, 0.17, 0.22, 0.34, 0.04, 0.01, 0.01,
          ];
          var cities = [
            "成都市",
            "泸州市",
            "宜宾市",
            "德阳市",
            "遂宁市",
            "达州市",
            "绵阳市",
            "资阳市",
            "自贡市",
            "南充市",
            "眉山市",
            "内江市",
            "巴中市",
            "乐山市",
            "广安市",
            "雅安市",
            "广元市",
            "凉山彝族自治州",
            "攀枝花市",
            "甘孜藏族自治州",
            "阿坝藏族羌族自治州",
          ];

          var regions = []; //不同地区数组，用来分别设置颜色
          var Color;
          for (var i = 0; i < value.length; i++) {
            if (value[i] >= 0 && value[i] <= 1) {
              //颜色分级
              Color = "#6FA1FF";
            } else if (value[i] > 1 && value[i] <= 5) {
              Color = "#3D76FF";
            } else if (value[i] > 20 && value[i] <= 30) {
              Color = "#1E4FFF";
            } else {
              Color = "#0020A0";
            }

            regions.push({
              name: cities[i],
              score: value[i],
              itemStyle: { normal: { areaColor: Color } },
            });
          }

          var namemap = new Map();
          for (var i = 0; i < value.length; i++) {
            namemap.set(cities[i], value[i]); //将市州数和市州名数据设置成键值对结构
          }

          myChart.hideLoading();
          echarts.registerMap("四川", geoJson);
          var option = {
            legend: {
              orient: "vertical",
              x: "62%",
              y: "13%",
              itemWidth: 20,
              itemHeight: 10,
              icon: "roundRect",
              data: ["两家未上市公司", "四家上市公司"],
              itemGap: 20,
              textStyle: {
                color: "#ffffff",
              },
            },

            title: {
              text: "区域白酒企业竞争力可视分析系统",
              subtext: "Visual Analysis System for Liquor Enterprises",
              x: "center",
              y: 10,

              textStyle: {
                color: "white",
                fontFamily: " serif ",
                fontSize: 23,
              },

              subtextStyle: {
                color: "#C0C0C0",
                fontSize: 14.5,
              },
            },
            tooltip: {
              formatter: "test",
            },

            geo: {
              map: "四川",

              tooltip: {
                show: true,
                confine: true,
                formatter: function (params) {
                  if (
                    params.name == "沱牌舍得" ||
                    params.name == "剑南春" ||
                    params.name == "水井坊" ||
                    params.name == "五粮液" ||
                    params.name == "泸州老窖" ||
                    params.name == "郎酒"
                  ) {
                    return [params.name].join("<br>");
                  } else {
                    return [params.name + ":" + namemap.get(params.name)].join(
                      "<br>"
                    );
                  }
                },

                textStyle: {
                  fontFamily: "serif", //提示框字体种类设置
                },
              },

              label: {
                normal: {
                  show: true,
                  color: "white",
                  fontSize: 10,
                },
                emphasis: {
                  show: true, //字体显示
                  color: "white",
                  // focus: "self",
                  fontSize: 18,
                },
              },

              roam: false, //地图缩放平移

              itemStyle: {
                normal: {
                  areaColor: "#4682B4",
                  // #40458e  原来的颜色
                  borderColor: "white",
                  borderWidth: 0.6,
                },
                emphasis: {
                  areaColor: "#FF6100",
                },
              },

              left: "25%",
              right: "26%",
              top: "15%",
              bottom: "37%",
              //地图板块出现位置
              regions: regions,
            },

            series: [
              {
                name: "两家未上市公司",
                symbolSize: 14, //大头针大小
                type: "scatter",
                symbol: "circle",
                color: "yellow",
                coordinateSystem: "geo",
                data: TwoPineplants,
              },
              {
                name: "四家上市公司",
                symbolSize: 14, //大头针大小
                type: "scatter",
                symbol: "circle",
                color: "orange",
                coordinateSystem: "geo",
                data: FourPineplantss,
              },
            ],
          };
          myChart.setOption(option);

          window.addEventListener("resize", function () {
            myChart.resize(); //自适应屏幕宽度
          });

          myChart.on("click", function (e) {
            //点击地图板块
            if (e.componentType == "geo") {
              PubSub.publish("countryName", e["region"]["name"]);
              PubSub.publish("score", e["region"]["score"]);
            }
            //点击地图企业点触发订阅事件
            else {
              PubSub.publish("companyName", e["data"]["name"]);
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
  /* background-image: url("../assets/back2.png") !important; */
  background-color: black;
}
</style>
