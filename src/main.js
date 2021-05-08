import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/style/global.css'
import './assets/style/reset.css'
import '@/assets/style/scrollbar.css'
import ECharts from 'vue-echarts'
import echarts from 'echarts'
import BaiduMap from 'vue-baidu-map'
import remConfig from './assets/style/remConfig'

Vue.use(BaiduMap, {
  ak: 'GfCC3A23G6Z83VepGIYjZxa7u2muFo9I'
})
Vue.component('v-chart', ECharts)
Vue.use(ElementUI)
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
remConfig()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
