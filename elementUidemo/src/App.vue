<template>
  <div>
      <el-row>
        <el-col :span='24' class="center">
          <div class="block">
            <span class="demonstration">默认不区分颜色</span>
            <el-rate v-model="value1"></el-rate>
            <el-button type="primary">primary</el-button>
            <el-button type="danger">danger</el-button>
            <el-button type="info" icon="el-icon-close">info</el-button>
            <el-button type="success">success</el-button>
            <el-button type="warning" icon="el-icon-loading">warning</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span='8' class="ig">1</el-col>
        <el-col :span='8' class="ig">2</el-col>
        <el-col :span='8' class="ig">3</el-col>
      </el-row>

      <ass @click.native="send"></ass><!--自定义组件加事件+.native-->
      <hr>
      {{ msg.a }}
  </div>
</template>

<script>
import ass from './components/axios.vue'
export default {

  data () {
    return {
      value1:'',
      msg:''
    }
  },
  components:{
    ass
  },
  methods:{
    send(){
      var that =this
      this.$axios.get('/src/a.json')
      .then(function(res){
        //console.log() 
        that.msg=res.data
      }).catch(function(err){
        console.log(err)
      })
    }
  }
}
</script>

<style scope>
  .ig{
    background: deeppink;
    border-radius: 8px;
    min-height: 20px;
  }
  .center{
    text-align: center;
  }
</style>
