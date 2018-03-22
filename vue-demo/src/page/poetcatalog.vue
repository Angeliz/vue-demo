<template>
  <div>
    <Nav></Nav>
    <el-container>
      <el-aside width="10%" class="aside"></el-aside>
      <el-container>
        <!--<el-header>Header</el-header>-->
        <el-main>
          <TupuPoetcatalog></TupuPoetcatalog>
        </el-main>
      </el-container>
      <el-aside width="10%" class="aside"></el-aside>
    </el-container>
  </div>
</template>

<script>
  import Nav from '../components/nav.vue'
  import TupuPoetcatalog from '../components/tupu-poetcatalog.vue'
  export default {
    components: {Nav,TupuPoetcatalog}
  }
</script>
