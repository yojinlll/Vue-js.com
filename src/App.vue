<template>
  <div id="app">
    <v-header></v-header>

  </div>
</template>

<script>
  import Header from './components/Header'

  export default {
    name: 'App',
    components: {
      'v-header': Header,
    }

  }
</script>

<style>
  body{
    margin: 0;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti!important;
  }
  ul,li{
    list-style: none;
    margin: 0;
  }
</style>
