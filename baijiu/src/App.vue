<template>
  <div id="app">
     <div id="title"><p>四川白酒企业可视分析系统</p></div>
     <div id="container">
            <div id="c2">
               <sortChart2/> 
            </div> 
            <div id="ciyun">
              <mywordCloud2/>
            </div> 
            <div id="xuritu">
              <sunburstChart2 />
              <div id=haoping>
                  <haoping/>
              </div>
            </div> 
            <div id="lineChart2"> 
                <lineChart/> 
            </div>
            <div id="parallelChart2">
               <parellelChart/> 
            </div>
             <div  id="mapbox2">
               <sichuanmap3/> 
            </div>    
     </div>
  </div>
</template>
<script>
import sortChart2 from './components/sortChart2.vue'
import sichuanmap3 from './components/sichuanmap3.vue'
import lineChart from './components/lineChart.vue'
import parellelChart from './components/parellelChart.vue'
import sunburstChart2 from './components/sunburstChart2.vue'
import haoping from './components/haoping.vue'
import mywordCloud2 from './components/mywordCloud2.vue'


export default {
  name: 'App',
  components: {
    sortChart2,
    sichuanmap3,
   lineChart,
   parellelChart,
   sunburstChart2,
   haoping,
   mywordCloud2
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
* {
            margin: 0;
            padding: 0;
        } 
#title{
            position: absolute;
            width: 100%;
            height: 10%;
            top: 10px;
            text-align: center;
            font-weight: bold;
            font-size:30px;
            color:black
        }
 #c2 {
    position:absolute;
    width:20%;
    /* height:61.15%; */
    height:63.1%;
    left:0.1%;
    top:0%;
    border-style: ridge;
    border-color:			#B0C4DE ;
    background-color:	rgba(224, 255, 255, 0.6)	;
    z-index:1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center; 
    border-radius: 6px 6px 6px 6px;
    
 }
 #lineChart2 {
    
    position: absolute;
    width: 36.5%;
    height:35.5%;
    top:64%;
    left:37%;
    border-style: ridge;
    border-color:	#B0C4DE ;
    background-color:rgba(224, 255, 255, 0.6)	;
    z-index:1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    border-radius: 6px 6px 6px 6px;
 }
 #parallelChart2  {
     position:absolute;
     top:64%;
     left:0.1%;
     width:36.5%;
     height:35.5%;
     
     border-style: ridge;
     border-color:	#B0C4DE;
     background-color:rgba(224, 255, 255, 0.6)	;
     z-index:1;
     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
     text-align: center;
     border-radius: 6px 6px 6px 6px;
    
 }
 #mapbox2 {
    position:absolute;
    top:0.15%;
    /* left:30%;
    width:80%;
    height:62%; */
    /* left:20%; */
    width:100%;
    height:100%;
    border-style:ridge;
    border-color:	#B0C4DE;
    background-color: rgba(135, 206, 235,0.39);
    z-index:0;
    
    
 }
 #xuritu {
    position:absolute;
    left:74%;
    right:0.1%;
    top:0%;
    width:26%;
    height:63.15%;
    border-style:ridge;
    border-color:	#B0C4DE;
    z-index:1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    background-color: rgba(224, 255, 255, 0.6)	;
    z-index:1;
    border-radius: 6px 6px 6px 6px;
 }
 #ciyun {
    position:absolute;
    left:74%;
    right:0.1%;
    top:64%;
    width:26%;
    /* height:37.5%; */
     height:35.5%;
    border-style:ridge;
    border-color:	#B0C4DE;
    background-color:rgba(224, 255, 255, 0.6)	;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    z-index:1;
    border-radius: 6px 6px 6px 6px;
 }
 #haoping{
    height:30%;
    left:2%
  
 }
</style>
