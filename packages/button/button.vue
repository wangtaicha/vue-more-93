<template>
  <div class="ui red inverted button" :class="cClass" @click="hidClick">
    <template v-if="animated">
      <div v-if="$slots.hidden" class="hidden content">
        <!-- 具名插槽 -->
        <slot name="hidden"></slot>
      </div>
      <div v-if="$slots.visible" class="visible content">
        <!-- 具名插槽 -->
        <slot name="visible"></slot>
      </div>
    </template>
    <template v-else>
      <!-- 不带动画效果的按钮 -->
      <!-- 如果用户设置了icon属性,则会显示图标 -->
      <i v-if="icon" class="icon" :class="icon"></i>
      <slot>我是默认内容</slot>
    </template>
  </div>
</template>

<script>
export default {
  name: 'My-Button',
  props: {
    size: {
      type: String,
      default: 'medium',
      validator (val) {
        // 只要传入size属性,就会进入到这个函数中
        // 如果返回true,则表示生效
        // 如果返回false, 则表示不生效
        // 检查思路: 如果传入'mini', 'tiny', 'small', 'large',... 就ok
        // 否则就返回false
        // console.log(val)
        // includes检查这个数组中,是否包含这个元素
        return ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive', 'medium'].includes(val)
      }
    },
    icon: {
      type: String,
      required: false
    },
    disabled: {
      type: Boolean,
      // 默认 不是 禁用状态
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    animated: {
      type: String,
      default: ''
    }
  },
  methods: {
    hidClick () {
      this.$emit('click')
    }
  },
  computed: {
    cClass () {
      // 用数组收集类的名字
      var classArr = [this.size]
      this.animated && classArr.push(`animated ${this.animated}`)
      this.loading && classArr.push('loading')
      this.disabled && classArr.push('disabled')
      return classArr.join(' ')
    }
    //     cClass () {
    //   // 用数组收集类的名字
    //   var classArr = ['this.size']
    //   if (this.loading) {
    //     classArr.push('loading')
    //   }
    //   // 收集收到的属性,并分析一下
    //   // 返回一个class给按钮外层容器
    //   if (this.disabled) {
    //     // 表示用户开启了禁用
    //     // disabled 是semantic-ui中一个特殊的类名
    //     // 这里会有两个类名,所以必须价格空格,要不然就会连接起来成为一个类名
    //     // return this.size + ' disabled'
    //     classArr.push('disabled')
    //   }
    //   return classArr.join(' ')
    // }
  }
}
</script>

<style lang="less" scoped>
</style>
