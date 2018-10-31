<template>
  <div class="articleWrapper">
    <div class="article">
      <div class="topic_header">
        <div class="topic_title">{{post.title}}</div>
        <ul>
          <li>• 发布于 {{post.create_at | formatDate}}</li>
          <li>• 作者：{{post.author.loginname}}
          </li>
          <li>• {{post.visit_count}}次浏览</li>
          <li>• 来自 {{post | tabFormatter}}</li>
        </ul>

        <div id="mk-content" v-html="post.content" class="topic_content"></div>
      </div>
    </div>


      <div id="reply">
        <div class="topBar">回复</div>
        <div v-for="(reply,index)  in post.replies" class="replySec">
          <div class="replyUp">
            <!--<router-link :to="{-->
            <!--name:'user_info',-->
            <!--params:{-->
              <!--name:reply.author.loginname-->
            <!--}-->
            <!--}">-->
              <img :src="reply.author.avatar_url" alt="">
            <!--</router-link>-->
            <!--<router-link :to="{-->
            <!--name:'user_info',-->
            <!--params:{-->
              <!--name:reply.author.loginname-->
            <!--}-->
            <!--}">-->
              <span>{{reply.author.loginname}}</span>
            <!--</router-link>-->
              <span>
                {{index+1}}楼
              </span>
              <span v-if="reply.ups.length>0" >
                ☝ {{reply.ups.length}}
              </span>
              <span v-else>
          </span>
          </div>
          <p v-html="reply.content"></p>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: "VArticle",
    data(){
      return {
        post:{},
      }
    },
    methods:{
      getArticleData(){
        this.$http.get(`https://www.vue-js.com/api/v1/topic/${this.$route.params.id}`)
          .then((res)=>{
            if(res.data){
              this.post = res.data.data;
              console.log(this.post)
            }
          })
          .catch(function (err) {
            console.log(err)
          })
      }
    },
    beforeMount(){
      this.getArticleData();
    },

  }
</script>

<style>
  @import url('../assets/markdown-github.css');
  .articleWrapper{
    min-width: 690px;
    min-height: 660px;
    width: 90%;
    margin: 15px auto;
  }
  .article{
    background: white;
  }
  .topic_header {
    padding: 10px;
  }
  .topic_header .topic_title {
    font-size: 22px;
    font-weight: bold;
    padding-top: 8px;
  }
  .topic_header ul {
    list-style: none;
    padding: 0px 0px;
    margin: 6px 0px;
  }

  .topic_header li {
    display: inline-block;
    font-size: 12px;
    color: #838383;
  }

  .topic_content {
    border-top: 1px solid #e5e5e5;
    padding: 0 10px;
  }

  /*回复区*/
  #reply{
    background: white;
    margin: 13px 0;
  }
  #reply .topBar{
    padding: 10px;
    background-color: #f6f6f6;
    margin-top: 10px;
  }
  #reply {
    margin-top: 15px;
  }

  #reply img {
    width: 30px;
    height: 30px;
    position: relative;
    bottom: -9px;
  }

  #reply a, #reply span {
    font-size: 13px;
    color: #666;
    text-decoration: none;
    vertical-align: text-top;
  }
  .replySec{
    border-bottom:1px solid #e5e5e5;
    padding:10px 10px;
  }
  .replySec p{
    font-size: 15px;
    padding-left: 25px;
  }


  .replyUp a:nth-of-type(2) {
    margin-left: 0px;
    display: inline-block;
  }


  /*markdown格式*/
  .markdown-text img{
    width: 70% !important;
    display: block;
    margin: 20px;
  }

</style>
