<template>
  <div id="app">
    {{ msg }}
    <button @click="add">add</button>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      msg: 20
    }
  },
  methods:mapActions({
    'add'
  })
}
</script>

<style>

</style>
