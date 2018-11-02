<template>
  <div class="postList">
    <div class="posts">
      <ul>
        <li>
          <div class="topBar">
            <span>全部</span>
            <span>精华</span>
            <span>分享</span>
            <span>问答</span>
            <span>招聘</span>
          </div>
        </li>
        <li v-for="post in posts">
          <!--头像-->
          <router-link :to="{
              name:'user_info',
              params:{
                name:post.author.loginname
              }
            }">
            <img :src="post.author.avatar_url" alt="">
          </router-link>

          <!--回复/浏览-->
          <span class="allCount">
            <span class="replyCount">{{post.reply_count}}</span>
            /{{post.visit_count}}
          </span>

          <!--帖子的分类-->
          <span :class="[{putGood:(post.good  == true),putTop:(post.top  == true),
        'topicList-tab':(post.good  != true && post.top  != true)}]">
            <span>
              {{post | tabFormatter}}
            </span>
          </span>

          <router-link :to="{
            name:'postContent',
            params: { id: post.id, name:post.author.loginname }
          }">
            <!--标题-->
            <span class="title">
            {{post.title}}
            </span>
          </router-link>

          <!--最終回复时间-->
          <span class="lastReply">
          {{post.last_reply_at | formatDate}}
          </span>
        </li>
        <li>
          <v-Pagination @handleList="renderList"></v-Pagination>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  import Pagination from './Pagination'

  export default {
    name: "VPostList",
    components:{
      'v-Pagination': Pagination,
    },
    data(){
      return {
        posts: [],
        userinfo: [],
        postPage: 1
      }
    },
    methods: {
      getData(){
        this.$http.get('https://www.vue-js.com/api/v1/topics', {
          params: {
            page: this.postPage,
            limit: 20
          }
        })
          .then(res => {
            this.posts = res.data.data
          })
          .catch(function (err){
            console.log(err)
          })
      },
      renderList(value){
      this.postPage = value;
      this.getData();
      }
    },
    beforeMount(){
      this.getData()//在页面加载之前获取数据
    }
  }
</script>
<style scoped>
  .postList{
    background: white;
    /*min-width: 690px;*/
    /*width: 90%;*/
    /*margin: 15px auto;*/
    /*max-width: 900px;*/
    /*background: white;*/
    /*margin-right: 20px;*/
  }
  .posts img{
    border-radius: 4px;
    height: 30px;
    width: 30px;
    vertical-align: middle;
  }
  .postList,.posts{ border-radius: 3px;}
  .posts li{ padding: 10px; border-top: 1px solid #f0f0f0; color: #333;}
  .posts li:first-child{ border-radius: 3px 3px 0 0; background: #f6f6f6;}
  .posts li:last-child{ border-radius: 0 0 3px 3px; border-top: none;}
  .posts li:not(:first-child):hover { background: #f6f6f6; }
  .posts li:last-child:hover { background: white; }

  .posts li > .allCount{
    display: inline-block;
    /*border: 1px solid red;*/
    width: 60px;
    text-align: center;
    font-size: 12px;
    color: #b4b4b4;
  }
  .postList li >.allCount > .replyCount{
    color: #9e78c0;
    font-size: 14px;
  }
  .postList .title{
    display: inline-block;
    width: 70%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .postList .title:hover{
    cursor: pointer;
    text-decoration: underline;
  }

  .postList .topBar > span{
    margin: 0 10px;
    font-size: 14px;
    color: #369219;
    cursor: pointer;
  }
  .postList .topBar > span:hover{
    color: rgb(0, 85, 128);
  }


  .postList .lastReply{
    text-align: right;
    min-width: 50px;
    display: inline-block;
    white-space: nowrap;
    float: right;
    color: #778087;
    font-size: 12px;
  }




  /*类型帖子*/
  .putGood, .putTop {
    background: #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    color: #fff;
    font-size: 12px;
    margin-right: 10px;
  }

  .topicList-tab {
    background-color: #e5e5e5;
    color: #999;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    font-size: 12px;
    margin-right: 10px;
  }



  @media(max-width: 960px){
    .postList ul > li > .allCount{
      color: red;
      display: none;
    }
  }
</style>
