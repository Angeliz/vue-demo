<template>
  <div>
    <Nav></Nav>
    <el-container>
      <el-aside width="10%" class="aside"></el-aside>
      <el-container>
        <!--<el-header>Header</el-header>-->
        <el-main>
          <div class="waterfall">
            <CardPoet v-for="i in list" :name=i.name :alter-name=i.alter_name :born=i.born :death=i.death :info=i.info :work=i.work :ob=i.ob></CardPoet>
          </div>
        </el-main>
      </el-container>
      <el-aside width="10%" class="aside"></el-aside>
    </el-container>

  </div>
</template>

<script>
  import Nav from '../components/nav.vue'
  import CardPoet from '../components/card-poet.vue'

  export default {
    components: { Nav, CardPoet },
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
        this.$api.get('/datasource/poetcardlist?max='+20, null, r => {
          console.log(r);
          this.list = [...r];
          console.log(this.list);
        })
      }
    }
  }
</script>
