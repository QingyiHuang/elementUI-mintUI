<template>
  <div>
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <mt-navbar v-model="selected">
      <mt-tab-item id="1" :class="s">选项一</mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
      <mt-tab-item id="3">选项三</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in 10"  :title="'内容 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4"  :title="'测试 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6"  :title="'选项 ' + n" />
      </mt-tab-container-item>
    </mt-tab-container>

      <mt-swipe :auto="4000">
        <mt-swipe-item><img src="" alt=""></mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe>

    <mt-search v-model="value" :result.sync="result"></mt-search>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: '',
      result:'hah'
    }
  }
}
</script>

<style>

</style>
