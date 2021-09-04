<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
.container{
  width: 980px;
  margin: 0 auto;
}
</style>
