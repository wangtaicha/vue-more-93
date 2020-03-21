<template>
  <div class="slider" @mouseenter="hMouseEnter" @mouseleave="hMouseLeave" @click="mouseClick">
    <div class="slider-content">
      <transition-group name="fade">
      <div class="slider-item"
      v-show="idx===currentIdx"
      v-for="(item,idx) in list"
      :key="item.url">
        <img :src="item.url" :alt="item.alt" />
      </div>
    </transition-group>
    </div>

    <!-- 左右按钮 -->
    <span class="btn btn_left" @click="hPrev"></span>
    <span class="btn btn_right" @click="hNext"></span>

    <!-- 标题区域 -->
    <div class="txt">{{this.list[currentIdx].alt}}</div>
    <!-- 指示条 -->
    <ol class="indirector">
      <!-- // 只是idx是当前要显示的图，才会添加current -->
      <li
      v-for="(item,idx) in list"
      :key="idx"
      :class="{current:idx===currentIdx}"
      @mouseenter="currentIdx=idx"
      ></li>

      <!-- <li class="current"></li> -->
    </ol>
  </div>
</template>
<script>
export default {
  name: 'My-Slider',
  props: {
    // 轮播列表
    list: {
      type: Array,
      required: true
    },
    // 当前开始播放是哪一张图
    curIdx: {
      type: Number,
      default: 0,
      required: false
    },
    // 自动播放的毫秒数
    auto: {
      type: Number,
      default: 0, // 默认不开启自动播放
      required: false
    }
  },
  data () {
    return {
      // 自定义数据项来接收curIdx属性。
      // 因为在组件内部，不允许改props值的
      currentIdx: this.curIdx,
      // 先给定时器清空
      timer: null
    }
  },
  created () {
    this.move()
  },
  methods: {
    // 点击
    mouseClick () {
      this.$emit('click', this.currentIdx)
      console.log('鼠标点击了')
    },
    // 实现自动轮播
    move () {
      // 根据用户是否使用了this.auto决定定时间的时间
      if (this.auto) {
        this.timer = setInterval(() => {
          this.hNext()
        }, this.auto)
      }
    },
    // // 鼠标进入让轮播效果暂停
    hMouseEnter () {
      // 清除定时器
      clearInterval(this.timer)
    },
    // 鼠标移出开始轮播
    hMouseLeave () {
      this.move()
    },
    hNext () {
      // 切换下一张
      // 本质就是修改  当前显示图片 的索引值（下标）
      // console.log(this.currentIdx)
      this.currentIdx = this.currentIdx + 1
      // 防止越界
      if (this.currentIdx === this.list.length) {
        this.currentIdx = 0
      }
      // console.log(this.currentIdx)
    },
    hPrev () {
      // 切换上一张
      this.currentIdx = this.currentIdx - 1
      // 防止越界
      if (this.currentIdx === -1) {
        this.currentIdx = this.list.length - 1
      }
    }
  }
}
</script>
<style>
.fade-enter-active,.fade-leave-active {
  transition: all .6s ;
}
.fade-enter, .fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  /* transform: translateX(40px); */
  opacity: 0;
}
.slider .slider-content,
.slider img {
  width: 100%;
  height: 100%;
}
.slider {
  margin: 0 auto;
  border: 1px solid #ccc;
  position: relative;
}
.slider .slider-content {
  overflow: hidden;
  position: relative;
}
.slider .slider-content .slider-item {
  position: absolute;
  top: 0;
  left: 0;
}
.slider img {
  width: 100%;
}
.slider .btn,
.slider .txt,
.slider .indirector {
  position: absolute;
}
.slider .btn {
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0);
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 0.2s;
}
.slider .btn:hover {
  background-color: rgba(255, 255, 255, 1);
}
.slider .btn:before,
.slider .btn:after {
  content: "";
  height: 3px;
  width: 25px;
  background-color: #fff;
  position: absolute;
  left: 15px;
  top: 23px;
  transform: rotateZ(60deg);
  transform-origin: 0px center;
  transition: all 0.2s;
}
.slider .btn:after {
  transform: rotateZ(-60deg);
}
.slider .btn:hover:before {
  transform: rotateZ(45deg);
  background-color: red;
}
.slider .btn:hover:after {
  transform: rotateZ(-45deg);
  background-color: red;
}
.slider .btn.btn_right:before,
.slider .btn.btn_right:after {
  transform-origin: right center;
}
.slider .btn.btn_left {
  left: 20px;
}
.slider .btn.btn_right {
  right: 20px;
}
.slider .txt {
  text-indent: 1em;
  line-height: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: left;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #fff;
}
.slider .indirector {
  bottom: 10px;
  right: 1em;
}
.slider .indirector li {
  display: inline-block;
  margin: 0 5px;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #fff;
}
.slider .indirector li {
  transition: transform 0.2s;
}
.slider .indirector .current {
  background-color: #369;
  transform: scale(1.2);
}
</style>
