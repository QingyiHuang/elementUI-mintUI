<template>
  <div id="app">
    <!--头部-->
    <mt-header title="newsAndBuy"></mt-header>

    <router-view></router-view>

    <!--底部-->
    <footer-vue></footer-vue>
  </div>
</template>

<script>
import Footer from './components/footer.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'app'
    }
  },
  components:{
    FooterVue:Footer
  }
}
</script>

