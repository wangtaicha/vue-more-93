// 引入semantic-ui-css
import 'semantic-ui-css/semantic.css'
// 引入定义好的组件
import MyButton from './button/button.vue'
import MyDivider from './divider/divider.vue' //
import MySlider from './slider/slider.vue'//
import MyHeadline from './headline/headline.vue'

// 导出组件
export default {
  install (Vue) {
    Vue.component('MyButton', MyButton)
    Vue.component('Mydivider', MyDivider)
    Vue.component('Myslider', MySlider)
    Vue.component('MyHeadline', MyHeadline)
  }
}
