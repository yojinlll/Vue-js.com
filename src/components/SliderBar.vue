<template>
  <div class="sliderBarWrapper">
    <div v-if="sliderBarToggle">

      <div class="community-1">
        <div class="topbar">社区交流群</div>
        <img src="https://user-images.githubusercontent.com/9276376/30367105-de95534e-989f-11e7-8c43-039222352121.png" alt="">
        <img src="https://cloud.githubusercontent.com/assets/9276376/20613626/b317ca38-b300-11e6-940d-33df210cb7ba.png" alt="">
      </div>
      <div class="community-2">
        <div class="topbar">友情社区</div>
        <div>
          <p><a href="">微信小程序学习社群</a></p>
          <p><a href="">CTOLib码库</a></p>
          <p><a href="">汇智网</a></p>
          <p><a href="">w3c社区-前端专业综合性技术交流平台</a></p>
          <p><a href="">掘金-帮助开发者成长的社区</a></p>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="authersummay">
        <div class="topbar">作者</div>
        <router-link :to="{
          name:'user_info',
          params:{
            name:userinfo.loginname
          }
          }">
          <img :src="userinfo.avatar_url" alt="">
          <span>{{userinfo.loginname}}</span>
        </router-link>
        <p>积分:{{userinfo.score}}</p>
      </div>
      <div class="recent_topics">
        <div class="topbar">最近参与</div>
        <ul>
          <li v-for="list in topcilimitby5">
            <router-link :to="{
        name:'postContent',
        params:{
          id:list.id,
          name:list.author.loginname
        }
        }">
              {{list.title}}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="recent_replies">
        <div class="topbar">最近回复</div>
        <ul>
          <li v-for="list in replylimitby5">
            <router-link :to="{
        name:'postContent',
        params:{
          id:list.id,
          name:list.author.loginname
        }
        }">
              {{list.title}}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "VSliderBar",
    data(){
      return {
        userinfo: [],
        sliderBarToggle: true
      }
    },
    methods: {
      getData(){
        this.$http.get(`https://www.vue-js.com/api/v1/user/${this.$route.params.name}`)
          .then(res => {
            this.userinfo = res.data.data
          })
          .catch(function (err){
            //处理返回失败后的问题
            console.log(err)
          })
      }
    },
    computed: {
      topcilimitby5(){
        if (this.userinfo.recent_topics) {
          return this.userinfo.recent_topics.slice(0, 5)
        }
      },
      replylimitby5(){
        if (this.userinfo.recent_replies) {
          return this.userinfo.recent_replies.slice(0, 5)
        }
      }
    },
    beforeMount(){
      this.getData()//在页面加载之前获取数据
      console.log(this.$route.params, 22222222222)
      this.sliderBarToggle = this.$route.params.id ? false : true
    },
    watch: {
      '$route'(to, from){
        this.getData()
        console.log(this.$route.params, 33333333333)
        this.sliderBarToggle = this.$route.params.id ? false : true
      }
    }
  }
</script>

<style scoped>

  .authersummay img {
    height: 48px;
    width: 48px;
    border-radius: 3px;
    margin: 10px;
  }

  .topbar {
    background: #f6f6f6;
    padding: 10px;
    font-size: 13px;
    border-radius: 3px 3px 0 0;
    color: #1c6132;
  }

  .authersummay {
    background: white;
    border-radius: 3px;
  }

  .authersummay a {
    display: block;
    display: flex;
    align-items: center;
  }

  .authersummay p {
    font-size: 14px;
    padding: 10px;
  }

  .recent_topics, .recent_replies {
    margin-top: 10px;
  }

  ul {
    background: white;
    font-size: 13px;
    color: #778087;
  }

  ul > li {
    padding: 7px;
  }



  /*社区样式*/
  .community-1{
    background: white;
    border-radius: 3px;
  }
  .community-1 img{
    width: 135px;
    padding: 10px 5px 10px 5px;
  }
  .community-2{
    margin-top: 15px;
    border-radius: 3px;
    background: white;
  }
  .community-2 > div{
    padding: 10px;
  }
  .community-2 p{
    font-size: 13px;
    color: #778087;
    padding: 5px 0 5px 0;
  }
  .community-2 a:hover{
    text-decoration: underline;
  }


</style>
