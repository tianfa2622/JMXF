<template>
  <div id="app">
    <template v-if="page">
      <router-view />
    </template>
    <template v-else>
      <Header class="head" />
      <router-view class="main" />
    </template>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    Header
  },
  data() {
    return {
      page: true
    }
  },
  created() {
    console.log(this)
    this.$route.name === '登录' ? (this.page = true) : (this.page = false)
    console.log('router', this.$route.name)
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  background-image: url('assets/backimg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .head {
    z-index: 1;
  }
  .main {
    z-index: -1;
  }
  .el-pagination {
    input {
      color: #606266 !important;
    }
  }
}
</style>
