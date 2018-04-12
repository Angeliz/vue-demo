<template>
  <div  class="item">
    <el-card class="box-card" >
      <div slot="header" class="clearfix">
        <span style="color: #c23531;font-family: 'my';font-size: 20px">诗人：{{name}}</span>
        <!--<el-button style="float: right; padding: 3px 0" type="text" v-on:click="toPoetInfo" >进入主页</el-button>-->
      </div>
      <div class="text item">
        <p>时间：{{time}}</p>
        <p>地点：{{site}}</p>
        <p>经历描述：{{info}}</p>
        <p>所作诗歌：{{poem}}</p>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    props: ['name','time','site','info','poem']
  }
</script>
