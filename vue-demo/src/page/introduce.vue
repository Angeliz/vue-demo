<template>
  <div>
    <Nav></Nav>
    <el-container>
      <el-aside width="10%" class="aside"></el-aside>
      <el-container>
        <el-main>
          <el-row>
            <el-col :md="24"><div class="grid-content bg-purple"><iframe src="http://www.freekg.cn/epoch/full.html" frameborder="0" scrolling="no" style="width: 100%;height: 500px"></iframe></div></el-col>
          </el-row>
          <el-row>
            <el-col :md="12"><div class="grid-content bg-purple-light"><iframe src="http://www.freekg.cn/epoch/early.html" frameborder="0" scrolling="no" style="width: 100%;height: 300px"></iframe></div></el-col>
            <el-col :md="12">
              <div class="grid-content bg-purple" style="height: 300px;display: table">
                <div style="display: table-cell;vertical-align: middle;">
                  <h3 class="title">我们在做什么</h3>
                  <p>构建唐诗领域的中文知识图谱</p>
                  <p>诗人知识图谱、诗歌知识图谱、诗人经历知识图谱或者更多</p>
                  <p>探索人工智能环境下的诗歌新世界</p>
                  <p>让唐诗历史活起来</p>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :md="12">
              <div class="grid-content bg-purple-light" style="height: 300px;display: table">
                <div style="display: table-cell;vertical-align: middle;">
                  <h3 class="float-right title">有了诗歌知识图谱，会怎么样？</h3>
                  <p class="float-right">全景式地分析并呈现诗歌、诗人的内在关联，发现有趣的诗歌韵味</p>
                  <p class="float-right">为诗歌的研究与应用提供全新的（量化的、客观的、动态的）视角</p>
                </div>
              </div>
            </el-col>
            <el-col :md="12"><div class="grid-content bg-purple"><iframe src="http://www.freekg.cn/epoch/middle.html" frameborder="0" scrolling="no" style="width: 100%;height: 300px"></iframe></div></el-col>
          </el-row>
          <el-row>
            <el-col :md="12"><div class="grid-content bg-purple-light"><iframe src="http://www.freekg.cn/epoch/high.html" frameborder="0" scrolling="no" style="width: 100%;height: 300px"></iframe></div></el-col>
            <el-col :md="12">
              <div class="grid-content bg-purple" style="height: 300px;display: table">
                <div style="display: table-cell;vertical-align: middle;">
                  <h3 class="title">来到诗歌知识图谱的世界，你可以做什么？</h3>
                  <p>诗歌语义检索</p>
                  <p>诗歌智能问答</p>
                  <p>探索唐代诗人的“朋友圈”</p>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :md="12">
              <div class="grid-content bg-purple-light" style="height: 300px;display: table">
                <div style="display: table-cell;vertical-align: middle;">
                  <h3 class="float-right title">从零开始的知识图谱自动构建</h3>
                  <p class="float-right">数据源：百科类网站、中文诗歌网站、人名地名辞典、时空坐标数据等</p>
                  <p class="float-right">人工智能技术： NLP、机器学习等自动地构建</p>
                  <p class="float-right">图数据库技术：使用图数据库管理系统对知识图谱进行存储和管理</p>
                </div>
              </div>
            </el-col>
            <el-col :md="12"><div class="grid-content bg-purple"><iframe src="http://www.freekg.cn/epoch/late.html" frameborder="0" scrolling="no" style="width: 100%;height: 300px"></iframe></div></el-col>
          </el-row>
        </el-main>
      </el-container>
      <el-aside width="10%" class="aside"></el-aside>
    </el-container>

  </div>
</template>
<style>
  .float-right{
    float: right;
  }
  .title{
    font-style: italic;
    /*color: #42A5F5;*/
  }
</style>
<script>
  import Nav from '../components/nav.vue'
  export default{
    components: { Nav},
    data () {
      return {
        url1: '',
        url2: ''
      }
    },
    mounted () {

    },
    methods: {
    }
  }
</script>
