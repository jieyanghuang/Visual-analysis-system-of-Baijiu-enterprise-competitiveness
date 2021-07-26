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
                var data = [{
                    children: [{
                        value: 5,
                        children: [{
                            value: 1,
                            itemStyle: item1
                        }, {
                            value: 2,
                            children: [{
                                value: 1,
                                itemStyle: item2
                            }]
                        }, {
                            children: [{
                                value: 1
                            }]
                        }],
                        itemStyle: item1
                    }, {
                        value: 10,
                        children: [{
                            value: 6,
                            children: [{
                                value: 1,
                                itemStyle: item1
                            }, {
                                value: 1
                            }, {
                                value: 1,
                                itemStyle: item2
                            }, {
                                value: 1
                            }],
                            itemStyle: item3
                        }, {
                            value: 2,
                            children: [{
                                value: 1
                            }],
                            itemStyle: item3
                        }, {
                            children: [{
                                value: 1,
                                itemStyle: item2
                            }]
                        }],
                        itemStyle: item1
                    }],
                    itemStyle: item1
                }, {
                    value: 9,
                    children: [{
                        value: 4,
                        children: [{
                            value: 2,
                            itemStyle: item2
                        }, {
                            children: [{
                                value: 1,
                                itemStyle: item1
                            }]
                        }],
                        itemStyle: item1
                    }, {
                        children: [{
                            value: 3,
                            children: [{
                                value: 1
                            }, {
                                value: 1,
                                itemStyle: item2
                            }]
                        }],
                        itemStyle: item3
                    }],
                    itemStyle: item2
                }, {
                    value: 7,
                    children: [{
                        children: [{
                            value: 1,
                            itemStyle: item3
                        }, {
                            value: 3,
                            children: [{
                                value: 1,
                                itemStyle: item2
                            }, {
                                value: 1
                            }],
                            itemStyle: item2
                        }, {
                            value: 2,
                            children: [{
                                value: 1
                            }, {
                                value: 1,
                                itemStyle: item1
                            }],
                            itemStyle: item1
                        }],
                        itemStyle: item3
                    }],
                    itemStyle: item1
                }, {
                    children: [{
                        value: 6,
                        children: [{
                            value: 1,
                            itemStyle: item2
                        }, {
                            value: 2,
                            children: [{
                                value: 2,
                                itemStyle: item2
                            }],
                            itemStyle: item1
                        }, {
                            value: 1,
                            itemStyle: item3
                        }],
                        itemStyle: item3
                    }, {
                        value: 3,
                        children: [{
                            value: 1,
                        }, {
                            children: [{
                                value: 1,
                                itemStyle: item2
                            }]
                        }, {
                            value: 1
                        }],
                        itemStyle: item3
                    }],
                    itemStyle: item1
                }];
                

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
