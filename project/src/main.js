import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import VueRouter from 'vue-router'

//mint-ui+mui
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)
import './assets/css/mui.css'
//自定义样式
import './assets/css/index.css'

//component
import Home from './components/home.vue'
import Shop from './components/shop.vue'
import Primary from './components/primary.vue'
import Search from './components/search.vue'
import NewsList from './components/news/newsList.vue'
import NewsDetail from './components/news/newsDetail.vue'
import ImageList from './components/imageslist/imagelist.vue'
import imageDetail from './components/imageslist/imagedetail.vue'

//preview 2018 
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
// Vue.use(preview, {
//   mainClass: 'pswp--minimal--dark',
//   barsSize: {top: 0, bottom: 0},
//   captionEl: false,
//   fullscreenEl: false,
//   shareEl: false,
//   bgOpacity: 0.85,
//   tapToClose: true,
//   tapToToggleControls: false
// })

//全局组件需要的组件对象
import NavBar from './components/common/navBar.vue'
Vue.component('navBar',NavBar)

//过滤器，过滤时间 统一用moment.js处理
import Moment from 'moment'
Vue.filter('convertDate',function(value){
  let val=Date(value)
  return Moment(val).format('YYYY-MM-DD') 
})

Vue.prototype.$axios = Axios
Axios.defaults.baseURL='http://localhost:3000'
//配置路由
Vue.use(VueRouter)
let router = new VueRouter({
  mode:'history',
  routes:[
    {path:'/',redirect:{name:'home'}},//redirect
    {name:'home',path:'/home',component:Home},//home
    {name:'shop',path:'/shop',component:Shop},//购物车
    {name:'search',path:'/search',component:Search},//search
    {name:'primary',path:'/primary',component:Primary},//个人管理
    {name:'news.list',path:'/news/list',component:NewsList},//新闻列表
    {name:'news.detail',path:'/news/detail',component:NewsDetail},//新闻详情页面
    {name:'images.list',path:'/images/list',component:ImageList},//图片页面
    {name:'images.detail',path:'/images/detail/:id',component:imageDetail},//图片详情页面
  ],
  linkActiveClass:'mui-active'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
