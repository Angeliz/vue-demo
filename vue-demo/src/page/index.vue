<template>
  <div>
    <Nav></Nav>
  </div>
</template>

<script>
  import Nav from '../components/nav.vue'
  export default {
    components: { Nav },
    data () {
      return {

      }
    },
    created () {
      this.toPoetway();
    },
    methods: {
      toPoetway(){
        window.location.assign("#/poetway/");
      }
    }
  }
</script>
