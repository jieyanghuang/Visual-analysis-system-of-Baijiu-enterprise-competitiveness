
<template>
  <div id="parellelChart"  style="width:700px;height:300px;">
    <!-- <div id='flag'></div> -->
  </div>
</template>

<script>
// import * as axios from "axios";
// import * as d3 from 'd3'
import * as echarts from 'echarts'
import * as d3 from 'd3'
import comparadata from '../../public/static/comparallel.json'
import PubSub from 'pubsub-js';
export default {
  name: 'parellelChart',
  data () {
    return {
    }
  },mounted(){
      //axios执行get请求
    // axios.get('/api/data?id=1').then((res)=>{
    //       console.log(res.data);
    //       this.parallelChartdata = res.data.data;
    //       this.initChart(this.parallelChartdata)
    //   }).catch((err)=>{
    //       console.log(err)
    //   })
    this.initChart(comparadata[0]);
    // PubSub.subscribe("countryName", (msg, data) => {
    //              for(let i=1;i<paradata.length;i++)
    //                {
    //                  if(data==paradata[i]['label'])
    //                    {
    //                    this.initChart(paradata[i])
    //                    break;
    //                     }
    //                }
    // });

  },created(){
  },
  methods:{
     initChart:function(data){
     var chartDom = document.getElementById('parellelChart');
     var myChart = echarts.init(chartDom);
     var countryAxisx =['市州','注册资本（万)','有限公司数','独资企业数','个体工商户数','专利数','天眼评分','商标数']
     var companyAxisx =['酒企','注册资本（万）','参保人数','行政许可','商标信息','专利信息','天眼评分','法律诉讼']
     var option;
     var axisData
     if(data.label == "市州") axisData = countryAxisx
     else axisData = companyAxisx
     option = {
         parallelAxis: [
             {
            dim: 0,
            name: axisData[0],
            type: 'category',
            data: data.datas.name
        }, 
        {dim: 1, name: axisData[1]},
        {dim: 2, name: axisData[2]},
        {dim: 3, name: axisData[3]},
        {dim: 4, name: axisData[4]},
        {dim: 5, name: axisData[5]},
        {dim: 6, name: axisData[6]},
        {dim: 7, name: axisData[7]},            
        ],
        parallel: {
        left: '5%',
        right: '18%',
        bottom: 20,
        },
        title:{
             text:'市/州白酒企业数据展示',
             textStyle:{
                 left:'40%',
             }
        },
        series: {
            type: 'parallel',
            lineStyle: {
                width: 2,
                smooth: true,
            },
            data: data.datas.data
           }
    };
    option && myChart.setOption(option);
      }
    
}}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="scoped" >
    /* #parallelChart{
        width: 100%;
        display: flex;
        height: 100%;
        position: absolute;
        top: 0%;
        
    }
    #parallelChart svg {
        font: 10px sans-serif;
    }
    
    .background path {
        fill: none;
        stroke: #ccc;
        stroke-opacity: .4;
        shape-rendering: crispEdges;
    }
    
    .foreground path {
        fill: none;
        stroke: rgb(196, 56, 51);
        stroke-opacity: .7;
    }
    
    .brush .extent {
        fill-opacity: .3;
        stroke: #fff;
        shape-rendering: crispEdges;
    }
    
    .axis line,
    .axis path {
        fill: none;
        stroke: #000;
        shape-rendering: crispEdges;
    }
    
    .axis text {
        text-shadow: 0 1px 0 #fff;
    } */
</style>