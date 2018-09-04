<template>
  <div id="app">
    {{msg}}
    {{ getNum }}
    
    
    <button @click="jian">-</button>
    <button @click="jia">+</button>
    <son></son>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: '1'
    }
  },
  created(){
    //通过this.$store拿到对象
    //.commit 触发store中的一个方法，可以传参
    //this.$store.commit('add',{num:2})


    //用actions 装了事件之后
    //用dispatch 去分派任务
    //this.$store.dispatch('subNum')
  },
  computed:{
    getNum(){
      return this.$store.getters['numD/getNumByState'];
    }
  },
  methods:{
    jian(){
      this.$store.dispatch('numD/subNum',{num:2})
    },
    jia(){
      this.$store.dispatch('numD/addProdNum',{num:2})
    }
  }
}
</script>

<style>

</style>
