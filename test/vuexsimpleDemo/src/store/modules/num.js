/**
 * vuex 
 */

//创建一个Store 仓库
export default {
    namespaced:true,
    //state 数据对象
    state:{
      num:1 //全局数据1
    },
    //改变靠近数据 提供了一种行为
    mutations:{
      add(state,obj){
        state.num+= obj.num;
      },
      sub(state,obj){//只能接收一个对象
        state.num-= obj.num;
      }
    },
    //actions行为 为了触发改变直接吧工作交给actions去触发mutations
    actions:{
      addProdNum(store,obj){
        store.commit('add',obj)
      },
      subNum(store,obj){
        store.commit('sub',obj)
      }
    },
    getters:{//获取数据的方式
      getNumByState(state){
        return state.num
      }
    }
}