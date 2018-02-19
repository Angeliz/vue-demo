<template>
  <div>
    <Nav></Nav>
    <el-input placeholder="请输入内容" v-model="input5" style="width: 400px">
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </div>
</template>

<script>
  import Nav from '../components/nav.vue'

  export default {
    components: {Nav},
  }
</script>
