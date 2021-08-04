<template>
    <div id="mountNode"></div>
</template>
<script>/*Fixing iframe window.innerHeight 0 issue in Safari*/document.body.clientHeight;</script>
//<!-- <script src="https://gw.alipayobjects.com/os/antv/pkg/_antv.g2-3.5.1/dist/g2.min.js"></script>
// <script src="https://gw.alipayobjects.com/os/antv/pkg/_antv.data-set-0.10.1/dist/data-set.min.js"></script>
// <script src="https://gw.alipayobjects.com/os/antv/assets/lib/jquery-3.2.1.min.js"></script> -->
<script>
import * as G2 from '@antv/g2'
import {DataView} from '@antv/data-set'
import {DataSet} from '@antv/data-set'
import $ from 'jquery'
export default {
      name:"sunburstChart",
      data(){
        return {
            sunburst:" ",
        }
      },
      mounted(){
          this.initsunChart(this.sunburst)
      },
      methods:{
         initsunChart(){
                var _DataSet = DataSet,
                    DataView = _DataSet.DataView;
                //getJSON() 方法使用 AJAX 的 HTTP GET 请求获取 JSON 数据。
                $.getJSON('https://gw.alipayobjects.com/os/antvdemo/assets/data/sunburst.json', function(data) {
                    var dv = new DataView();
                    dv.source(data, {
                    type: 'hierarchy'
                    }).transform({
                    type: 'hierarchy.partition', // 根据树形数据生成相邻层次图 Adjacency Diagram 布局
                    field: 'sum',
                    as: ['x', 'y']
                    });
                    var source = [];
                    var nodes = dv.getAllNodes();
                    nodes.map(function(node) {
                    if (node.depth === 0) {
                        // 父节点不展示
                        return;
                    }
                    var obj = {};
                    obj.label = node.data.label;
                    obj.sum = node.data.sum;
                    obj.uv = node.data.uv;
                    obj.value = node.value;
                    obj.x = node.x;
                    obj.y = node.y;
                    source.push(obj);
                    return node;
                    });
                    var chart = new G2.Chart({
                    container: 'mountNode',
                    forceFit: true,
                    height: window.innerHeight,
                    padding: 0
                    });
                    chart.data(source);
                    chart.coordinate('polar', {
                    innerRadius: 0.3
                    });
                    chart.tooltip({
                    showTitle: false
                    });
                    chart.axis(false);
                    chart.legend(false);

                    chart
                    .polygon()
                    .position('x*y')
                    .color('value', '#BAE7FF-#1890FF-#0050B3')
                    // .active(false)
                    .style({stroke: '#FFF',
                    lineWidth: 1
                    }).tooltip('label*sum');
                    chart.render();
                });

                //  this.$echartsResize(myChart);
                window.addEventListener("resize", function () {
            myChart.resize();
          });
         }
      }
  }
</script>
<style scoped>
::-webkit-scrollbar{display:none;}html,body{overflow:hidden;height:100%;margin:0;}
</style>