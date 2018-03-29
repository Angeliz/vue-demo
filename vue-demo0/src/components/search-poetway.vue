<template>
  <div style="height: 60px;width:100%;">
      <el-input placeholder="请输入查询内容" v-model="input">
        <el-button slot="append" icon="el-icon-search" v-on:click="search"></el-button>
      </el-input>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        input:''
      }
    },
    methods:{
      search:function () {
        this.$emit('answerSearch',this.input);
      }
    }
  }
</script>
