<template>
    <div class="test" id='mapbox' >
    <svg id="my_dataviz" width="1500" height="800" left="300"></svg>
    </div>
</template>

<script>
import * as d3 from 'd3'
export default {
   name:'sichuanmap',
   data(){
      return{
        sichuandata:''
      }
   },
   mounted(){
         this.initmap(this.sichuandata)
   },
   methods:{
        initmap(){
        var svg = d3.select("#my_dataviz"),
			width = +svg.attr("width"),
			height = +svg.attr("height");
		    // console.log(d3)

		var projection = d3.geoMercator()
			.center([104.065735, 30.659462]) // 成都市的经纬度        （原来的经纬度） 104.10194, 30.65984
			.scale(2800)
			.translate([width / 2, height / 3.5])

		var markers = [{
				long: 101.30413,
				lat: 26.8639,
				name: "攀枝花 "
			},
			{
				long: 104.7039,
				lat: 29.12371,
				name: "自贡"
			},
			{
				long: 104.20702,
				lat: 31.09263,
				name: "德阳"
			},
			{
				long: 105.79034,
				lat: 32.20409,
				name: "广元"
			},
			{
				long: 104.85459,
				lat: 29.59346,
				name: "内江" 
			},
			{
				long: 103.70194,
				lat: 30.54984,
				name: "成都"
			},
			{
				long: 105.22636,
				lat: 30.55541,
				name: "遂宁"
			},

			{
				long: 104.61947,
				lat: 28.66593,
				name: "宜宾"
			},
			{
				long: 107.51177,
				lat: 31.19603,
				name: "达州"
			},
			{
				long: 102.50954,
				lat: 30.06982,
				name: "雅安"
			},

			{
				long: 106.76897,
				lat: 31.85131,
				name: "巴中"
			},

			{
				long: 103.832377,
				lat: 30.04222,
				name: "眉山"
			},

			{
				long: 106.118889,
				lat: 31.01529,
				name: "南充"
			},


			{
				long: 100.96254,
				lat: 30.04932,
				name: "甘孜"
			},

			{
				long: 104.56735,
				lat: 31.53465,
				name: "绵阳"
			},
			{
				long: 105.43501,
				lat: 28.00875,
				name: "泸州"
			},
			{
				long: 103.47879,
				lat: 29.24447,
				name: "乐山"
			},
			{
				long: 102.22477,
				lat: 31.8994,
				name: "阿坝"
			},
			{
				long: 102.26746,
				lat: 27.88164,
				name: "凉山"
			},
			{
				long: 106.64188,
				lat: 30.27392,
				name: "	广安"
			},
			{
				long: 104.9522,
				lat: 30.11758,
				name: "	 资阳"
			},

		];

var a=400;
var vulue = [128+a, 291, 342, 493, 362, 1078, 413, 1187, 1124, 385, 1741, 571, 1493, 44, 693, 1484, 546, 254, 930, 745, 430];
for (var i=0;i<=20;i++)
{
	vulue[i]+=a;
}


		// [1,   2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12, 13, 14, 15, 16 ,17 ,18 ,19,20,21]
        d3.json("/static/sichuan.json")
        .then(function(data){
            // Draw the map
				var provinces = svg.append("g")
					.selectAll("path")
					.data(data.features)
					.enter()
					.append("path")

					.attr("d",d3.geoPath()
						.projection(projection)
					)
					.style("stroke", "black")
					.style("opacity", 0.3)
					// .attr('fill',function(d){
					// 	return 'blue'
					// })


				var maxvalue = 2000;
				var minvalue = 0;

				//定义一个线性比例尺，将最小值和最大值之间的值映射到[0, 1]
				var linear = d3.scaleLinear()
					.domain([minvalue, maxvalue])
					.range([0, 1]);

				//定义最小值和最大值对应的颜色
				var min = d3.rgb(0, 255, 255); //浅蓝色
				var max = d3.rgb(0, 0, 255); //蓝色

				//颜色插值函数
				var computeColor = d3.interpolate(min, max);
							 //  d3.interpolateRgb(min,max)  RGB可省掉不写
				provinces.attr("fill", function(d, i) {
					console.log(d);
					var t = linear(vulue[i]);
					var color = computeColor(t);
					// console.log(color)
					return color.toString();
					// }
				})
					
				var location = svg.selectAll("location")
					.data(markers)
					.enter()
					.append("g")
					.attr("transform", function(d) {
						var coor = projection([d.long, d.lat]); //经纬度的投影
						return "translate(" + coor[0] + "," + coor[1] + ")";
					});
				location.append("text")
					.text(function(d){
						return d.name;
					})




                 //颜色相对应的值
				var defs = svg.append("defs");
				var linearGradient = defs.append("linearGradient")
					.attr("id", "linearColor")
					.attr("x1", "0%")
					.attr("y1", "0%")
					.attr("x2", "100%")
					.attr("y2", "0%");

				var stop1 = linearGradient.append("stop")
					.attr("offset", "0%")
					.style("stop-color", min.toString());

				var stop2 = linearGradient.append("stop")
					.attr("offset", "100%")
					.style("stop-color", max.toString());

				//添加一个矩形，并应用线性渐变
				var colorRect = svg.append("rect")
					.attr("x",950)
					.attr("y", 480)
					.attr("width", 140)
					.attr("height", 10)
					.style("fill", "url(#" + linearGradient.attr("id") + ")");

				//添加文字
				var minValueText = svg.append("text")
					.attr("class", "valueText")
					.attr("x", 940)
					.attr("y", 480)
					 // .attr("dy", "-0.3em")//调微小距离
					.text(function() {
						return minvalue;
					});

				var maxValueText = svg.append("text")
					.attr("class", "valueText")
					.attr("x", 1070)
					.attr("y", 480)
					// .attr("dy", "-0.3em") //调微小距离
					.text(function() {
						return maxvalue;
					});
        })
		// d3.json("/static/sichuan.json",
		// 	function(data) {
				
		// 	})
        }
   }
}
</script>