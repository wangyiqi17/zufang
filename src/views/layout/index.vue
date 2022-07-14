<template>
  <div class="layout-container">
    <router-view />
    <van-tabbar v-model="active" class="layout-tabbar" route>
      <van-tabbar-item to="/home">
        <i slot="icon" class="iconfont icon-home"></i>
        <span class="text">首页</span>
      </van-tabbar-item>
      <van-tabbar-item to="/search">
        <i slot="icon" class="iconfont icon-search"></i>
        <span class="text">找房</span>
      </van-tabbar-item>
      <van-tabbar-item to="/news">
        <i slot="icon" class="iconfont icon-file"></i>
        <span class="text">资讯</span>
      </van-tabbar-item>
      <van-tabbar-item to="/my">
        <i slot="icon" class="iconfont icon-user"></i>
        <span class="text">{{ $store.state.user ? "我的" : "未登录" }}</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "LayoutIndex",
  data() {
    return {
      active: 0,
    }
  },
}
</script>

<style scoped lang="less">
.layout-container {
  .layout-tabbar {
    i.iconfont {
      font-size: 40px;
    }
    span.text {
      font-size: 20px;
    }
  }
}
</style>
