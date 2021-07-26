<template>
    <div id="c1" style="width:100%;height:100%">
  </div>
</template>
<script>
import * as echarts from 'echarts';
import PubSub from 'pubsub-js';
import comdata from '../../public/static/qiyejingzhengli.json'
export default ({
    name:"sortChart2",
    data(){
        return {
            sortdata:
                    {
                "市州":["泸州市","成都市","宜宾市","德阳市","广安市","甘孜","攀枝花市","阿坝",
                         "自贡市","遂宁市","雅安市","资阳市","内江市","乐山市","绵阳市","广元市","眉山市","凉山",
                         "南充市","巴中市","达州市"],
                "竞争力指数":[14.24468752,3.922286086,3.430305383,3.430116219,2.52799675,2.457564839,2.327662326,2.274064172,1.76839262,1.725752921,
                              1.713046671,1.660408331,1.521779191,1.396548555,1.381166268,1.328109798,1.30689556,1.129076261,1.021156147,0.887072169,
                              0.783476215]
                       }
        }
    },mounted(){
                 console.log(this.sortdata);
                 this.initsort(this.sortdata)
                 PubSub.subscribe("countryName", (msg, data) => {

                 for(let i=0;i<comdata.length;i++)
                   {
                     if(data==comdata[i]['市州'])
                       {
                       this.sortdata['市州'] = comdata[i]['企业']
                       this.sortdata['竞争力指数'] = comdata[i]['竞争力指数']
                       this.initsort(this.sortdata)
                       break;
                        }
                   }
    });
    },methods:{
            initsort:function(data){
            var chartDom = document.getElementById('c1');
            var myChart = echarts.init(chartDom);
            var option;
            
            option = {
                title: {
                    text: '市州竞争力排名图',
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                // legend: {
                //     data: ['2011年', '2012年']
                // },
                grid: {
                    left: '1%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    data:data["市州"].reverse()
                },
                series: [
                   
                    {
                        name: '竞争力指数',
                        type: 'bar',
                        showBackground: true,
                        backgroundStyle: {
                        color: 'rgba(180, 180, 180, 0.2)'
                        },
                        data: data["竞争力指数"].reverse()
                   }
                ]
};
             myChart.setOption(option);

             }
    }
})
</script>
<style scoped>

</style>
