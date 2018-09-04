import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

//定义sessionStorage操作方式
// Vue.prototype.setToken = function(tokenName,tokenValue){
//   if(window.localStorage){
//     localStorage.setItem(tokenName,tokenValue)
//   }else{
//     console.log('this browser does not support localStorage')
//   }
// }
// Vue.prototype.getToken = function(tokenName){
//   var token = localStorage.getItem(tokenName)
//   if(token){
//     return token
//   }else{
//     return '';
//   }
// }

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
//注册登录部分
import Login from './components/user/login.vue'
import Register from './components/user/register.vue'

//vuex 
import userStore from './store/storeUser'
Vue.use(Vuex)
let store = new Vuex.Store({
  modules:{
    userStore
  }
})
//preview 2018 
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

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
    {name:'news.detail',path:'/news/detail/:id',component:NewsDetail},//新闻详情页面
    {name:'images.list',path:'/images/list',component:ImageList},//图片页面
    {name:'images.detail',path:'/images/detail/:id',component:imageDetail},//图片详情页面
    {name:'loginPage',path:'/login',component:Login},//登录
    {name:'registerPage',path:'/register',component:Register},//注册
  ],
  linkActiveClass:'mui-active'//当router跳转的时候class 用mui 的active 
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  created(){
    //判断是否有本地存储中是否有isLogin，并更新vuex仓库
    if(window.sessionStorage.getItem('isLogin') == null){
      window.sessionStorage.setItem('isLogin','')
    }else{
      this.$store.dispatch('changeLogin',{err_code:window.sessionStorage.getItem('isLogin')})
    }
    console.log(this.$store.getters['getLoginStatus'])
  }
})
