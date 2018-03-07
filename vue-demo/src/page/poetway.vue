<template>
  <div>
    <Nav></Nav>
    <el-container>
      <el-aside width="10%"></el-aside>
      <el-container>
        <el-main>
          <el-row :gutter="40">
            <el-col :md="14">
              <div class="grid-content bg-purple">
                <div id="myChart" style="width: 600px;height: 600px;"></div>
                <div id="xChart" style="width: 600px;height: 600px;"></div>
              </div>
            </el-col>
            <el-col :md="10">
              <SearchPoetway v-on:answerSearch='search'></SearchPoetway>
              <CardSearchway v-for="i in placeInfo" :place=i.place :count=i.count></CardSearchway>
              <CardSearchpoet v-for="i in poetInfo" :name=i.name :time=i.time :site=i.site :info=i.info :poem=i.poem></CardSearchpoet>
              <CardSearchpoet v-for="i in lineInfo" :name=i.name :time=i.time :site=i.site :info=i.info :poem=i.poem></CardSearchpoet>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
      <el-aside width="10%"></el-aside>
    </el-container>
  </div>
</template>


<script>
  import Nav from '../components/nav.vue'
  import SearchPoetway from '../components/search-poetway.vue'
  import CardSearchway from '../components/card-searchway.vue'
  import CardSearchpoet from '../components/card-searchpoet.vue'

  import timeplace0 from '../components/timeplace.json'
  import 'echarts/map/js/china.js';
  // 引入基本模板
  let echarts = require('echarts/lib/echarts');


  // 引入提示框和title组件
  require('echarts/lib/component/tooltip');
  require('echarts/lib/component/title');
  require("echarts/lib/component/timeline");
  require("echarts/lib/component/visualMap");

  require("echarts/lib/component/markPoint");

  require("echarts/lib/component/markLine");

  require("echarts/lib/component/markArea");
  require("echarts/lib/chart/map");
  require("echarts/lib/chart/lines");
  require("echarts/lib/chart/scatter");


  export default {
    components: {Nav, SearchPoetway, CardSearchway, CardSearchpoet},
    data() {
      return {
        place: '',
        poetInfo: [],
        placeInfo: [],
        lineInfo: []
      }
    },
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine (){
        this.place = timeplace0;
//        console.log(this.place);
        let xChart = document.getElementById('xChart');
        xChart.style.display = 'none';
        let myChart0 = document.getElementById('myChart');
        myChart0.style.display = 'inline-block';
        let myChart = echarts.init(myChart0);
        const geoCoordMap={
          '上海': [121.4648, 31.2891],
            '东莞': [113.8953, 22.901],
            '东营': [118.7073, 37.5513],
            '中山': [113.4229, 22.478],
            '临汾': [111.4783, 36.1615],
            '临沂': [118.3118, 35.2936],
            '丹东': [124.541, 40.4242],
            '丽水': [119.5642, 28.1854],
            '乌鲁木齐': [87.9236, 43.5883],
            '佛山': [112.8955, 23.1097],
            '保定': [115.0488, 39.0948],
            '兰州': [103.5901, 36.3043],
            '包头': [110.3467, 41.4899],
            '北京': [116.4551, 40.2539],
            '北海': [109.314, 21.6211],
            '南京': [118.8062, 31.9208],
            '南宁': [108.479, 23.1152],
            '南昌': [116.0046, 28.6633],
            '南通': [121.1023, 32.1625],
            '厦门': [118.1689, 24.6478],
            '台州': [121.1353, 28.6688],
            '合肥': [117.29, 32.0581],
            '呼和浩特': [111.4124, 40.4901],
            '咸阳': [108.4131, 34.8706],
            '哈尔滨': [127.9688, 45.368],
            '唐山': [118.4766, 39.6826],
            '嘉兴': [120.9155, 30.6354],
            '大同': [113.7854, 39.8035],
            '大连': [122.2229, 39.4409],
            '天津': [117.4219, 39.4189],
            '太原': [112.3352, 37.9413],
            '威海': [121.9482, 37.1393],
            '宁波': [121.5967, 29.6466],
            '宝鸡': [107.1826, 34.3433],
            '宿迁': [118.5535, 33.7775],
            '常州': [119.4543, 31.5582],
            '广州': [113.5107, 23.2196],
            '廊坊': [116.521, 39.0509],
            '延安': [109.1052, 36.4252],
            '张家口': [115.1477, 40.8527],
            '徐州': [117.5208, 34.3268],
            '德州': [116.6858, 37.2107],
            '惠州': [114.6204, 23.1647],
            '成都': [103.9526, 30.7617],
            '扬州': [119.4653, 32.8162],
            '承德': [117.5757, 41.4075],
            '拉萨': [91.1865, 30.1465],
            '无锡': [120.3442, 31.5527],
            '日照': [119.2786, 35.5023],
            '昆明': [102.9199, 25.4663],
            '杭州': [119.5313, 29.8773],
            '枣庄': [117.323, 34.8926],
            '柳州': [109.3799, 24.9774],
            '株洲': [113.5327, 27.0319],
            '武汉': [114.3896, 30.6628],
            '汕头': [117.1692, 23.3405],
            '江门': [112.6318, 22.1484],
            '沈阳': [123.1238, 42.1216],
            '沧州': [116.8286, 38.2104],
            '河源': [114.917, 23.9722],
            '泉州': [118.3228, 25.1147],
            '泰安': [117.0264, 36.0516],
            '泰州': [120.0586, 32.5525],
            '济南': [117.1582, 36.8701],
            '济宁': [116.8286, 35.3375],
            '海口': [110.3893, 19.8516],
            '淄博': [118.0371, 36.6064],
            '淮安': [118.927, 33.4039],
            '深圳': [114.5435, 22.5439],
            '清远': [112.9175, 24.3292],
            '温州': [120.498, 27.8119],
            '渭南': [109.7864, 35.0299],
            '湖州': [119.8608, 30.7782],
            '湘潭': [112.5439, 27.7075],
            '滨州': [117.8174, 37.4963],
            '潍坊': [119.0918, 36.524],
            '烟台': [120.7397, 37.5128],
            '玉溪': [101.9312, 23.8898],
            '珠海': [113.7305, 22.1155],
            '盐城': [120.2234, 33.5577],
            '盘锦': [121.9482, 41.0449],
            '石家庄': [114.4995, 38.1006],
            '福州': [119.4543, 25.9222],
            '秦皇岛': [119.2126, 40.0232],
            '绍兴': [120.564, 29.7565],
            '聊城': [115.9167, 36.4032],
            '肇庆': [112.1265, 23.5822],
            '舟山': [122.2559, 30.2234],
            '苏州': [120.6519, 31.3989],
            '莱芜': [117.6526, 36.2714],
            '菏泽': [115.6201, 35.2057],
            '营口': [122.4316, 40.4297],
            '葫芦岛': [120.1575, 40.578],
            '衡水': [115.8838, 37.7161],
            '衢州': [118.6853, 28.8666],
            '西宁': [101.4038, 36.8207],
            '西安': [109.1162, 34.2004],
            '贵阳': [106.6992, 26.7682],
            '连云港': [119.1248, 34.552],
            '邢台': [114.8071, 37.2821],
            '邯郸': [114.4775, 36.535],
            '郑州': [113.4668, 34.6234],
            '鄂尔多斯': [108.9734, 39.2487],
            '重庆': [107.7539, 30.1904],
            '金华': [120.0037, 29.1028],
            '铜川': [109.0393, 35.1947],
            '银川': [106.3586, 38.1775],
            '镇江': [119.4763, 31.9702],
            '长春': [125.8154, 44.2584],
            '长沙': [113.0823, 28.2568],
            '长治': [112.8625, 36.4746],
            '阳泉': [113.4778, 38.0951],
            '青岛': [120.4651, 36.3373],
            '韶关': [113.7964, 24.7028],
            //自行添加的新的经纬度
            '甘肃天水': [105.69, 34.60],
            '洛阳': [112.16, 34.32],
            '四川大匡山': [104.72, 31.75],
            '金陵': [118.49, 31.56],
            '安陆': [113.69, 31.25]
        };
        myChart.showLoading();
        let poetnames = [];
        let timplace = [];
        this.place.poetTimePlace.forEach(function (item) {
          // console.log(item.timePlace);
          poetnames.push(
            item.poetname
          );
          // console.log(poetnames);
          timplace.push(
            item.timePlace
          )
        });
//        console.log(timplace);
        //对echarts图中的内容进行设置
        let convertData = (data)=> {
          let res = [];
          for (let i = 0; i < data.length - 1; i++) {
            // console.log(data[i].place);
            let fromCoord = geoCoordMap[data[i].place];
            let toCoord = geoCoordMap[data[i + 1].place];
            if (fromCoord && toCoord) {
              res.push({
                fromName: data[i].place,
                toName: data[i + 1].place,
                coords: [fromCoord, toCoord],
                value: [data[i].time, data[i + 1].time, data[i + 1].des],
                poem: data[i + 1].poet
              });
            }
          }
          return res;
        };
        let changelegend = function (data) {
          let res = new Object();
          let res2;
          for (let i = 0; i < data.length; i++) {
            res2 = data[i].toString();
            // res.res2 = false;
            res = {
              [res2]: false
            }
            // return res;
          }
          return res;
        };

        // var color = ['#009fe8', '#8a2be2'];
        let color = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83',
          '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'];
        let series = [];
        this.place.poetTimePlace.forEach(function (item, i) {
          //判断是否为当前诗人的诗人轨迹，只显示该诗人轨迹
          series.push(
            {
              name: item.poetname,
              type: 'lines',
              zlevel: 1,
              effect: {//控制移动的点
                show: true,
                period: 5,
                trailLength: 0.7,//尾巴的长度
                color: color[i],
                symbolSize: 5
              },
              lineStyle: {//基础的线
                normal: {
                  color: color[i],
                  width: 1.5,
                  curveness: 0.2
                }
              },
              data: convertData(item.timePlace)
            },
            {
              name: item.poetname,
              type: 'scatter',//地图上的地点标出
              coordinateSystem: 'geo',
              zlevel: 2,
              rippleEffect: {
                brushType: 'stroke'
              },
              label: {
                normal: {
                  show: true,
                  position: 'right',
                  formatter: '{b}'
                }
              },
              symbolSize: 8,
              /* function (val) {
               return val[2] / 8;
               },*/
              itemStyle: {
                normal: {
                  color: color[i]
                },
                emphasis: {
                  borderColor: '#f00',
                  borderWidth: 3
                }
              },
              data: item.timePlace.map((dataItem)=> {
                return {
                  name: dataItem.place,
                  value: geoCoordMap[dataItem.place].concat([dataItem.time]),
                  //.concat([dataItem.des])
                  des: dataItem.des,
                  poem: dataItem.poet
                };
              })
            });
        });
//        console.log('000000000');
        let option = {
          backgroundColor: '#fff',
          title: {},
          boundingCoords: [[80.50, 48.00], [130.00, 22.00]],
          tooltip: {
            trigger: 'item'
            // show:false
          },
          legend: {
            orient: 'vertical',
            top: 'top',
            left: 'left',
            data: poetnames,
            textStyle: {
              color: '#000'
            },
            selectedMode: 'multiple'
          },

          geo: {
            map: 'china',
            label: {
              normal: {
                show: true,//显示省份标签
                textStyle: {color: "#000"}//省份标签字体颜色
              },
              emphasis: {
                show: true,
                textStyle: {color: "#800080"}
              }
            },
            roam: true,
            itemStyle: {
              normal: {
                borderColor: '#b4a572',//区域边框颜色
                areaColor: "#f5f3f0",//区域颜色
                // areaColor: '#323c48',
                // borderColor: '#404a59'
              },
              emphasis: {
                areaColor: '#ffdead'
              }
            }
          },

          series: series
        };
        console.log(option.legend);
        myChart.hideLoading();
        myChart.setOption(option);

        myChart.on('click', (params) => {
          console.log(params);
          if (params.componentSubType == "lines") {
//            console.log(params);
            this.poetInfo = [];
            this.lineInfo = [];
            this.placeInfo = [];
            let item = {
              name: params.seriesName,
              time: params.value[0] + '-->' + params.value[1],
              site: params.data.fromName + '-->' + params.data.toName,
              info: params.value[2],
              poem: params.data.poem == '' ? '没有哦' : params.data.poem
            };
            this.lineInfo.push(item);
          }
          if (params.componentSubType == "scatter") {
//            console.log(params);
            this.poetInfo = [];
            this.lineInfo = [];
            this.placeInfo = [];
            let item = {
              name: params.seriesName,
              time: params.data.value[2],
              site: params.data.name,
              info: params.data.des,
              poem: params.data.poem == '' ? '没有哦' : params.data.poem
            };
            this.poetInfo.push(item);
          }

          if (params.componentType == "geo") {
//            console.log(params);
            let times = 0;
            this.poetInfo = [];
            this.lineInfo = [];
            this.placeInfo = [];
            for (let i = 0; i < this.place.poetTimePlace.length; i++) {
              for (let j = 0; j < this.place.poetTimePlace[i]['timePlace'].length; j++) {
                if (params.name == this.place.poetTimePlace[i]['timePlace'][j]['province']) {
                  times++;
                  this.poetInfo.push({
                    name: this.place.poetTimePlace[i]['poetname'],
                    time: this.place.poetTimePlace[i]['timePlace'][j]['time'],
                    site: this.place.poetTimePlace[i]['timePlace'][j]['place'],
                    info: this.place.poetTimePlace[i]['timePlace'][j]['des'],
                    poem: this.place.poetTimePlace[i]['timePlace'][j]['poet'] == '' ? '没有哦' : this.place.poetTimePlace[i]['timePlace'][j]['poet']
                  })
                }
              }
            }
            this.placeInfo.push({
              place: params.name,
              count: times
            });
          }
        });
      },


      search(input) {
//        console.log(input);
        const geoCoordMap={
          '上海': [121.4648, 31.2891],
          '东莞': [113.8953, 22.901],
          '东营': [118.7073, 37.5513],
          '中山': [113.4229, 22.478],
          '临汾': [111.4783, 36.1615],
          '临沂': [118.3118, 35.2936],
          '丹东': [124.541, 40.4242],
          '丽水': [119.5642, 28.1854],
          '乌鲁木齐': [87.9236, 43.5883],
          '佛山': [112.8955, 23.1097],
          '保定': [115.0488, 39.0948],
          '兰州': [103.5901, 36.3043],
          '包头': [110.3467, 41.4899],
          '北京': [116.4551, 40.2539],
          '北海': [109.314, 21.6211],
          '南京': [118.8062, 31.9208],
          '南宁': [108.479, 23.1152],
          '南昌': [116.0046, 28.6633],
          '南通': [121.1023, 32.1625],
          '厦门': [118.1689, 24.6478],
          '台州': [121.1353, 28.6688],
          '合肥': [117.29, 32.0581],
          '呼和浩特': [111.4124, 40.4901],
          '咸阳': [108.4131, 34.8706],
          '哈尔滨': [127.9688, 45.368],
          '唐山': [118.4766, 39.6826],
          '嘉兴': [120.9155, 30.6354],
          '大同': [113.7854, 39.8035],
          '大连': [122.2229, 39.4409],
          '天津': [117.4219, 39.4189],
          '太原': [112.3352, 37.9413],
          '威海': [121.9482, 37.1393],
          '宁波': [121.5967, 29.6466],
          '宝鸡': [107.1826, 34.3433],
          '宿迁': [118.5535, 33.7775],
          '常州': [119.4543, 31.5582],
          '广州': [113.5107, 23.2196],
          '廊坊': [116.521, 39.0509],
          '延安': [109.1052, 36.4252],
          '张家口': [115.1477, 40.8527],
          '徐州': [117.5208, 34.3268],
          '德州': [116.6858, 37.2107],
          '惠州': [114.6204, 23.1647],
          '成都': [103.9526, 30.7617],
          '扬州': [119.4653, 32.8162],
          '承德': [117.5757, 41.4075],
          '拉萨': [91.1865, 30.1465],
          '无锡': [120.3442, 31.5527],
          '日照': [119.2786, 35.5023],
          '昆明': [102.9199, 25.4663],
          '杭州': [119.5313, 29.8773],
          '枣庄': [117.323, 34.8926],
          '柳州': [109.3799, 24.9774],
          '株洲': [113.5327, 27.0319],
          '武汉': [114.3896, 30.6628],
          '汕头': [117.1692, 23.3405],
          '江门': [112.6318, 22.1484],
          '沈阳': [123.1238, 42.1216],
          '沧州': [116.8286, 38.2104],
          '河源': [114.917, 23.9722],
          '泉州': [118.3228, 25.1147],
          '泰安': [117.0264, 36.0516],
          '泰州': [120.0586, 32.5525],
          '济南': [117.1582, 36.8701],
          '济宁': [116.8286, 35.3375],
          '海口': [110.3893, 19.8516],
          '淄博': [118.0371, 36.6064],
          '淮安': [118.927, 33.4039],
          '深圳': [114.5435, 22.5439],
          '清远': [112.9175, 24.3292],
          '温州': [120.498, 27.8119],
          '渭南': [109.7864, 35.0299],
          '湖州': [119.8608, 30.7782],
          '湘潭': [112.5439, 27.7075],
          '滨州': [117.8174, 37.4963],
          '潍坊': [119.0918, 36.524],
          '烟台': [120.7397, 37.5128],
          '玉溪': [101.9312, 23.8898],
          '珠海': [113.7305, 22.1155],
          '盐城': [120.2234, 33.5577],
          '盘锦': [121.9482, 41.0449],
          '石家庄': [114.4995, 38.1006],
          '福州': [119.4543, 25.9222],
          '秦皇岛': [119.2126, 40.0232],
          '绍兴': [120.564, 29.7565],
          '聊城': [115.9167, 36.4032],
          '肇庆': [112.1265, 23.5822],
          '舟山': [122.2559, 30.2234],
          '苏州': [120.6519, 31.3989],
          '莱芜': [117.6526, 36.2714],
          '菏泽': [115.6201, 35.2057],
          '营口': [122.4316, 40.4297],
          '葫芦岛': [120.1575, 40.578],
          '衡水': [115.8838, 37.7161],
          '衢州': [118.6853, 28.8666],
          '西宁': [101.4038, 36.8207],
          '西安': [109.1162, 34.2004],
          '贵阳': [106.6992, 26.7682],
          '连云港': [119.1248, 34.552],
          '邢台': [114.8071, 37.2821],
          '邯郸': [114.4775, 36.535],
          '郑州': [113.4668, 34.6234],
          '鄂尔多斯': [108.9734, 39.2487],
          '重庆': [107.7539, 30.1904],
          '金华': [120.0037, 29.1028],
          '铜川': [109.0393, 35.1947],
          '银川': [106.3586, 38.1775],
          '镇江': [119.4763, 31.9702],
          '长春': [125.8154, 44.2584],
          '长沙': [113.0823, 28.2568],
          '长治': [112.8625, 36.4746],
          '阳泉': [113.4778, 38.0951],
          '青岛': [120.4651, 36.3373],
          '韶关': [113.7964, 24.7028],
          //自行添加的新的经纬度
          '甘肃天水': [105.69, 34.60],
          '洛阳': [112.16, 34.32],
          '四川大匡山': [104.72, 31.75],
          '金陵': [118.49, 31.56],
          '安陆': [113.69, 31.25]
        };
        if (input != "") {
          let myChart = document.getElementById('myChart');
          myChart.style.display = 'none';
          let xChart0 = document.getElementById('xChart');
          xChart0.style.display = 'inline-block';
          let xChart = echarts.init(xChart0);
          xChart.showLoading();

//          console.log(input);
          let poetnames = [input];
//          console.log(poetnames);

          xChart.hideLoading();
//          console.log(this.place.poetTimePlace);
          this.place.poetTimePlace.forEach(function (item) {
//            console.log(item.timePlace);
            item.timePlace.forEach(function (shuzu) {
//              console.log(shuzu.time)
            })
          });
          // //获取echarts图的位置
          // var myChart = echarts.init(document.getElementById('poetplace'));

          //对echarts图中的内容进行设置
          let newconvertData = (data, i)=> {
            let res = [];
//            console.log(data[i].place);
            let fromCoord = geoCoordMap[data[i].place];
            let toCoord = geoCoordMap[data[i + 1].place];
            if (fromCoord && toCoord) {
              res.push({
                fromName: data[i].place,
                toName: data[i + 1].place,
                coords: [fromCoord, toCoord],
                value: [data[i].time, data[i + 1].time, data[i + 1].des],
                poem: data[i + 1].poet
              });
            }
//            console.log(res);
            return res;
          };
          let convertData = (data)=> {
            let res = [];
            for (let i = 0; i < data.length - 1; i++) {
              console.log(data[i].place);
              let fromCoord = geoCoordMap[data[i].place];
              let toCoord = geoCoordMap[data[i + 1].place];
              if (fromCoord && toCoord) {
                res.push({
                  fromName: data[i].place,
                  toName: data[i + 1].place,
                  coords: [fromCoord, toCoord],
                  value: [data[i].time, data[i + 1].time, data[i + 1].des],
                  poem: data[i + 1].poet
                });
              }
            }
            return res;
          };
          //这个函数还没用上
//          let geoitem = function (data, i) {
//            data.map(function () {
//              let res = [];
//              let fromCoord = geoCoordMap[data[i].place];
//              let toCoord = geoCoordMap[data[i + 1].place];
//              if (fromCoord && toCoord) {
//                res.push({
//                  name: data[i].place,
//                  value: fromCoord.concat([data[i].time])
//                });
//                res.push({
//                  name: data[i + 1].place,
//                  value: toCoord.concat([data[i + 1].time])
//                });
//                console.log(res);
//                return res;
//              }
//            })
//          };

          // var color = ['#009fe8', '#f00'];
          let color = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83',
            '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'];
          let series = [];
          let series0 = [];
          let options = [];
          let pn = input;
          let years = [];
          let bool = 0;
          this.place.poetTimePlace.forEach(function (item, i) {
            //判断是否为当前诗人的诗人轨迹，只显示该诗人轨迹,只输入与search中的内容相关的诗人
            if (pn == item.poetname) {
              bool = 1;
              series0.push(
                {
                  name: '全部轨迹',
                  type: 'lines',
                  zlevel: 2,
                  symbol: ['none', 'circle'],
                  symbolSize: 10,
                  effect: {
                    show: false,
                    period: 5,
                    trailLength: 0,
                    symbol: 'circle',
                    symbolSize: 5
                  },
                  lineStyle: {
                    normal: {
                      color: color[i],
                      width: 1.5,
                      opacity: 0.8,
                      curveness: 0.2
                    }
                  },
                  data: convertData(item.timePlace)
                },
                {
                  name: item.poetname,
                  type: 'scatter',//地图上的地点
                  coordinateSystem: 'geo',
                  zlevel: 2,
                  rippleEffect: {
                    brushType: 'stroke'
                  },
                  label: {
                    normal: {
                      show: true,
                      position: 'right',
                      formatter: '{b}'
                    }
                  },
                  symbolSize: 12,
                  /* function (val) {
                     return val[2] / 8;
                     },*/
                  itemStyle: {
                    normal: {
                      color: color[i]
                    },
                    emphasis: {
                      borderColor: '#fff',
                      borderWidth: 3
                    }
                  },
                  data: item.timePlace.map(function (dataItem) {
                    return {
                      name: dataItem.place,
                      value: geoCoordMap[dataItem.place].concat([dataItem.time]),
                      //.concat([dataItem.des])
                      des: dataItem.des,
                      poem: dataItem.poet
                    };
                  })
                }
              );
              item.timePlace.forEach(function (shuju) {
                let x = shuju.time.length - 1;
//                console.log(x);
                if (shuju.time[x] == "年") {
                  shuju.time = shuju.time.replace("年", "");
                }
                years.push(
                  shuju.time
                );
              });
              for (let x = 0; x < item.timePlace.length - 1; x++) {
                series = [];
                series.push(
                  {
                    name: item.poetname,
                    type: 'lines',
                    zlevel: 4,
                    symbol: ['none'],
                    symbolSize: 10,
                    effect: {
                      show: true,
                      period: 2.0,
                      trailLength: 0,
                      symbol: 'arrow',
                      symbolSize: 10
                    },
                    lineStyle: {
                      normal: {
                        color: '#f00',
                        width: 1.5,
                        opacity: 0.8,
                        curveness: 0.2
                      }
                    },
                    data: newconvertData(item.timePlace, x)
                  },
                );
                options.push(
                  {
                    title: {
                      text: years[x] + "年" + input,
                      top: 'top',
                      left: 'center'
                    },
                    series: series,
                  }
                );
              }
            }
          });
          if (bool != 1) {
            alert("所查询诗人不存在，请重新输入!");
            this.drawLine();
//            console.log(input);
          }
//          console.log(options);

          let option = {
            // backgroundColor: '#404a59',
            baseOption: {
              boundingCoords: [[80.50, 48.00], [130.00, 22.00]],
              timeline: {
                // y: 0,
                axisType: 'category',
                // realtime: false,
                // loop: false,
                autoPlay: true,
                // currentIndex: 2,
                playInterval: 2000,//播放的速率
                data: years,
                label: {
                  formatter: function (s) {
                    return (new Date(s)).getFullYear() + "年";
                  }
                }
              },

              tooltip: {
                trigger: 'item'
                // show:false
              },
              legend: {
                orient: 'vertical',
                top: 'top',
                left: 'left',
                data: [input, '全部轨迹'],
                textStyle: {
                  color: '#000'
                },
                selectedMode: 'multiple'
              },

              geo: {
                map: 'china',
                label: {
                  normal: {
                    show: true,//显示省份标签
                    textStyle: {color: "#000"}//省份标签字体颜色
                  },
                  emphasis: {
                    show: true,
                    textStyle: {color: "#800080"}
                  }
                },
                roam: true,
                itemStyle: {
                  normal: {
                    borderColor: '#b4a572',//区域边框颜色
                    areaColor: "#f5f3f0",//区域颜色
                  },
                  emphasis: {
                    areaColor: '#ffdead'
                  }
                }
              },
              series: series0
            },
            options: options,
          };
          xChart.setOption(option);

          xChart.on('click',(params)=> {
//            console.log(params);
            if(params.seriesName="全部轨迹"){
              params.seriesName=input;
            }
            if(params.componentSubType=="lines"){
//              console.log('000000');
//              console.log(params);
              this.poetInfo = [];
              this.lineInfo = [];
              this.placeInfo = [];
              let item = {
                name: params.seriesName,
                time: params.value[0] + '-->' + params.value[1],
                site: params.data.fromName + '-->' + params.data.toName,
                info: params.value[2],
                poem: params.data.poem == '' ? '没有哦' : params.data.poem
              };
              this.lineInfo.push(item);
            }
            if(params.componentSubType=="scatter"){
              this.poetInfo = [];
              this.lineInfo = [];
              this.placeInfo = [];
              let item = {
                name: params.seriesName,
                time: params.data.value[2],
                site: params.data.name,
                info: params.data.des,
                poem: params.data.poem == '' ? '没有哦' : params.data.poem
              };
              this.poetInfo.push(item);
            }
          });
        }else{
          alert("输入内容为空，请重新输入！");
        }
      }
    }
  }
</script>
