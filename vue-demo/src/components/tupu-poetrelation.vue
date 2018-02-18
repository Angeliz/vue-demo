<template>
  <div id="myChart" style="width: 800px;height: 600px;"></div>
</template>

<script>
  // 引入基本模板
  let echarts = require('echarts/lib/echarts');
  // 引入柱状图组件
  require("echarts/lib/chart/graph");
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  export default {
    data() {
      return {
        data: ''
      }
    },
    mounted(){
      this.drawLine();
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart'));
        let desinfo = [];
        let links =[];
        let namelist = [];
        // 绘制图表
        this.$api.get('/datasource/allpoet', null, json => {
          const num = json.length;
          for (let m = 0; m < num; m++) {
            namelist.push(json[m].name);
          }
          for (let a = 0; a < num; a++) {
            desinfo.push(
              {
                name:json[a].name,
                ob:json[a].ob,
                borntime:json[a].born,
                id:json[a].id,
                symbolSize:10.0
              }
            );
          }
          this.$api.get('/datasource/relation',null,function (rela) {
            console.log("下面输入获得的rela列表");
            console.log(rela);
            for (let b=0;b<rela.length;b++){
              links.push({
                  source:rela[b].name1,
                  target:rela[b].name2,
                  source_uri:rela[b].poet1,
                  target_uri:rela[b].poet2,
                  value:rela[b].refer,
                  lineStyle:{normal:{width: 0.8000}}
                }
              );
            }
            console.log("下面输出赋值遍历好的links");
            console.log(links);
            console.log(desinfo);
            for(let x=0;x<links.length;x++){
              for(let b=0;b<desinfo.length;b++){
                if (desinfo[b].name==links[x].source){
                  desinfo[b].symbolSize +=0.1;
                }else if (desinfo[b].name==links[x].target){
                  desinfo[b].symbolSize +=0.1;
                }
              }
            }
            for(let b=0;b<desinfo.length;b++){
              if(desinfo[b].symbolSize<=10.3){
                desinfo.splice(b,1);
              }
            }
            console.log(desinfo);

            let option = {
              title: {
                text: ''
              },
              tooltip: {},
              series: [
                {
                  type: 'graph',
                  layout: 'circular',
                  circular: {
                    rotateLabel: true
                  },
                  roam: true,
                  draggable:true,
                  animation:false,
                  label: {
                    normal: {
                      show: true,
                      position: [50,50],
                      formatter: '{b}',
                      textStyle:{
                        fontSize:10
                      }
                    }
                  },
                  lineStyle: {
                    normal: {
                      // color: '#4a4564',
                      color: '#ABC327',
                      curveness: 0.5
                    }
                  },
                  itemStyle:{
                    normal:{
                      // color:'#292638'
                      color:'#6C890B'
                    }
                  },
                  force: {
                    repulsion: 100,
                    edgeLength:5
                  },
                  edgeSymbol: ['circle', 'arrow'],
                  edgeSymbolSize: [4, 6],
                  edgeLabel: {
                    normal: {
                      textStyle: {
                        fontSize: 20
                      }
                    }
                  },
                  data: desinfo.map(function (node) {
                    return {
                      name:node.name,
                      value:node.ob,
                      symbolSize:node.symbolSize
                    };
                  }),
                  links:links
                }
              ]
            };
            console.log(11111);
            myChart.setOption(option);
          });
        })
      }
    }
  }
</script>
