<template>
  <div>
    <Nav></Nav>
    <el-container>
      <el-aside width="10%" class="aside"></el-aside>
      <el-container>
        <el-main>
          <el-row :gutter="40">
            <!--<el-col :md="5">-->
              <!--<div class="grid-content bg-purple">-->
                <!--<InfoPoet :name=tableData1[0].title :alter-name=tableData1[0].author></InfoPoet>-->
              <!--</div>-->
            <!--</el-col>-->
            <el-col :md="24">
              <div class="grid-content bg-purple">
                <el-table
                  :data="tableData1"
                  border
                  style="width: 100%">
                  <el-table-column
                    prop="title"
                    label="诗歌名称"
                    width="200">
                  </el-table-column>
                  <el-table-column
                    prop="author"
                    width="80"
                    label="作者">
                  </el-table-column>
                  <el-table-column
                    prop="from"
                    label="作品出处">
                  </el-table-column>
                  <el-table-column
                    prop="time"
                    label="创作年代">
                  </el-table-column>
                  <el-table-column
                    prop="label"
                    label="题材">
                  </el-table-column>
                </el-table>
                <el-table
                  :data="tableData2"
                  border
                  style="width: 100%">
                  <el-table-column
                    prop="content"
                    label="内容">
                  </el-table-column>
                </el-table>
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

  import InfoPoet from '../components/info-poet.vue'

  export default {
    components: { Nav,InfoPoet },
    data () {
      return {
        uri:[this.$route.query.uri],
        tableData1:[],
        tableData2:[]
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        this.$api.get('/datasource/poem?poemuri='+this.uri, null, json => {
//          console.log(json);
          this.$api.get('/datasource/poet?poeturi='+json[0].author, null, r => {
//            console.log(r);
            this.tableData1=[{
              title:json[0].name,
              author:r[0].name,
              from:'不详',
              time:'唐朝',
              label:'不详'
            }];
            this.tableData2=[{
              content:json[0].content
            }];
          });
        });
      }
    }
  }
</script>
