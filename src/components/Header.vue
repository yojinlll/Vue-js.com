<template>
  <div class="header">
    <div class="wrapper">
      <div class="container">
        <a class="brand" href="#">
          <img src="../assets/vue.png" >
          <div class="text">
            Vue.js
          </div>
        </a>
        <form class="search">
          <img src="../assets/search.png" >
          <input type="text">
        </form>
        <ul class="navigation">
          <li><a href="#">首页</a></li>
          <li><a href="#">微信公众号</a></li>
          <li><a href="#">VUE 2.0</a></li>
          <li><a href="#">参考资料</a></li>
          <li><a href="#">API</a></li>
          <li><a href="#">关于</a></li>
          <li><a href="#">注册</a></li>
          <li><a href="#">登录</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "VHeader"
  }
</script>

<style scoped>
  .header{
    background-color:#1c6132 ;
  }
  .wrapper{
    width: 90%;
    margin: 0 auto;
  }
  .container{
    position: relative;
    display: flex;
    align-items: center;
    padding: 5px;
    min-width: 960px;
  }
  .brand{
    display: block;
    display: flex;
    width: 120px;
    height: 45px;
    padding-right: 20px;
    margin: 0 20px 0 10px;

    text-decoration: none;
    font-size: 20px;
    font-weight: 200;
    color: #fff;
    text-shadow: 0 1px 0 #fff;
    vertical-align: middle;
  }
  .brand > img{
    height: 45px;
    margin-right: 10px;
  }
  .brand > .text{
    line-height: 20px;
    padding: 10px 0;
  }
  .search{
    position: relative;
  }
  .search img{
    position: absolute;
    height: 15px;
    left: 2%;
    top: 25%;

  }
  .search input{
    display: inline-block;
    border-radius: 20px;
    padding: 4px 0 4px 22px;
    background: #4f9639;
    height: 28px;
    width: 220px;
    border: 0;
    transition: all 0.5s;
  }
  .search input:focus{
    outline: none;
  }
  .search input:hover{
    background: white;
  }
  .navigation{
    position: absolute;
    right: 0;
    list-style: none;
    font-size: 13px;
  }
  .navigation > li{
    display: inline-block;
    padding: 10px 15px;
    line-height: 10px;
  }
  .navigation > li > a{
    color: #eee;
    font-size: 13px;
    text-shadow: none;
  }
</style>
