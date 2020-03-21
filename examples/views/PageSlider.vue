<template>
    <div>
        <h1>slider测试轮播图组件</h1>
        <myslider style="width:400px;height:500px;"
        :auto="2000"
        :curIdx="curIdx"
        :list="list"
        @click="hclick"
        ></myslider>
    </div>
</template>

<script>
export default {
  name: 'PageSlider',
  data () {
    return {
      curIdx: 0,
      list: [
        { url: require('../../public/img/01.jpg'), alt: '为成功坚持' },
        { url: require('../../public/img/02.jpg'), alt: '为爱执着' },
        { url: require('../../public/img/03.jpg'), alt: '为美好付出' },
        { url: require('../../public/img/04.jpg'), alt: '为希望前进' },
        { url: require('../../public/img/05.jpg'), alt: '为梦想勇敢' },
        { url: require('../../public/img/06.jpg'), alt: '为自己而活' },
        { url: require('../../public/img/07.jpg'), alt: '为幸福奋斗' },
        { url: require('../../public/img/08.jpg'), alt: '为自由拼搏' }
      ]
    }
  },
  methods: {
    hclick (idx) {
      console.log('鼠标点击第几个' + idx + '个图片')
    }
  }
}
</script>

<style lang="less" scoped>
</style>
