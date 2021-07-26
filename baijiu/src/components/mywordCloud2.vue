<template>
    <div id="mywordcloud" :style="{width: '100%', height: '100%'}" ></div>
</template>
<script>
import Highcharts from "highcharts/highcharts";
import wordcloud from "highcharts/modules/wordcloud";
wordcloud(Highcharts);
 export default {
    name: "mywordCloud2",
    data(){
        return{
         worddata:[
             {
               name:"五粮液",
               weight:100
             },
             {
               name:"泸州老窖",
               weight:80
             },
             {
               name:"郎酒",
               weight:60
             },
             {
               name:"剑南春",
               weight:50
             },
             {
               name:"沱牌",
               weight:40
             },
             {
               name:"水井坊",
               weight:20
             },
         ]
        }
    },mounted(){
       this.initcloud(this.worddata);
    },methods:{
       initcloud:function(data){
           Highcharts.chart("mywordcloud", {
      // 关闭Highcharts右下方logo
                credits: { enabled: false },
                chart:{
                    backgroundColor: '#CCffff',
                },
                series: [
                    {
                    // 把字摆正
                    rotation: {
                        from: 0,
                        to: 0,
                        orientations: 5,
                    },
                    type: "wordcloud",
                    data: data,
                    },
                ],
                title: {
                    text: "词云",
                    style: {
                            fontSize: 20,
                            fontWeight:'bold',
                            color:"#000000"//设置标题字体颜色
                            },
                },
    });
  },}
       }
</script>
<style scoped>

</style>
