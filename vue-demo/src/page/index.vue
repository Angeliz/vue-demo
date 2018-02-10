<template>
  <div>
    <Header></Header>
    <div class="article_list">
      <ul>
        <li v-for="i in list">
          <!--<time v-text="i.name"></time>-->
          <!--{{i.name}}-->
          <!--<router-link :to="'/content/1'">-->
          <router-link :to="'/content/' + i.ob">
            {{ i.name }}
          </router-link>
        </li>
      </ul>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '../components/header.vue'
  import Footer from '../components/footer.vue'
  export default {
    components: { Header, Footer },
    data () {
      return {
        list: []
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        this.$api.get('/datasource/allpoet', null, r => {
          console.log(r);
          this.list = r;
        })
      }
    }
  }
</script>
