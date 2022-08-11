<template>
  <div class="xblist-container">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad">
        <div class="xblist-box">
          <span class="xblist-title">
            苏州建行xyk立减金
          </span>
          <span class="xblist-footer">
            张三 1000赞美 1000收藏 3分钟前
          </span>
        </div>
        <div class="xblist-box">
          <span class="xblist-title">
            苏州建行xyk立减金
          </span>
          <span class="xblist-footer">
            张三 1000赞美 1000收藏 3分钟前
          </span>
        </div>
        <div class="xblist-box">
          <span class="xblist-title">
            苏州建行xyk立减金
          </span>
          <span class="xblist-footer">
            张三 1000赞美 1000收藏 3分钟前
          </span>
        </div>
        <div class="xblist-box">
          <span class="xblist-title">
            苏州建行xyk立减金
          </span>
          <span class="xblist-footer">
            张三 1000赞美 1000收藏 3分钟前
          </span>
        </div>
        <div class="xblist-box">
          <span class="xblist-title">
            苏州建行xyk立减金
          </span>
          <span class="xblist-footer">
            张三 1000赞美 1000收藏 3分钟前
          </span>
        </div>
        <div class="xblist-box">
          <span class="xblist-title">
            苏州建行xyk立减金
          </span>
          <span class="xblist-footer">
            张三 1000赞美 1000收藏 3分钟前
          </span>
        </div>
        <div class="xblist-box">
          <span class="xblist-title">
            苏州建行xyk立减金
          </span>
          <span class="xblist-footer">
            张三 1000赞美 1000收藏 3分钟前
          </span>
        </div>
        <div class="xblist-box">
          <span class="xblist-title">
            苏州建行xyk立减金
          </span>
          <span class="xblist-footer">
            张三 1000赞美 1000收藏 3分钟前
          </span>
        </div>
        <div class="xblist-box">
          <span class="xblist-title">
            苏州建行xyk立减金
          </span>
          <span class="xblist-footer">
            张三 1000赞美 1000收藏 3分钟前
          </span>
        </div>
        <div class="xblist-box">
          <span class="xblist-title">
            苏州建行xyk立减金
          </span>
          <span class="xblist-footer">
            张三 1000赞美 1000收藏 3分钟前
          </span>
        </div>

      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  data () {
    return {
      finished: false,
      loading: false,
      refreshing: false
    }
  },
  methods: {
    onLoad () {
      setTimeout(() => {
        if (this.refreshing) {
          this.refreshing = false
        }
        // 加载数据

        // 该批次数据加载完毕，停止加载
        this.loading = false

        // 所有数据加载完毕
        this.finished = true
      }, 1000)
    },
    onRefresh () {
      // 是否已加载完成，加载完成后不再触发 load 事件
      this.finished = false
      // 是否处于加载状态，加载过程中不触发 load 事件
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.onLoad()
    }
  }
}
</script>

<style lang="less" scoped>
.xblist-box {
  position: relative;
  height: 50px;
  font-size: var(--van-tab-font-size);
  margin: 5px 12.645px;
  background-color: #f7f9fa;

  .xblist-title {
    position: absolute;
    line-height: 1;
    left: 2px;
    top: 2px;
  }

  .xblist-footer {
    position: absolute;
    bottom: 2px;
    right: 2px;
  }
}
</style>
