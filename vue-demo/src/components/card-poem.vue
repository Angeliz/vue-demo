<template>
  <div  class="item">
    <el-card :style="style" class="box-card">
      <div slot="header" class="clearfix">
        <span style="color: #c23531;font-family: 'my';font-size: 20px">{{name}}</span>
        <el-button style="float: right; padding: 3px 0;color: #c23531" type="text" v-on:click="toPoemInfo">进入主页</el-button>
      </div>
      <div class="text item">
        <p >{{author}}</p>
        <p>{{content}}</p>
      </div>
    </el-card>
  </div>
</template>

<script>
  import ElCard from "../../node_modules/element-ui/packages/card/src/main.vue";

export default {
  components: {ElCard},
  data(){
    return {
      style:{
        background: "url(" + require('../../static/image/1.png') + ")"+"no-repeat 0% 0%" ,
        backgroundSize:'contain'
      }
    }
  },
  props: ['name','author','content','id'],
    methods:{
      toPoemInfo(){
        console.log(this.name);
        window.location.assign("#/poeminfo/"+this.name+'?uri='+this.id);
      }
    }
  }
</script>
