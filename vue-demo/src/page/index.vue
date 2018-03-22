<template>
    <div :style="styleDiv">
      <!--<Nav></Nav>-->
      <el-button v-on:click="toIntroduce" style="position: fixed;top: 20px;right: 20px;height: 50px;width: 100px;background-color: black;color: white">介绍</el-button>
      <div class="search-width">
        <h1 style="text-align: center">FREEKG</h1>
        <el-input placeholder="请输入查询内容"  v-model="input">
          <el-button slot="append" icon="el-icon-search" v-on:click="answerSearch"></el-button>
        </el-input>
        <br/>
      </div>
      <div class="index-btn">
        <el-button v-on:click="toPoetcatalog" style="background-color: #42A5F5;color: white" class="btn">诗人目录</el-button>
        <el-button v-on:click="toPoetrelation" style="background-color: #42A5F5;color: white" class="btn">诗人关系图谱</el-button>
        <el-button v-on:click="toPoetway" style="background-color: #42A5F5;color: white" class="btn">诗人轨迹</el-button>
        <el-button v-on:click="toPoetcard" style="background-color: #42A5F5;color: white" class="btn">诗人卡片</el-button>
        <el-button v-on:click="toPoemcard" style="background-color: #42A5F5;color: white" class="btn">诗歌卡片</el-button>
        <el-button v-on:click="toSearchall" style="background-color: #42A5F5;color: white" class="btn">智能查询</el-button>
      </div>
    </div>
</template>

<script>
//  import Nav from '../components/nav.vue'
  import ElButton from "../../node_modules/element-ui/packages/button/src/button.vue";

export default {
//    components: { Nav },
  components: {ElButton},
  data () {
      return {
        input:'',
        styleInput:{
          width:'400px',
          height:'200px',
          left:'50%',
          top:'50%',
          position:'relative',
          marginLeft:'-200px',
          marginTop:'-150px'
        },
        styleDiv:{
          width:document.documentElement.clientWidth+'px',
          height:document.documentElement.clientHeight+'px',
//          backgroundImage: "url(" + require('../../static/image/background.jpg') + ")",
//          backgroundSize:'cover'
        }
      }
    },
    methods: {
      answerSearch(){

      },
      toPoetcatalog(){
        window.location.assign("#/poetcatalog/");
      },
      toPoetrelation(){
        window.location.assign("#/poetrelation/");
      },
      toPoetway(){
        window.location.assign("#/poetway/");
      },
      toPoetcard(){
        window.location.assign("#/poetcard/");
      },
      toPoemcard(){
        window.location.assign("#/poemcard/");
      },
      toSearchall(){
        window.location.assign("#/searchall/");
      },
      toIntroduce(){
        window.location.assign("#/introduce/");
      }
    }
  }
</script>
