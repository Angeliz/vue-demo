<template>
  <div>
    <Nav></Nav>
    <el-container>
      <el-aside width="10%"></el-aside>
      <el-container>
        <el-main>
          <TupuPoetrelation></TupuPoetrelation>
        </el-main>
      </el-container>
      <el-aside width="25%"></el-aside>
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
