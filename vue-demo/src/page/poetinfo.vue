<template>
  <div>
    <Nav></Nav>
    <el-container>
      <el-aside width="10%"></el-aside>
      <el-container>
        <el-main>
          <el-row :gutter="40">
            <el-col :md="6">
              <div class="grid-content bg-purple">
                <InfoPoet :name=name :alter-name=poet[0].alter_name></InfoPoet>
              </div>
            </el-col>
            <el-col :md="18">
              <div class="grid-content bg-purple">
                <TabPoet :born=poet[0].born :death=poet[0].death :info=poet[0].info :work=poet[0].work></TabPoet>
              </div>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
      <el-aside width="10%"></el-aside>
    </el-container>

  </div>
</template>

<script>
  import Nav from '../components/nav.vue'
  import TabPoet from '../components/tab-poet.vue'
  import InfoPoet from '../components/info-poet.vue'


  export default {
    components: { Nav,TabPoet,InfoPoet },
    data () {
      return {
        poet:[],
        name:this.$route.params.id,
        uri:this.$route.query.uri
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        this.$api.get('http://www.freekg.cn/poet/datasource/poet?poeturi='+this.$route.query.uri, null, r => {
          console.log(r);
          this.poet=r;
          console.log(this.poet);
        })
      }
    }
  }
</script>
