<template>
  <div id="app">
    <!-- 路由占位 -->
    <router-view/>

    <van-tabbar route>
      <van-tabbar-item to='/home' icon="home-o">线报</van-tabbar-item>
      <van-tabbar-item to='/note' icon="search">笔记</van-tabbar-item>
      <van-tabbar-item to='/shopping' icon="shopping-cart-o">购物</van-tabbar-item>
      <van-tabbar-item to='/user' icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  created () {
    // 禁用双击放大
    let lastTouchEnd = 0
    document.documentElement.addEventListener('touchend', function (event) {
      const now = Date.now()
      if (now - lastTouchEnd <= 300) {
        event.preventDefault()
      }
      lastTouchEnd = now
    }, {
      passive: false
    })
  }
}
</script>
