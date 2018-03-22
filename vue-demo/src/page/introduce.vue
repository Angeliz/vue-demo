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
                  <p>对诗歌、诗人的内在关联进行全景式地分析与可视化</p>
                  <p>诗歌语义检索</p>
                  <p>诗歌智能问答</p>
                  <p>根据知识图谱和领域本体进行自动诗歌创作</p>
                  <p>为诗歌的研究与应用提供全新的（量化的、客观的、动态的）视角</p>
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
            <el-col :md="12"><div class="grid-content bg-purple"><iframe src="http://www.freekg.cn/epoch/middle.html" frameborder="0" scrolling="no" style="width: 100%;height: 300px"></iframe></div></el-col>
          </el-row>
          <el-row>
            <el-col :md="12"><div class="grid-content bg-purple-light"><iframe src="http://www.freekg.cn/epoch/high.html" frameborder="0" scrolling="no" style="width: 100%;height: 300px"></iframe></div></el-col>
            <el-col :md="12">
              <div class="grid-content bg-purple" style="height: 300px;display: table">
                <div style="display: table-cell;vertical-align: middle;">
                  <h3 class="title">技术架构</h3>
                  <p>诗歌知识图谱构建：对诗歌文本进行信息抽取、知识融合与知识加工</p>
                  <p>知识图谱存储：RDF三元组+gStore图数据管理系统</p>
                  <p>垂直领域的知识服务：可视化、语义检索、智能问答、写诗机器人</p>
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
