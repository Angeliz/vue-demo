<template>
  <div>
    <Nav></Nav>
    <el-container>
      <el-aside width="10%"></el-aside>
      <el-container>
        <el-main>
          <el-row :gutter="40">
            <el-col :md="5">
              <div class="grid-content bg-purple">
                <InfoPoet :name=poem[0].name :alter-name=this.author></InfoPoet>
              </div>
            </el-col>
            <el-col :md="19">
              <div class="grid-content bg-purple">
                <div>
                  <h3>内容</h3>
                  <p>{{poem[0].content}}</p>
                  <hr/>
                </div>
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

  import InfoPoet from '../components/info-poet.vue'

  export default {
    components: { Nav,InfoPoet },
    data () {
      return {
        poem:[],
        author:'',
        name:this.$route.params.id,
        uri:[this.$route.query.uri]
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        console.log(this.name);
        console.log(this.uri);
        this.$api.get('/datasource/poem?poemuri='+this.uri, null, r => {
          this.poem=r;
          this.$api.get('/datasource/poet?poeturi='+this.poem[0].author, null, r => {
            console.log(r);
            this.author=r[0].name;
          });
        });
      }
    }
  }
</script>
