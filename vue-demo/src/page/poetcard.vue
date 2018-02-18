<template>
  <div>
    <Nav></Nav>
    <el-container>
      <el-aside width="10%"></el-aside>
      <el-container>
        <!--<el-header>Header</el-header>-->
        <el-main>
          <div class="waterfall">
            <Card v-for="i in list" :name=i.name :alter-name=i.alter_name :born=i.born :death=i.death :info=i.info :work=i.work ></Card>
          </div>
        </el-main>
      </el-container>
      <el-aside width="10%"></el-aside>
    </el-container>

  </div>
</template>

<script>
  import Nav from '../components/nav.vue'
  import Card from '../components/card.vue'

  export default {
    components: { Nav, Card },
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
