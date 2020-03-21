<template>
  <h2 class="ui mini header">
    <i v-if="icon" class="icon" :class="icon"></i>
    <div class="content">
      <slot></slot>
      <div class="sub header"><slot name="sub"></slot></div>
    </div>
  </h2>
</template>

<script>
export default {
  name: 'My-headline',
  props: {
    level: {
      type: Number,
      default: 1,
      require: false
    },
    icon: {
      type: String,
      require: false
    },
    size: {
      type: String,
      default: 'medium'
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
</style>
