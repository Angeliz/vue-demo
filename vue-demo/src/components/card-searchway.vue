<template>
  <div  class="item">
    <el-card class="box-card" :style="style">
      <div slot="header" class="clearfix">
        <span style="color: #c23531;font-family: 'my';font-size: 20px">所选省份：{{place}}</span>
      </div>
      <div class="text item">
        <p>诗人停留次数：{{count}}</p>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        style:{
          background: "url(" + require('../../static/image/1.png') + ")"+"no-repeat 0% 0%" ,
          backgroundSize:'contain'
        }
      }
    },
    props: ['place','count']
  }
</script>
