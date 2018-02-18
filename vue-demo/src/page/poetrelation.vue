<template>
  <div>
    <Nav></Nav>
    <el-container>
      <el-aside width="10%"></el-aside>
      <el-container>
        <el-main>
          <el-row :gutter="20">
            <el-col :md="16">
              <div class="grid-content bg-purple">
                <TupuPoetrelation></TupuPoetrelation>
              </div>
            </el-col>
            <el-col :md="8">
              <div class="grid-content bg-purple">

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
  import TupuPoetrelation from '../components/tupu-poetrelation.vue'

  export default {
    components: {Nav,TupuPoetrelation}
  }

</script>
