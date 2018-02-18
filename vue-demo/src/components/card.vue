<template>
  <div  class="item">
    <!--<div style="width: 24%;display: inline-block;margin-left: 2px;margin-right: 2px;" class="item">-->
    <el-card class="box-card" >
      <div slot="header" class="clearfix">
        <span>{{name}}</span>
        <el-button style="float: right; padding: 3px 0" type="text">进入主页</el-button>
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
    props: ['name','alterName','born','death','info','work']
  }
</script>
