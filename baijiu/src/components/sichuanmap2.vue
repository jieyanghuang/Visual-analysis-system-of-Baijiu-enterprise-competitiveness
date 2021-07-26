<template>
   <div class="test" id='mapbox' width="1500" height="800" left="300" ></div>
</template>
<script type="text/javascript"    src="<?=$sRootPath?>js/mapJs/echarts-all.js"></script>
<script>
import * as echarts from 'echarts'
export default {
    data(){
     return{
         mapdata:'',
     }
    },mounted(){
         this.initmap(this.mapdata);
    },methods:{
         initmap(){
              mapDisplay();
              function mapDisplay() {

             var myChart = echarts.init(document.getElementById('mapbox'));
             var option = {
                 title: {
                     text: '四川省区域注册人数统计',
                     //subtext: '-。-'  //子标题
                 },
                 tooltip: {
                     trigger: 'item',
                     formatter: function(a){//鼠标移到某个州市上弹出的提示内容。包括显示样式可以自定义，利用return返回样式即可。
                     return a[1]+":"+a[2];//a[1]:州市名称，a[2]:data中的valuez值。
             }
                 },
 
                 legend: {
                     orient: 'vertical',
                     x: 'right',
                     data: ['数据名称']
                 },
                 
                 dataRange: {
                     min: 0,
                     max: 1000,
                     color: ['orange', '#6EA1F4'],
                     //color: ['orange', 'blue'],
                     boder: 3,
                     text: ['高', '低'],           // 文本，默认为数值文本
                     calculable: true
                 },
                 series: [
                     {
                         //name: '数据名称',
                         type: 'map',
                         mapType: '四川',//如果是其他省份，也可以改变，例如：上海，北京，天津等地。
                         selectedMode: 'single',
                         itemStyle: {
                             normal: {
                                 label: { show: true },
                                 borderWidth: 2,//省份的边框宽度
                                 childBorderWidth: 1,
                                 childBorderColor: '#6EA1F4'
                                 
                             },
                             emphasis: { label: { show: true } }
                         },
                         data: [
                             { name: '阿坝藏族羌族自治州', value: 0 },
                             { name: '巴中市', value: 0 },
                             { name: '成都市', value: 0 },
                             { name: '达州市', value: 0 },
                             { name: '德阳市', value: 0 },
                             { name: '甘孜藏族自治州', value: 0 },
                            { name: '广安市', value: 0 },
                             { name: '广元市', value: 0 },
                             { name: '乐山市', value: 0 },
                             { name: '凉山彝族自治州', value: 0 },
                             { name: '泸州市', value: 0 },                            
                             { name: '眉山市', value: 0 },
                             { name: '绵阳市', value: 0 },
                             { name: '内江市', value: 0 },
                             { name: '南充市', value: 0 },
                             { name: '攀枝花市', value: 0 },
                             { name: '遂宁市', value: 0 },
                             { name: '雅安市', value: 0 },
                             { name: '宜宾市', value: 0 },
                             { name: '资阳市', value: 0 },
                             { name: '自贡市', value: 0 }
                         ]                     }
               ]
            };
      myChart.setOption(option);
        }
         }
    }
}
</script>

<style>

</style>