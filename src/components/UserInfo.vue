<template>
  <div class="userInfoWrapper">
    <div class="userInfo">
      <p class="top-p">主页</p>
      <section>
        <img :src="userinfo.avatar_url">
        <span>{{userinfo.loginname}}</span>
        <p>
          {{userinfo.score}}积分
        </p>
        <p>
          注册时间：{{userinfo.create_at | formatDate}}
        </p>
      </section>
      <div class="topics">
        <p>最近创建的话题</p>
        <ul>
          <li v-for="item in userinfo.recent_topics">
            <router-link :to="{
          name:'postContent',
          params:{
            id:item.id
          }
          }">
              {{item.title}}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="replies">
        <p>最近参与的话题</p>
        <ul>
          <li v-for="item in userinfo.recent_replies">
            <router-link :to="{
          name:'postContent',
          params:{
            id:item.id
          }
          }">
              {{item.title}}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "VUserInfo",
    data(){
      return {
        userinfo: {}
      }
    },
    methods: {
      getData(){
        this.$http.get(`https://www.vue-js.com/api/v1/user/${this.$route.params.name}`)
          .then(res => {
            this.userinfo = res.data.data
          })
          .catch(function (err){
            console.log(err)
          })
      }
    },
    beforeMount(){
      this.getData()
    }

  }
</script>

<style scoped>
  .userInfoWrapper {
    background: white;
  }

  .userInfo {
  }

  .userInfo section {
    padding: 12px;
    position: relative;
  }

  .userInfo img {
    width: 40px;
    border-radius: 3px;
  }

  .userInfo li {
    list-style: none;
  }

  .userInfo .replies,
  .userInfo .topics {
    border-top: 10px #DDDDDD solid;
  }
  .userInfo > .top-p,
  .userInfo > div > p {
    padding: 12px 0 12px 12px;
    background-color: rgba(212, 205, 205, 0.17);
    margin: 0;
  }

  .userInfo > div > ul > li {
    padding: 4px 0 4px 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 30px;
    vertical-align: middle;
  }

  .userInfo > div > ul > li > a {
    color: #094E99;
    text-decoration: none;
  }

  .userInfo section > span {
    position: absolute;
    color:#778087;
    font-size: 14px;
    transform:translate(25%,25%);
  }
  .userInfo section > p {
    padding: 10px 0 10px 0;
    font-size: 14px;
  }
  .userInfo section > p:last-child {
    color: #ababab;
  }

</style>
