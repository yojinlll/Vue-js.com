import Vue from 'vue'
import Router from 'vue-router'
import PostList from '../components/PostList'
import Article from '../components/Article'
import UserInfo from '../components/UserInfo'
import SliderBar from '../components/SliderBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'root',
      path: '/',
      components: {
        main: PostList,
        sliderBar: SliderBar
      }
    },
    {
      name: 'postContent',
      path: '/topic/:id&author=:name',
      components: {
        main: Article,
        sliderBar: SliderBar
      }
    },
    {
      name: 'user_info',
      path: '/topic/:name',
      components: {
        main: UserInfo
      }
    }
  ]
})
