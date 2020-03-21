<template>
    <div><h1>测试headline组件</h1>
    <my-headline :level="1" icon="bug" size="massive">
        标题1
        <div slot="sub">标题2</div>
    </my-headline>
    </div>

</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
</style>
