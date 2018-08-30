//mapActions 管理所有事件行为
//mapGetters 专门获取数据
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {
    add(c){
        console.log(c)
    }
}

export default new Vuex.Store({
    actions
})