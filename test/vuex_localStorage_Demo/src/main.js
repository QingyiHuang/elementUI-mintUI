import Vue from 'vue'
import App from './App.vue'

import Vuex from 'vuex'
/*
只使用vuex的话在用户进行刷新时将会自动删除，
所以配合localstorage，这样可以让SPA应用中既可以同步用到数据，
又不受刷新影响
*/
Vue.use(Vuex)
//设置localStorage方法
Vue.prototype.setToken = function (tokenName, tokenValue) {
  if (window.localStorage) {
    localStorage.setItem(tokenName, tokenValue);
  } else {
    alert('This browser does NOT support localStorage');
  }
};
Vue.prototype.getToken = function (name) {
  var token = localStorage.getItem(name);
  if (token) {
    return token;
  } else {
    return '';
  }
};

const store = new Vuex.Store({
  // 定义状态
  state: {
    //登录状态，默认为''，当登录成功后自动再更新状态
    isLogin :'' 
  },
  mutations:{
    isLogin(state,msg){
      state.isLogin = msg;
      this.setToken('isLogin',msg)
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
