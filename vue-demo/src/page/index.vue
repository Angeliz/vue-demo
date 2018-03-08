<template>
  <div>
    <Nav></Nav>
    <!--<el-carousel :interval="5000" arrow="always" height="673px">-->
      <!--<el-carousel-item v-for="item in list" :key="item">-->
        <!--<img :src="item">-->
      <!--</el-carousel-item>-->
    <!--</el-carousel>-->
  </div>
</template>

<script>
  import Nav from '../components/nav.vue'
  export default {
    components: {Nav},
    data() {
      return {
        img1:'./static/image/background.jpg',
        list:[]
      }
    },
    mounted(){
      this.toPoetcatalog();
    },
    methods:{
//      getImg(){
//        this.list.push(this.img1);
//      },
      toPoetcatalog(){
        window.location.assign("#/poetcatalog/");
      }
    }
  }

</script>
<!--<style>-->
  <!--.el-carousel__item h3 {-->
    <!--color: #475669;-->
    <!--font-size: 18px;-->
    <!--opacity: 0.75;-->
    <!--line-height: 300px;-->
    <!--margin: 0;-->
  <!--}-->

  <!--.el-carousel__item:nth-child(2n) {-->
    <!--background-color: #99a9bf;-->
  <!--}-->

  <!--.el-carousel__item:nth-child(2n+1) {-->
    <!--background-color: #d3dce6;-->
  <!--}-->
<!--</style>-->
