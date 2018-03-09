<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="基本信息" name="first">
      <h3 style="font-weight: 600">生卒年</h3>
      <p>生年：{{born}}</p>
      <p>卒年：{{death}}</p>
      <hr/>
      <h3>介绍</h3>
      <p>{{info}}</p>
      <hr/>
      <h3>作品</h3>
      <p>{{work}}</p>
    </el-tab-pane>
    <!--<el-tab-pane label="关系图谱" name="second">-->
      <!--<el-row :gutter="40">-->
        <!--<el-col :md="16">-->
          <!--<div class="grid-content bg-purple">-->
            <!--<div id="tupurelation" style="width: 600px;height: 550px;"></div>-->
          <!--</div>-->
        <!--</el-col>-->
        <!--<el-col :md="8">-->
          <!--<div class="grid-content bg-purple">-->
            <!--<hr>-->
            <!--<h4>所选结点</h4>-->
            <!--&lt;!&ndash;<p>{{this.title}}</p>&ndash;&gt;-->
            <!--<hr>-->
            <!--<h4>详细信息</h4>-->
            <!--&lt;!&ndash;<CardPoem  :name=this.title  :content=this.content ></CardPoem>&ndash;&gt;-->
          <!--</div>-->
        <!--</el-col>-->
      <!--</el-row>-->
    <!--</el-tab-pane>-->
    <el-tab-pane label="作品图谱" name="second">
      <el-row :gutter="40">
        <el-col :md="16">
          <div class="grid-content bg-purple">
            <div id="tupuwork" style="width: 600px;height: 550px;"></div>
          </div>
        </el-col>
        <el-col :md="8">
          <div class="grid-content bg-purple">
            <hr>
            <h4>所选结点</h4>
            <p>{{this.title}}</p>
            <hr>
            <h4>详细信息</h4>
            <CardPoem  v-for="i in list"  :name=i.title  :content=i.content :id=i.id></CardPoem>
          </div>
        </el-col>
      </el-row>
    </el-tab-pane>
    <!--<el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>-->
  </el-tabs>
</template>
<script>
  import CardPoem from './card-poem.vue'

  // 引入基本模板
  let echarts = require('echarts/lib/echarts');
  // 引入柱状图组件
  require("echarts/lib/chart/graph");
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')

  export default {
    components: { CardPoem },
    props: ['born','death','info','work'],
    data() {
      return {
        activeName: 'first',
        nodeslist:[{
          name: this.$route.params.id,
          value:this.$route.params.id,
//          id:this.$route.query.uri,
          itemStyle: {
            normal: {
              color: 'blue'
            }
          }
        }],
        edgelist:[],
        list:[],
        author:this.$route.params.id
      };
    },
    created(){
      this.getData();
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      getData () {
        this.nodeslist=[{
          name: this.$route.params.id,
          value:[this.$route.params.id,this.$route.query.uri],
//          id:this.$route.query.uri,
          itemStyle: {
            normal: {
              color: 'blue'
            }
          }
        }];
        this.edgelist=[];
        this.$api.get('/datasource/work?poeturi='+this.$route.query.uri, null,  r => {
//          console.log(1111111111111);
//          console.log(r);
          if(r.length>50){
            r=r.slice(0,50);
          }
//          console.log(r);
          for (let i = 0; i < r.length; i++) {
            this.nodeslist.push({
              name: r[i].name,
              value:[r[i].content,r[i].id],
              itemStyle: {
                normal: {
                  color: 'blue'
                }
              }
            });
            this.edgelist.push({
              source: this.$route.params.id,
//              source:this.nodeslist[0].value,
              target: r[i].name,
              value: r[i].content,
//              lineStyle: {normal: {width: 0.8000}}
            });
          }
//          console.log(this.nodeslist);
//          console.log(this.edgelist);
//          this.draw();
          let tupuwork = echarts.init(document.getElementById('tupuwork'));
          tupuwork.showLoading();
          let option = {
            series: [
              {
                type: 'graph',
                layout: 'force',
                symbolSize: 30,
                roam: true,
                draggable: true,
                animation: false,
                label: {
                  normal: {
                    show: true,
                    position: 'inside',
//                  formatter: '{b}',
                    textStyle: {
                      fontSize: 10
                    }
                  }
                },
                force: {
                  repulsion: 140,
                  layoutAnimation:false
                },
                edgeSymbol: ['circle', 'arrow'],
                edgeSymbolSize: [4, 6],
                edgeLabel: {
                  normal: {
                    textStyle: {
                      fontSize: 12
                    }
                  }
                },
                data: this.nodeslist,
                links: this.edgelist,
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
//          console.log('0000000000');
          tupuwork.hideLoading();
          tupuwork.setOption(option);
//          console.log(123);
          tupuwork.on('click', params=> {
            console.log(params);
            this.list=[];
            this.list.push({
              'title':params.data.name,
              'content':params.data.value[0],
              'id':params.data.value[1]
            });
          });
        })
      }
    }
  };
</script>
