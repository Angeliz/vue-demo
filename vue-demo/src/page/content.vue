<template>
  <div>
    <myHeader></myHeader>
    <h2 v-text="dat[0].born"></h2>
    <!--<p>作者：{{dat.author.loginname}}　　发表于：{{$utils.goodTime(dat.create_at)}}</p>-->
    <hr>
    <p>{{dat[0].info}}</p>
    <hr>
    <article >{{dat[0].work}}</article>
    <!--<h3>网友回复：</h3>-->
    <!--<ul>-->
      <!--<li v-for="i in dat.replies">-->
        <!--<p>评论者：{{i.author.loginname}}　　评论于：{{$utils.goodTime(i.create_at)}}</p>-->
        <!--<article v-html="i.content"></article>-->
      <!--</li>-->
    <!--</ul>-->
    <myFooter></myFooter>
  </div>
</template>
<script>
  import myHeader from '../components/header.vue'
  import myFooter from '../components/footer.vue'
  export default {
    components: { myHeader, myFooter },
    data () {
      return {
        id: this.$route.params.id,
        dat: []
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        console.log(11111)
        this.$api.get('/datasource/poet?poeturi=' + this.id, null, r => {
          this.dat = r
          console.log(dat)
        })
      }
    }
  }
</script>
