<template>
  <div id="haoping" style="width: 100%; height: 100%"></div>
</template>
<script>
import * as echarts from "echarts";
import haopingtiao from '../../public/static/haopingtiao.json';

export default {
  name: "haoping",
  data() {
    return {
    haodata:[
             {
               value:0.830536,
               name:"五粮液"
             },
         ]
    };
  },
  mounted() {
      this.initsun(this.haodata);
      PubSub.subscribe("companyName", (msg, data) => {

                 for(let i=0;i<haopingtiao.length;i++)
                   {
                     if(data==haopingtiao[i].label)
                       {
                         console.log(data);
                       this.initsun(haopingtiao[i].datas);
                       break;
                        }
                   }
    });
  },

  methods: {
    initsun: function(data) {

      

var chartDom = document.getElementById("haoping");
var myChart = echarts.init(chartDom);
var option;

option = {
  series: [
    {
      type: "gauge",
      startAngle: 180,
      endAngle: 0,
      min: 0,
      max: 1,
      splitNumber: 8,
      axisLine: {

        lineStyle: {
          width: 4,
          color: [
            [0.25, "#FF6E76"],
            [0.5, "#FDDD60"],
            [0.75, "#58D9F9"],
            // [0.8, "#7CFFB2"],
            [1, "#7CFFB2"],
          ],
        },
      },
      pointer: {
        icon: "path://M12.8,0.7l12,40.1H0.7L12.8,0.7z",
        // icon:  "https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data/asset/img/custom-gauge-panel.png",
        length: "30%",  //指南针长度
        width: 13,
        offsetCenter: [0, "-44%"],//指南针偏离中心的位置，负号表示向上偏离
        itemStyle: {
          color: "white",
        },
      },

      // axisTick: {
      //   length: 7,
      //   lineStyle: {
      //     color: "auto",
      //     width: 20,
          
      //   },
      // },             //内部圆弧
      splitLine: {
        length:82,
        lineStyle: {
          color:"white",
          width: 0.1,
        },
      },
      axisLabel: {
        color: "white",
        fontSize: 13,
        distance: -113,

        formatter: function (value) {
              //  if (value <1.01&&value>0.81) {
              //       return '优+';
              //   }
                if (value ===0.875) {
                    return '优';
                }
                else if (value ===0.625) {
                    return '中';
                }
                else if (value ===0.375) {
                    return '良';
                }
                else if (value ===0.125) {
                    return '差';
                }
        },
      },

      title: {
        offsetCenter: [0, "27%"],
        fontSize: 12,
        color:"white"
      },

      detail: {
        fontSize: 12,
        offsetCenter: [1, "-12%"],
        valueAnimation: true,
        formatter: function (value) {
          return Math.round(value * 100) + "分";
        },
        color: "white",
      },
       data:data,
      //  [
      //   {
      //     value: 0.7,
      //     name: "成绩评定",
      //   },
      //   // { value: 0.8 ,
      //   // },
      //   // { value: 0.3 },
      // ],
    },
  ],
};

option && myChart.setOption(option);
   window.addEventListener("resize", function () {
            myChart.resize();
          });
      
}
}
}
</script>