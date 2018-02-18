<template>
  <div  class="item">
    <el-card class="box-card" >
      <div slot="header" class="clearfix">
        <span>{{name}}</span>
        <el-button style="float: right; padding: 3px 0" type="text">进入主页</el-button>
      </div>
      <div class="text item">
        <p>作者：{{author}}</p>
        <p>{{content}}</p>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    props: ['name','author','content']
  }
</script>
