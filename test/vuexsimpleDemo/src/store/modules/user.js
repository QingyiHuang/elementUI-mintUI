
export default {
    //state 数据对象
    namespaced:true,//命名空间
    state:{
      user:[]
    },
    //改变靠近数据 提供了一种行为
    mutations:{
      add2(state,user){
        state.user.push(user)
      }
    },
    //actions行为 为了触发改变直接吧工作交给actions去触发mutations
    actions:{
      addUser(store,user){
        store.commit('add2',user)
      }
    },
    getters:{//获取数据的方式
      getUsers(state){
        return state.user
      }
    }
}