<template>
  <div  class="item">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="color: #c23531;font-family: 'my';font-size: 20px">{{name}}</span>
        <el-button style="float: right; padding: 3px 0;color: #c23531" type="text" v-on:click="toPoetInfo" >进入主页</el-button>
      </div>
      <div class="text item">
        <p>别名：{{alterName}}</p>
        <p>出生时间：{{born}}</p>
        <p>去世时间：{{death}}</p>
        <p>介绍：{{info}}</p>
        <p>作品：{{work}}</p>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    props: ['name','alterName','born','death','info','work','ob'],
    methods:{
      toPoetInfo(){
        console.log(this.name);
        window.location.assign("#/poetinfo/"+this.name+'?uri='+this.ob);
      }
    }

  }
</script>
