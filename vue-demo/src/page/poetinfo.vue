<template>
  <div>
    <Nav></Nav>
    <el-container>
      <el-aside width="10%" class="aside"></el-aside>
      <el-container>
        <el-main>
          <el-row :gutter="40">
            <el-col :md="5">
              <div class="grid-content bg-purple">
                <InfoPoet :name=name :alterName=tableData11[0].altername></InfoPoet>
              </div>
            </el-col>
            <el-col :md="19">
              <div class="grid-content bg-purple">
                <TabPoet :tableData1=tableData11 :tableData2=tableData22 :newinfo=newinfo></TabPoet>
              </div>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
      <el-aside width="10%" class="aside"></el-aside>
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
        name:this.$route.params.id,
        uri:this.$route.query.uri,
        newinfo:'',
        tableData11:[],
        tableData22:[]

      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        this.$api.get('/datasource/poet?poeturi='+this.$route.query.uri, null, r => {
          console.log(r);
          this.tableData11=[{
            name:this.name,
            altername:r[0].alter_name,
            born:r[0].born,
            death:r[0].death,
            work:r[0].work
          }];
          this.tableData22=[{
            info:r[0].info
          }];
//          console.log(this.tableData11);
//          console.log(this.tableData22);
        });
        this.$api.get('/datasource/datapoetinfo?name='+this.name, null, r => {
          console.log(r);
          for(let i=0;i<r.length;i++){
            this.newinfo+=r[i];
          }
        });
      }
    }
  }
</script>
