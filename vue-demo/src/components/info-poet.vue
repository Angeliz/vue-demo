<template>
  <div>
    <img style="width: 100%;" src='static/image/ciel.jpg'>
    <p style="font-size: 18px;font-weight:300; ">{{name}}</p>
    <p style="font-size: 14px;font-style: oblique;">{{alterName}}</p>
    <hr style="margin-bottom: 20px;">
    <hr style="margin-bottom: 10px;">
    <el-tag>唐朝</el-tag>
    <!--<el-tag>诗人</el-tag>-->
  </div>
</template>

<script>
  export default {
    props: ['name','alterName'],
    data(){
      return{
//        url:'./static/image/ciel.jpg'
      }
    }
  }
</script>
