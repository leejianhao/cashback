<template>
  <div id="app">
    <van-search
      v-model="searchContent"
      show-action
      left-icon=""
      right-icon="search"
      @click-right-icon="onSearch"
      placeholder="请输入热门关键词"
      @search="onSearch"
    >
      <template #action>
        <div class="header-publish-box" @click="onPublish">
          <van-icon name="add-o" size="20"/>
          <span>发布</span>
        </div>
      </template>
    </van-search>

    <van-swipe class="my-swipe" :autoplay="3000" lazy-render :height="150">
      <van-swipe-item v-for="image in images" :key="image">
        <img :src="image"/>
      </van-swipe-item>
    </van-swipe>

    <van-tabs>
      <van-tab class="my-van-tab" title="关注">关注</van-tab>
      <van-tab title="推荐">推荐</van-tab>
      <van-tab title="热门">热门</van-tab>
      <van-tab title="支付宝">支付宝</van-tab>
      <van-tab title="淘宝">淘宝</van-tab>
      <van-tab title="微信">微信</van-tab>
      <van-tab title="其它">其它</van-tab>
    </van-tabs>

    <!-- 路由占位 -->
    <!--    <router-view/>-->

    <van-tabbar route>
      <van-tabbar-item to='/' icon="home-o">线报</van-tabbar-item>
      <van-tabbar-item to='/' icon="search">笔记</van-tabbar-item>
      <van-tabbar-item to='/' icon="shopping-cart-o">购物</van-tabbar-item>
      <van-tabbar-item to='/user' icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  setup () {
    const images = [
      'https://pro-fd.zol-img.com.cn/t_s200x200f/g7/M00/0E/06/ChMkK2LoyESIN3UUAAFBsuBWaS8AAF5KgG1OpEAAUHK199.jpg',
      'https://pro-fd.zol-img.com.cn/t_s200x200f/g7/M00/08/04/ChMkK2IF1seITW9HAAGSXGB8bMYAAAhJQHmRF0AAZJ0972.jpg',
      'https://pro-fd.zol-img.com.cn/t_s200x200f/g7/M00/0A/0E/ChMkK2LfptuIYbfGAAEWu7aMKrUAAFrIgPwkJcAARbT794.jpg'
    ]
    return { images }
  },
  data: function () {
    return {
      searchContent: ''
    }
  },
  methods: {
    onSearch () {
      console.log('you are searching:' + this.searchContent)
    },
    onPublish () {
      console.log('go to publish')
    }
  }
}
</script>
<style>
/*vant主题配置，修改CSS变量*/
:root {
  --van-background-color: var(--van-gray-1);
  /*--van-background-color-light: #c14c60;*/
  --van-search-background-color: #c14c60;
}
</style>
<style lang="less" scoped>
//.van-tabbar {
//  background-color: #42b983;
//}

.header-publish-box {
  display: flex;
  flex-direction: column; // 纵向布局，主轴为纵向，交叉轴为横向
  align-items: center; // 交叉轴对齐方式
  justify-content: center; //主轴对齐方式

  span {
    line-height: 1; //取消文本上下多余间距
    font-size: var(--van-tabbar-item-font-size) // 复用vant的字体大小
  }
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: white;
}
</style>

<!--全局CSS，覆盖vant默认CSS时配置 -->
<style lang="less">
.van-tab--grow {
  flex: 1 0 auto;
  padding: 0 0;
}
</style>
