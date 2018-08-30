
vuex全局共享数据管理
state存储数据
commit来提交数据的修改
mutations更改state

```javascript
//创建一个Store 仓库
let store = new Vuex.Store({
  //state 数据对象
  state:{
    num:1 //全局数据1
  },
  //改变靠近数据
  mutations:{
    
  } 

  created(){
    //通过this.$store拿到对象
    console.log(this.$store.state)
  }
})
```
```vue
mutations:{ //里面必须是同步函数
    //各种改变行为
    add(){//state 参数2只能为对象 所以 看下面

    }
}

  created(){
    //通过this.$store拿到对象
    //.commit 触发store中的一个方法，可以传参
    this.$store.commit('add',{num:2})
  }
  //commit 如果指定参数触发方法需要传入对象
```
```javascript
actions 与multation区别 ，multation 需要同步执行  actions 不受约束 可以在action里面执行
异步操作
```
```vue
getters
  getters:{//获取数据的方式
    getNumByState(state){
      return state.num
    }
  }

  computed:{
    getNum(){
      return this.$store.getters.getNumByState;
    }
  }//获取数据
```

```javascript
  const moduleA={

  }
  const moduleB={

  }
  const store = new Vuex.Store({
      modules:{
          a:moduleA,
          b:moduleB
      }
  })
  this.$store.state.a.num
```
For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
