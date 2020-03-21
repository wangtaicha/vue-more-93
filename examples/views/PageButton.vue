<template>
    <div>
      <H1>测试My-divider组件</H1>
    <my-button animated="vertical">
      <div slot="hidden">$10000</div>
      <div slot="visible">
        <i class="shop icon"></i>不要错过哈
      </div>
    </my-button>

    <my-button animated="fade">
      <div slot="hidden">$10000</div>
      <div slot="visible">
        <i class="shop icon"></i>不要错过哈
      </div>
    </my-button>
    <br />
    <br />
    <my-button disabled loading icon="bug" size="mini">点个赞再走</my-button>
    <br />
    <br />
    <my-button icon="bug" size="big">带图标的按钮</my-button>
    <br />
    <br />
    <my-button icon="blind" size="massive">mini小按钮</my-button>
    <br />
    <br />
    <my-button size="huge">哈哈哈</my-button>
    <br>
    <br>
    <my-button @click="Cclick" size="mini">按钮事件</my-button>
    </div>
</template>

<script>
export default {
  name: 'PageButton',
  methods: {
    Cclick () {
      console.log('click')
      alert('别点我')
    }
  }
}
</script>

<style lang="less" scoped>
</style>
