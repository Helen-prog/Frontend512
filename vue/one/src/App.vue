<template>
  <!-- <HeaderTop />
  <ListItems /> -->
  <DirectiveStart />
</template>

<script>
// import HeaderTop from './components/HeaderTop.vue';
// import ListItems from './components/ListItems.vue';
import DirectiveStart from './components/DirectiveStart.vue';

export default {
  name: 'App',
  components: {
    // HeaderTop,
    // ListItems
    DirectiveStart
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
