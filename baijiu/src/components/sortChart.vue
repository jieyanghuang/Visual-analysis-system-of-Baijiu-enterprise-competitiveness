<template>
  <div id="c1">
    <p>各市州竞争力排名图</p>
  </div>
</template>

<script>

import {Chart} from '@antv/g2';

export default {
  mounted(){
            const data = [
                  
                  { type: "水井坊", value: 67.1},
                  { type: "沱牌", value:153.81},
                  { type: "剑南春", value: 478.56 },
                  { type: "郎酒", value:573.2 },
                  { type: "泸州老窖", value:862.52},
                  { type: "五粮液", value:3005.21 },
                  ];
  
  const chart = new Chart({
                    container: 'c1',
                    width:305,
                    height: 360,
                    padding: [ 10, 10, 20, 50]
                  });
                  chart.data(data);
                  chart.scale({
                    value: {
                      max: 3900,
                      min: 0,
                      alias:'品牌价值（亿）',
                      
                    },
                  });
                  chart.axis('type', {
                    title:null,
                    tickLine: null,
                    line: null,
                  });

                  chart.axis('value', {
                    label: null,
                    title: {
                      offset: 8,
                      style: {
                        fontSize: 12,
                        fontWeight: 200,
                      },
                    },
                  });
                  chart.legend(false);
                  chart.coordinate().transpose();
                  chart
                    .interval()
                    .position('type*value')
                    .size(35)
                    .label('value', {
                      style: {
                        fill: '#8d8d8d',
                      },
                      offset: 10,
                    });
                  chart.interaction('element-active');
                  chart.render();

              }

}
</script>

<style>
   #c1 {
     position:absolute;
    top:10%
     
   }
   p{
     font-style: normal;
     font-weight: bold;
   }
</style>