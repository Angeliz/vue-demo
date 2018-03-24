<template>
  <div >
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color='black'
      text-color="#fff"
      active-text-color="#2196F3"
      router = true>
      <el-menu-item index="/">首页</el-menu-item>
      <el-submenu index="poet">
        <template slot="title">诗人</template>
        <!--<el-menu-item index="/poetcatalog">诗人目录</el-menu-item>-->
        <el-menu-item index="/poetrelation">诗人关系图谱</el-menu-item>
        <el-menu-item index="/poetway">诗人轨迹</el-menu-item>
        <el-menu-item index="/poetcard">诗人卡片</el-menu-item>
      </el-submenu>
      <el-submenu index="poem">
        <template slot="title">诗歌</template>
        <!--<el-menu-item index="/poemcatalog">诗歌目录</el-menu-item>-->
        <el-menu-item index="/poemcard">诗歌卡片</el-menu-item>
      </el-submenu>
      <el-submenu index="search">
        <template slot="title">查询</template>
        <el-menu-item index="/searchall">普通查询</el-menu-item>
        <!--<el-menu-item index="/searchmodel">模板查询</el-menu-item>-->
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: this.$route.path
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

