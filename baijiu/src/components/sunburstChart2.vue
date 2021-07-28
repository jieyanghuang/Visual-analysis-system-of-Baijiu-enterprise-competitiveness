<template>
    <div id="sunburst" style="width:100%;height:70%">
    </div>
</template>
<script>
import * as echarts from 'echarts';

export default ({
    name:"sunburstChart2",
    data(){
        return{
         sunburstdata:""
        }
    },mounted(){
        this.initsun()
    },methods:{
        initsun(){
                var chartDom = document.getElementById('sunburst');
                var myChart = echarts.init(chartDom);
                var option;

                var item1 = {
                    color: '#3399FF'
                };
                var item2 = {
                    color: '#33CCFF'
                };
                var item3 = {
                    color: '#33FFFF'
                };
                // var data = [{
                //     name:"0",
                //     children: [{
                //         value: 5,
                //         name:"a",
                //         children: [{
                //             value: 1,
                //             name:"a1",
                //             itemStyle: item1
                //         }, {
                //             value: 2,
                //             name:"a2",
                //             children: [{
                //                 value: 1,
                //                 name:"a2.1",
                //                 itemStyle: item2
                //             }]
                //         }, {
                //             children: [{
                //                 value: 1
                //             }]
                //         }],
                //         itemStyle: item1
                //     }, {
                //         value: 10,
                //         children: [{
                //             value: 6,
                //             children: [{
                //                 value: 1,
                //                 itemStyle: item1
                //             }, {
                //                 value: 1
                //             }, {
                //                 value: 1,
                //                 itemStyle: item2
                //             }, {
                //                 value: 1
                //             }],
                //             itemStyle: item3
                //         }, {
                //             value: 2,
                //             children: [{
                //                 value: 1
                //             }],
                //             itemStyle: item3
                //         }, {
                //             children: [{
                //                 value: 1,
                //                 itemStyle: item2
                //             }]
                //         }],
                //         itemStyle: item1
                //     }],
                //     itemStyle: item1
                // }, {
                //     value: 9,
                //     children: [{
                //         value: 4,
                //         children: [{
                //             value: 2,
                //             itemStyle: item2
                //         }, {
                //             children: [{
                //                 value: 1,
                //                 itemStyle: item1
                //             }]
                //         }],
                //         itemStyle: item1
                //     }, {
                //         children: [{
                //             value: 3,
                //             children: [{
                //                 value: 1
                //             }, {
                //                 value: 1,
                //                 itemStyle: item2
                //             }]
                //         }],
                //         itemStyle: item3
                //     }],
                //     itemStyle: item2
                // }, {
                //     value: 7,
                //     children: [{
                //         children: [{
                //             value: 1,
                //             itemStyle: item3
                //         }, {
                //             value: 3,
                //             children: [{
                //                 value: 1,
                //                 itemStyle: item2
                //             }, {
                //                 value: 1
                //             }],
                //             itemStyle: item2
                //         }, {
                //             value: 2,
                //             children: [{
                //                 value: 1
                //             }, {
                //                 value: 1,
                //                 itemStyle: item1
                //             }],
                //             itemStyle: item1
                //         }],
                //         itemStyle: item3
                //     }],
                //     itemStyle: item1
                // }, {
                //     children: [{
                //         value: 6,
                //         children: [{
                //             value: 1,
                //             itemStyle: item2
                //         }, {
                //             value: 2,
                //             children: [{
                //                 value: 2,
                //                 itemStyle: item2
                //             }],
                //             itemStyle: item1
                //         }, {
                //             value: 1,
                //             itemStyle: item3
                //         }],
                //         itemStyle: item3
                //     }, {
                //         value: 3,
                //         children: [{
                //             value: 1,
                //         }, {
                //             children: [{
                //                 value: 1,
                //                 itemStyle: item2
                //             }]
                //         }, {
                //             value: 1
                //         }],
                //         itemStyle: item3
                //     }],
                //     itemStyle: item1
                // }];
                var data=[
                    {
                    itemStyle: item1,
                    name:"剑南春（公司名字）",
                    children:[
                       {  name:"剑南春",
                        //   value:2,
                          itemStyle: item1,
                          children:[
                                   {name:"水晶剑南春",
                                    value:1,
                                    itemStyle: item1
                                   },
                                   {name:"珍藏级剑南春",
                                    value:1,
                                    itemStyle: item3
                                   },                                  
                                   ]
                      },
                     {  name:"金剑南",
                         itemStyle: item1,
                         children:[
                            {name:"金剑南K6",
                             value:1,
                             itemStyle: item1
                            },
                            {name:"24K金剑南",
                             value:1
                            },
                            {name:"金剑南K3",
                             value:1
                            },
                            {name:"金剑特曲",
                             value:1
                            },
                           ]
                      }
                           ]
                    },
                   {
                
                    name:"剑南春（公司名字）",
                    children:[
                       {  name:"剑南春",
                        //   value:2,
                          children:[
                                   {name:"水晶剑南春",
                                    value:1
                                   },
                                   {name:"珍藏级剑南春",
                                    value:1
                                   },                                  
                                   ]
                      },
                     {  name:"金剑南",
                        
                         children:[
                            {name:"金剑南K6",
                             value:1
                            },
                            {name:"24K金剑南",
                             value:1
                            },
                            {name:"金剑南K3",
                             value:1
                            },
                            {name:"金剑特曲",
                             value:1
                            },
                           ]
                      }
                           ]
                    },
                ]

                option = {
                    title:{
                       text:'产品旭日图',
                       textStyle:{
                       left:'40%',
                        }
        },
                    series: {
                        radius: ['15%', '80%'],
                        type: 'sunburst',
                        sort: null,
                        emphasis: {
                            focus: 'ancestor'
                        },
                        data: data,
                        label: {
                            rotate: 'radial'
                        },
                        levels: [],
                        itemStyle: {
                            color: '',
                            borderWidth: 2
                        }
                    }
                };

                option && myChart.setOption(option);
        }
    }
})
</script>
<style scoped>

</style>
