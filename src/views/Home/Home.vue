<template>
  <div class="home-container">
    <Search>
      <Publish></Publish>
    </Search>

    <van-swipe class="my-swipe" :autoplay="3000" lazy-render :height="150">
      <van-swipe-item v-for="image in images" :key="image">
        <img :src="image"/>
      </van-swipe-item>
    </van-swipe>

    <van-tabs>
      <van-tab class="my-van-tab" title="关注">
        <XBList></XBList>
      </van-tab>
      <van-tab title="推荐">推荐</van-tab>
      <van-tab title="热门">热门</van-tab>
      <van-tab title="支付宝">支付宝</van-tab>
      <van-tab title="淘宝">淘宝</van-tab>
      <van-tab title="微信">微信</van-tab>
      <van-tab title="其它">其它</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import XBList from '@/components/XBList'
import Search from '@/components/Search'
import Publish from '@/components/Publish'

export default {
  components: { Publish, Search, XBList },
  setup () {
    const images = [
      'https://pro-fd.zol-img.com.cn/t_s200x200f/g7/M00/0E/06/ChMkK2LoyESIN3UUAAFBsuBWaS8AAF5KgG1OpEAAUHK199.jpg',
      'https://pro-fd.zol-img.com.cn/t_s200x200f/g7/M00/08/04/ChMkK2IF1seITW9HAAGSXGB8bMYAAAhJQHmRF0AAZJ0972.jpg',
      'https://pro-fd.zol-img.com.cn/t_s200x200f/g7/M00/0A/0E/ChMkK2LfptuIYbfGAAEWu7aMKrUAAFrIgPwkJcAARbT794.jpg'
    ]
    return { images }
  },
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

<style lang="less">
/*vant主题配置，修改CSS变量*/
/*:root {
  --van-background-color: var(--van-gray-1);
  !*--van-background-color-light: #c14c60;*!
  --van-search-background-color: #c14c60;
}*/
</style>
<style lang="less" scoped>
//.home-container {
//  padding: 46px 0 50px 0
//}

//.van-tabbar {
//  background-color: #42b983;
//}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: white;
}

/deep/ .van-tab--grow {
  flex: 1 0 auto;
  padding: 0 0;
}
</style>
