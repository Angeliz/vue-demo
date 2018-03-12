<template>
    <div :style="styleDiv">
      <!--<Nav></Nav>-->
      <div :style='styleInput'>
        <h1 style="text-align: center">FREEKG</h1>
        <el-input placeholder="请输入查询内容"   v-model="input">
          <el-button slot="append" icon="el-icon-search" v-on:click="answerSearch"></el-button>
        </el-input>
      </div>
    </div>
</template>

<script>
//  import Nav from '../components/nav.vue'
  export default {
//    components: { Nav },
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
          marginTop:'-100px'
        },
        styleDiv:{
          width:document.documentElement.clientWidth+'px',
          height:document.documentElement.clientHeight+'px'
        }
      }
    },
    methods: {
      answerSearch(){

      }
    }
  }
</script>
