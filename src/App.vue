<template>
  <div id="app">
    <v-header></v-header>
    <div class="main">
      <div class="content">
        <router-view name="main"></router-view>
      </div>
      <div class="sliderBar">
        <router-view name="sliderBar"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'

  // Vue.prototype.event

  export default {
    name: 'App',
    components: {
      'v-header': Header,
    },
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


  .main{
    /*min-width: 690px;*/
    width: 88%;
    margin: 15px auto;
    display: flex;
  }
  .main > .content{
    /*background: white;*/
    width:75%;
    margin-right: 20px;
  }
  .main > .sliderBar{
    width: 25%;
  }

  @media(max-width: 960px){
    .main {width: 98%; min-width: 100px;}
    .main > .content{width: 100%;}
    .main > .sliderBar{
      display: none;
    }

  }
</style>
