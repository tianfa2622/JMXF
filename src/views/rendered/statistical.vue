<template>
  <div class="content">
    <div class="content-title">巡防统计分析</div>
    <div class="content-card">
      <div class="char">
        <div class="char-title">历史安全态势统计分析</div>
        <historicalEchar />
      </div>
      <div class="char">
        <div class="char-title">巡防信息查询</div>
        <historicalEchar />
      </div>
      <div class="char">
        <div class="char-title">巡防信息查询</div>
        <historicalEchar />
      </div>
      <div class="char">
        <div class="char-title">巡防信息类型统计</div>
        <historicalEchar />
      </div>
    </div>
  </div>
</template>

<script>
import historicalEchar from './components/historicalEchar'
export default {
  components: {
    historicalEchar
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.content {
  width: 95%;
  height: calc(100% - 120px);
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 40px;
  background-image: url('../../assets/backimg01.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  overflow: auto;
  .content-title {
    width: 100%;
    height: 8%;
    font-size: 22px;
    color: #fff;
    font-weight: 600;
  }
  .content-card {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    .char {
      width: 50%;
      height: 303px;
      .char-title {
        text-align: center;
        font-size: 16px;
        color: #fff;
      }
    }
  }
}
</style>
