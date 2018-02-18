<template>
  <div>

    <!--<Header></Header>-->
    <Nav></Nav>
    <div >
      <Card name="李白" info="6666" v-for="i in list"></Card>
    </div>

    <!--<div class="article_list">-->
      <!--<div>-->
        <!--<el-button>默认按钮</el-button>-->
        <!--<el-button type="primary">主要按钮</el-button>-->
        <!--<el-button type="success">成功按钮</el-button>-->
        <!--<el-button type="info">信息按钮</el-button>-->
        <!--<el-button type="warning">警告按钮</el-button>-->
        <!--<el-button type="danger">危险按钮</el-button>-->
      <!--</div>-->
      <!--<ul>-->
        <!--<li v-for="i in list">-->
          <!--&lt;!&ndash;<time v-text="i.name"></time>&ndash;&gt;-->
          <!--&lt;!&ndash;{{i.name}}&ndash;&gt;-->
          <!--&lt;!&ndash;<router-link :to="'/content/1'">&ndash;&gt;-->
          <!--<router-link :to="'/content/' + i.ob">-->
            <!--{{ i.name }}-->
          <!--</router-link>-->
        <!--</li>-->
      <!--</ul>-->
    <!--</div>-->
    <!--<Footer></Footer>-->
  </div>
</template>

<script>
  import Nav from '../components/nav.vue'
  import Header from '../components/header.vue'
  import Footer from '../components/footer.vue'
  import Card from '../components/card.vue'
  export default {
    components: { Header, Footer, Nav, Card },
    data () {
      return {
        list: [1,1,1,1,1,1,1,1,11,1,1,1,11,1,1]
      }
    },
//    created () {
//      this.getData()
//    },
//    methods: {
//      getData () {
//        this.$api.get('/datasource/allpoet', null, r => {
//          console.log(r);
//          this.list = r;
//        })
//      }
//    }
  }
</script>
