<template>
  <div class="top-fix">
    <van-icon name="arrow-left" size="30" color="#c8c9cc" @click="onReturn"/>
    <van-search
      v-model="searchContent"
      shape="round"
      background="white"
      left-icon=""
      right-icon=""
      @click-right-icon="onSearch"
      maxlength="100"
      placeholder="请输入热门关键词"
      @search="onSearch"
      class="van-search"
    >
      <template #right-icon>
        <button type="button" id="search-btn"></button>
      </template>
    </van-search>
  </div>
</template>

<script>
export default {
  name: 'Search.vue',
  components: {},
  methods: {
    onReturn () {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="less" scoped>
.top-fix {
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
}

.van-search {
  flex: 1
}

.van-icon {
  left: 5px;
}

#search-btn {
  border: 0;
  height: 24px;
  width: 50px;
  background: url(@/assets/search-btn@2x.png) no-repeat right;
  background-size: 100%;
}

/deep/ .van-field__right-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

/deep/ .van-search__content--round {
  //border-radius: var(--van-border-radius-max);
  border: 2px solid #ff5000;
}

/deep/ .van-search__action:active {
  background-color: white;
}
</style>
