import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//创建vuex的核心仓库
const store = new Vuex.Store({
    //数据
    state:{
        username:'hqy',
        avatar:'',
        isLogin:'',//isLogin初始化为空
    },
    //改变数据的方法
    mutations:{
        cUser(state,obj){
            state.username=obj.username
        },
        cLogin(state,msg){
            state.isLogin=msg.err_code
            localStorage.setItem('isLogin',msg.err_code)//后端约定
        }
    },
    //actions 触发改变，dispatch去触发mutations
    actions:{
        changeUser(store,obj){
            store.commit('cUser',obj)
        },
        changeLogin(store,msg){
            store.commit('cLogin',msg)
        }
    },
    //getters 设施 获取数据的方式，获取state的方法
    getters:{
        getUser(state){
            return state.username
        },
        getAvatar(state){
            return state.avatar
        },
        getLoginStatus(state){
            return state.isLogin
        }
    }
})

export default store