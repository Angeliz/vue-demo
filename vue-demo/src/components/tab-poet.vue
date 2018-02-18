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
    <el-tab-pane label="关系图谱" name="second">关系图谱</el-tab-pane>
    <el-tab-pane label="作品图谱" name="third">作品图谱</el-tab-pane>
    <!--<el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>-->
  </el-tabs>
</template>
<script>
  export default {
    props: ['born','death','info','work'],
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
