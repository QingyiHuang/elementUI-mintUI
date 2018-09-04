
export default{
    state:{//数据
        username:'hqy',
        avatar:'',
        isLogin:'',//isLogin初始化为空，当登陆成功后自动更新状态
        email:'',
        phone:'',
        birthday:'',
        introduction:'',
        pow:''
    },
    //改变数据的方法
    mutations:{
        cUser(state,obj){
            state.username=obj.username
            window.sessionStorage.setItem('username',obj.username)
        },
        cLogin(state,msg){
            state.isLogin=msg.err_code
            window.sessionStorage.setItem('isLogin',msg.err_code)
        },
        // cAvatar(state,obj){
        //     state.username=obj.username
        //     window.sessionStorage.setItem('username',obj.username)
        // },
        // cEmail(state,obj){
        //     state.username=obj.username
        //     window.sessionStorage.setItem('username',obj.username)
        // },
        // cPhone(state,obj){
        //     state.username=obj.username
        //     window.sessionStorage.setItem('username',obj.username)
        // },
        // cBirthday(state,obj){
        //     state.username=obj.username
        //     window.sessionStorage.setItem('username',obj.username)
        // },
        // cIntroduction(state,obj){
        //     state.username=obj.username
        //     window.sessionStorage.setItem('username',obj.username)
        // },
        // cPow(state)
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
}


