<template>
  <div class="content">
    <div class="content-title">机飞操作控制</div>
    <div class="content-map">
      <div class="map-select">
        选择区域：
        <el-select v-model="value" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <el-button>搜索</el-button>
      </div>
      <div class="map">
        <pictureMap />
      </div>
    </div>
  </div>
</template>
<script>
import pictureMap from './components/pictureMap'
export default {
  components: {
    pictureMap
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
  .content-map {
    width: 100%;
    .map-select {
      font-size: 14px;
      color: #fff;
      input {
        width: 170px;
        background-color: rgba(5, 60, 67, 1);
        height: 30px;
        color: #00f3ff;
      }
      .el-input__icon {
        line-height: 25px;
      }
      button {
        height: 35px;
        line-height: 10px;
        margin-left: 30px;
        background-color: rgba(5, 60, 67, 1);
        border-color: rgba(121, 121, 121, 1);
        color: #00f3ff;
      }
    }
    .map {
      width: 100%;
      height: 600px;
      padding: 10px;
    }
  }
}
</style>
