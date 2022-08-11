<template>
  <van-search
    v-model="searchContent"
    shape="round"
    background="white"
    show-action
    left-icon=""
    right-icon=""
    @click-right-icon="onSearch"
    maxlength="100"
    placeholder="请输入热门关键词"
    @search="onSearch"
  >
    <template #right-icon>
      <button type="button" id="search-btn"></button>
    </template>

    <template #action>
      <slot/>
    </template>
  </van-search>
</template>

<script>
export default {
  name: 'Search.vue',
  data: function () {
    return {
      searchContent: ''
    }
  },
  methods: {
    onSearch () {
      this.$router.push('/search')
    }
  }
}
</script>

<style lang="less" scoped>
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
