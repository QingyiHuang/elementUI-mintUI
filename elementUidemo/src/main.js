import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'

import {Button,Icon,Rate}  from 'element-ui'
import { Row, Col } from 'element-ui'//layout 用这两个引入


/*import elementUi  from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'*/
Vue.use(Button)
Vue.use(Icon)
Vue.use(Rate)
Vue.use(Row)
Vue.use(Col)

Vue.prototype.$axios = Axios
new Vue({
  el: '#app',
  render: h => h(App)
})
