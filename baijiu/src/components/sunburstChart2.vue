<template>
  <div id="qipao"></div>
</template>
<script>
import * as echarts from "echarts";
import PubSub from "pubsub-js";
import $ from "jquery";
// import * as d3 from 'd3'
export default {
  data() {
    return {
      company: ["剑南春", "郎酒", "泸州老窖", "沱牌舍得", "五粮液", "水井坊"],
    };
  },
  mounted() {
    this.initQipao(6);
    PubSub.subscribe("companyName", (msg, data) => {
      for (var i = 0; i < this.company.length; i++) {
        if (data == this.company[i]) this.initQipao(i);
      }
    });
  },
  methods: {
    initQipao(qipaoData) {
      //   var ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';

      var chartDom = document.getElementById("qipao");
      var myChart = echarts.init(chartDom);
      var option;

      $.when(
        $.get("static/qipao_final.json"),
        $.getScript(
          "https://cdn.jsdelivr.net/npm/d3-hierarchy@2.0.0/dist/d3-hierarchy.min.js"
        )
      ).done(function(res) {
        if (qipaoData == 6) run(res[0]);
        else {
          var companys = [
            "剑南春",
            "郎酒",
            "泸州老窖",
            "沱牌舍得",
            "五粮液",
            "水井坊",
          ];
          run(res[0][companys[qipaoData]]);
        }
      });

      function run(rawData) {
        var dataWrap = prepareData(rawData);

        initChart(dataWrap.seriesData, dataWrap.maxDepth);
      }

      function prepareData(rawData) {
        var seriesData = [];
        var maxDepth = 0;

        function convert(source, basePath, depth) {
          if (source == null) {
            return;
          }
          if (maxDepth > 5) {
            return;
          }
          maxDepth = Math.max(depth, maxDepth);

          seriesData.push({
            id: basePath,
            value: source.$count,
            depth: depth,
            index: seriesData.length,
          });

          for (var key in source) {
            if (source.hasOwnProperty(key) && !key.match(/^\$/)) {
              var path = basePath + "." + key;
              convert(source[key], path, depth + 1);
            }
          }
        }

        convert(rawData, "option", 0);

        return {
          seriesData: seriesData,
          maxDepth: maxDepth,
        };
      }

      function initChart(seriesData, maxDepth) {
        var displayRoot = stratify();

        function stratify() {
          return d3
            .stratify()
            .parentId(function(d) {
              return d.id.substring(0, d.id.lastIndexOf("."));
            })(seriesData)
            .sum(function(d) {
              return d.value || 0;
            })
            .sort(function(a, b) {
              return b.value - a.value;
            });
        }

        function overallLayout(params, api) {
          var context = params.context;
          d3
            .pack()
            .size([api.getWidth() - 2, api.getHeight() - 2])
            .padding(3)(displayRoot);

          context.nodes = {};
          displayRoot.descendants().forEach(function(node, index) {
            context.nodes[node.id] = node;
          });
        }

        function renderItem(params, api) {
          var context = params.context;

          // Only do that layout once in each time `setOption` called.
          if (!context.layout) {
            context.layout = true;
            overallLayout(params, api);
          }

          var nodePath = api.value("id");
          var node = context.nodes[nodePath];

          if (!node) {
            // Reder nothing.
            return;
          }

          var isLeaf = !node.children || !node.children.length;

          var focus = new Uint32Array(
            node.descendants().map(function(node) {
              return node.data.index;
            })
          );

          var nodeName = isLeaf
            ? nodePath
                .slice(nodePath.lastIndexOf(".") + 1)
                .split(/(?=[A-Z][^A-Z])/g)
                .join("\n")
            : "";

          var z2 = api.value("depth") * 2;

          return {
            type: "circle",
            focus: focus,
            shape: {
              cx: node.x,
              cy: node.y,
              r: node.r,
            },
            transition: ["shape"],
            z2: z2,
            textContent: {
              type: "text",
              style: {
                // transition: isLeaf ? 'fontSize' : null,
                text: nodeName,
                fontFamily: "Arial",
                width: node.r * 1.5,
                overflow: "truncate",
                fontSize: node.r / 3,
              },
              emphasis: {
                style: {
                  overflow: null,
                  fontSize: Math.max(node.r / 3, 12),
                },
              },
            },
            textConfig: {
              position: "inside",
            },
            style: {
              fill: api.visual("color"),
            },
            emphasis: {
              style: {
                fontFamily: "Arial",
                fontSize: 12,
                shadowBlur: 20,
                shadowOffsetX: 3,
                shadowOffsetY: 5,
                shadowColor: "rgba(0,0,0,0.3)",
              },
            },
          };
        }

        var option = {
          dataset: {
            source: seriesData,
          },
          tooltip: {},
          visualMap: {
            show: false,
            min: 0,
            max: maxDepth,
            dimension: "depth",
            inRange: {
              // color: ["#4682B4", "#e0ffff"],
              color: ["#0B486B", "#F56217"],
              // color: ["#16BFFD", "#CB3066"],
            },
          },
          hoverLayerThreshold: Infinity,
          series: {
            type: "custom",
            renderItem: renderItem,
            progressive: 0,
            coordinateSystem: "none",
            encode: {
              tooltip: "value",
              itemName: "id",
            },
          },
        };

        myChart.setOption(option);

        myChart.on("click", { seriesIndex: 0 }, function(params) {
          drillDown(params.data.id);
        });

        function drillDown(targetNodeId) {
          displayRoot = stratify();
          if (targetNodeId != null) {
            displayRoot = displayRoot.descendants().find(function(node) {
              return node.data.id === targetNodeId;
            });
          }
          // A trick to prevent d3-hierarchy from visiting parents in this algorithm.
          try {
            displayRoot.parent = null;
          } catch {}
          myChart.setOption({
            dataset: {
              source: seriesData,
            },
          });
        }

        // Reset: click on the blank area.
        myChart.getZr().on("click", function(event) {
          if (!event.target) {
            drillDown();
          }
        });
      }

      option && myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
  },
};
</script>

<style>
#qipao {
  width: 80%;
  height: 80%;
  position: relative;
  left: 10%;
  top: 7%;
}
</style>
