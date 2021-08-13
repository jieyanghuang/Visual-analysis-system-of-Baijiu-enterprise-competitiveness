<template>
  <div class="test" id="mapbox">
    <div>
    </div>
    <!-- <img src="../../public/static/back.png"> -->
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
            var SixPineplants =
              [
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
              ]; //打点数据

            var value =
              [
                1078, 291, 128, 1484, 342, 693, 493,
                413, 362, 546, 1493, 571, 1187,
                745, 1124, 385, 1741, 430, 254, 44,
                930, 1,
              ]; //每个市州白酒企业数
            var cities =
              [
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
                "沱牌舍得",
                "剑南春",
                "水井坊",
                "五粮液",
                "泸州老窖",
                "郎酒",
              ];






            var regions = [];   //不同地区数组，用来分别设置颜色
            var Color;
            for (var i = 0; i < value.length; i++) {
              if (value[i] > 0 && value[i] <= 300)   //颜色分级
              {
                Color = "	#B0C4DE";
              }
              else if (value[i] > 300 && value[i] <= 600) {
                Color = "#87CEFA";
              }
              else if (value[i] > 600 && value[i] <= 900) {
                Color = "#00BFFF";
              }
              else if (value[i] > 900 && value[i] <= 1200) {
                Color = "#1E90FF";
              }
              else {
                Color = "#008B8B";
              }

              regions.push({
                name: cities[i],
                itemStyle: { normal: { areaColor: Color } }
              })
            }

            var namemap = new Map();
            for (var i = 0; i < value.length; i++) {
              namemap.set(cities[i], value[i]); //将市州数和市州名数据设置成键值对结构
            }






            myChart.hideLoading();
            echarts.registerMap("四川", geoJson);
            var option = {



              legend: {
                orient: 'vertical',
                x: '64%',
                y: '13%',
                data: ['六大金花白酒厂'],
              },

              title: {

                text: "四川白酒企业可视分析系统",
                // subtext: "Visual Analysis System for Sichuan Liquor Enterprises",
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
              tooltip:
              {
                formatter: "test",
              },


              geo: {
                map: "四川",

                tooltip:
                {
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
                    ) { return [params.name].join("<br>"); }
                    else {
                      return [params.name + ":" + namemap.get(params.name) + "家",].join("<br>");
                    }
                  },

                  textStyle:
                  {
                    fontFamily: "serif", //提示框字体种类设置
                  },
                },

                label:
                {
                  normal:
                  {
                    show: true,
                    color: "white",
                    fontSize: 10,
                  },
                  emphasis:
                  {
                    show: true, //字体显示
                    color: "white",
                    // focus: "self",
                    fontSize: 18,
                  },
                },

                roam: true, //地图缩放平移


                itemStyle:
                {
                  normal:
                  {
                    areaColor: "#4682B4",
                    // #40458e  原来的颜色 
                    borderColor: "white",
                    borderWidth: 0.6,
                  },
                  emphasis:
                  {

                    areaColor: "#5F9EA0",
                  },
                },

                left: "25%",
                right: "26%",
                top: "15%",
                bottom: "37%",
                //地图板块出现位置
                regions: regions
              },

              series:
                [
                  {
                    name: "六大金花白酒厂",
                    symbolSize: 40,  //大头针大小
                    type: "scatter",
                    symbol: "pin",
                    color: "yellow",
                    coordinateSystem: "geo",
                    data: SixPineplants,
                  }



                ],


            };
            myChart.setOption(option);

            window.addEventListener("resize", function () {
              myChart.resize();  //自适应屏幕宽度
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
    background: url("../assets/back2.png") center !important;
  }
</style>