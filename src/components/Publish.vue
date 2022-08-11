<template>
  <div class="header-publish-box" @click="onPublish">
    <van-icon name="add-o" size="20"/>
    <span>发布</span>
  </div>
</template>

<script>
export default {
  name: 'Publish',
  methods: {
    onPublish () {
      console.log('go to publish')
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .header-publish-box {
  display: flex;
  flex-direction: column; // 纵向布局，主轴为纵向，交叉轴为横向
  align-items: center; // 交叉轴对齐方式
  justify-content: center; //主轴对齐方式

  span {
    line-height: 1; //取消文本上下多余间距
    font-size: var(--van-tabbar-item-font-size) // 复用vant的字体大小
  }
}
</style>
