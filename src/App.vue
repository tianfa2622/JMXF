<template>
  <div id="app">
    <Header class="head" />
    <router-view class="main" />
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
    return {}
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
