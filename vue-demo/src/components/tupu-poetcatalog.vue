<template>
  <div id="myChart" style="width:100%;height: 600px;"></div>
</template>

<script>
  // 引入基本模板
  let echarts = require('echarts/lib/echarts');
  // 引入柱状图组件
  require("echarts/lib/chart/tree");
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  export default {
    data() {
      return {
        data: '',
      }
    },
    mounted(){
      this.drawLine();
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart'));
        myChart.showLoading();
        let one = [];
        let two = [];
        let three = [];
        let four = [];
        let years = [
          {
            name: "初唐",
            children: one
          },
          {
            name: "盛唐",
            children: two
          },
          {
            name: "中唐",
            children: three
          },
          {
            name: "晚唐",
            children: four
          }
        ];
        let dataroot = {
          "name": "诗人",
          "children": years
        };
        this.$api.get('/datasource/allpoet', null, function (json) {//这里获取诗人列表
            const num = json.length;
            for (let i = 0; i < num; i++) {
              if (json[i].born > 617 && json[i].born < 712) {
                one.push(
                  {
                    name: json[i].name
                  }
                );
              }
              if (json[i].born > 711 && json[i].born < 762) {
                two.push(
                  {
                    name: json[i].name
                  }
                );
              }
              if (json[i].born > 761 && json[i].born < 827) {
                three.push(
                  {
                    name: json[i].name
                  }
                );
              }
              if (json[i].born > 826 && json[i].born < 860) {
                four.push(
                  {
                    name: json[i].name
                  }
                );
              }
            }
            let option = {
              tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'
              },
              series: [
                {
                  type: 'tree',

                  data: [dataroot],

                  left: '2%',
                  right: '2%',
                  top: '8%',
                  bottom: '20%',

                  symbol: 'emptyCircle',

                  orient: 'vertical',

                  expandAndCollapse: true,

                  label: {
                    normal: {
                      position: 'top',
                      rotate: -90,
                      verticalAlign: 'middle',
                      align: 'right',
                      fontSize: 10
                    }
                  },

                  leaves: {
                    label: {
                      normal: {
                        position: 'bottom',
                        rotate: -90,
                        verticalAlign: 'middle',
                        align: 'left'
                      }
                    }
                  },

                  animationDurationUpdate: 750
                }
              ]
            };
            myChart.hideLoading();
            myChart.setOption(option);
          }
        );
      }
    }
  }
</script>
