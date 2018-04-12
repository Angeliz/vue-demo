<template>
  <div>
    <Nav></Nav>
    <el-container>
      <el-aside width="10%" class="aside"></el-aside>
      <el-container>
        <el-main>
          <el-row :gutter="40">
            <el-col :md="14">
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="环形图" name="first">
                  <div class="grid-content bg-purple">
                    <div id="myChart" class="tupu"></div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="力导向图" name="second">
                  <div class="grid-content bg-purple">
                    <div id="myChart2" class="tupu" ></div>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </el-col>
            <el-col :md="10">
              <div class="grid-content bg-purple">
                <hr>
                <h4>所选结点</h4>
                <p>{{this.name0}}</p>
                <hr>
                <h4>详细信息</h4>
                <p>{{no}}</p>
                <CardPoem  v-for="i in list" :name=i.title  :content=i.content ></CardPoem>
                <CardPoet v-for="i in poet" :name=i.name :alter-name=i.alter_name :born=i.born :death=i.death :info=i.info :work=i.work :ob=i.ob></CardPoet>
              </div>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
      <el-aside width="10%" class="aside"></el-aside>
    </el-container>
  </div>
</template>

<script>
  import Nav from '../components/nav.vue'
  import CardPoem from '../components/card-poem.vue'
  import CardPoet from '../components/card-poet.vue'


  // 引入基本模板
  let echarts = require('echarts/lib/echarts');
  // 引入柱状图组件
  require("echarts/lib/chart/graph");
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  export default {
    components: {Nav,CardPoem,CardPoet},
    data() {
      return {
        activeName:'first',
        name0: '',
        poet:[],
        uri:'',
        list:[],
        no:''
      }
    },
    mounted(){
      this.drawLine();
    },
    methods: {
      drawLine() {
        const _this = this;
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart'));
        let myChart2=echarts.init(document.getElementById('myChart2'));
        let desinfo = [];
        let links =[];
        let namelist = [];
        // 绘制图表
        _this.$api.get('/allpoet.json', null, json => {
          myChart.showLoading();
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
          _this.$api.get('/allrefer.json',null,function (rela) {
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
                       color: '#E53935',
//                      color: '#ABC327',
                      curveness: 0.5
                    }
                  },
                  itemStyle:{
                    normal:{
//                      color:'#6C890B'
                      color:'#c23531'
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
            let option2 = {
              title: {
                text: ''
              },
              tooltip: {},
              series: [
                {
                  type: 'graph',
                  layout: 'force',
                  symbolSize: 28,
                  roam: true,
                  draggable:true,
                  animation:false,
                  label: {
                    normal: {
                      show: true,
                      position: 'inside',
                      formatter: '{b}',
                      textStyle:{
                        fontSize:10
                      }
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
                      value:node.ob
                    };
                  }),
                  // links: [],
                  links:links,
                  lineStyle: {
                    normal: {
                      opacity: 0.9,
                      width: 2,
                      curveness: 0
                    }
                  }
                }
              ]
            };
            console.log(11111);
            myChart.hideLoading();
            myChart.setOption(option);
            myChart2.setOption(option2);
            myChart.on('click', function (params) {
              console.log(params);
              if(params.dataType=="edge"){
                _this.toEdge(params);
              }else {
                _this.toNode(params);
              }
            });
            myChart2.on('click', function (params) {
              console.log(params);
              if(params.dataType=="edge"){
                _this.toEdge(params);
              }else {
                _this.toNode(params);
              }
            });
          });
        });
      },
      toNode(param) {
        this.no='';
        this.list=[];
        this.poet=[];
        console.log(param);
        this.name0=param.data.name;
        this.uri=param.data.value;
        this.$api.get('/datasource/poet?poeturi='+this.uri, null, r=> {
          console.log(r);
          if(r){
            this.poet=[...r];
          }else{
            this.no='暂时没有信息哦';
          }
        })
      },
      toEdge(param){
        this.no='';
        this.poet=[];
        this.name0=param.name;
        this.uri=param.value;
        console.log(this.uri);
        this.$api.get('/datasource/rela?referuri='+this.uri, null, r=> {
          console.log(23333333333);
          console.log(r);
          this.list=[];
          let str=r.results.bindings[0].poem.value;
          this.list=JSON.parse(str);
        })
      }
    }
  }
</script>
