<template>
  <div id="app">
    <v-header></v-header>
    <div>
      <v-postList></v-postList>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'
  import PostList from './components/PostList'

  export default {
    name: 'App',
    components: {
      'v-header': Header,
      'v-postList': PostList,
    }

  }
</script>

<style>
  *{ margin: 0; padding: 0; }
  *{ box-sizing: border-box; }
  ul,li{ list-style: none; }
  a{ color: inherit; text-decoration: none; }
  body{
    margin: 0;
    background: #e1e1e1;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti!important;
  }
</style>
