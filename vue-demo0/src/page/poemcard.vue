<template>
  <div>
    <Nav></Nav>
    <el-container>
      <el-aside width="10%" class="aside"></el-aside>
      <el-container>
        <el-main>
          <div class="waterfall">
            <CardPoem v-for="i in list" :name=i.name author='作者-岑参'  :content=i.content :id=i.id></CardPoem>
          </div>
        </el-main>
      </el-container>
      <el-aside width="10%" class="aside"></el-aside>
    </el-container>

  </div>
</template>

<script>
  import Nav from '../components/nav.vue'
  import CardPoem from '../components/card-poem.vue'

  export default {
    components: { Nav, CardPoem },
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
        this.$api.get('/datasource/work?poeturi='+'http://www.freekg.com/poet/115', null, r => {
          console.log(r);
          this.list = [...r];
          console.log(this.list);
        })
      }
    }
  }
</script>
