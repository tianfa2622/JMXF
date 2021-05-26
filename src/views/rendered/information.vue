<template>
  <div class="content">
    <div class="content-title">信息全局检索</div>
    <div class="content-card">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="巡防信息查询" name="first">
          <scouts />
        </el-tab-pane>
        <el-tab-pane label="人员信息查询" name="second">
          <personnel />
        </el-tab-pane>
        <el-tab-pane label="车辆信息查询" name="fourth">
          <vehicle />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import scouts from './informationPage/scouts'
import personnel from './informationPage/personnel'
import vehicle from './informationPage/vehicle'
export default {
  components: {
    scouts,
    personnel,
    vehicle
  },
  data() {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
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
    .footage-title {
      font-size: 16px;
      color: #fff;
      margin-bottom: 20px;
      margin-top: 20px;
    }
    .content-tab {
      width: 100%;
      height: 50px;
      margin-top: 30px;
    }
    .el-tabs--card > .el-tabs__header {
      border: none;
    }
    .el-tabs--card > .el-tabs__header .el-tabs__nav {
      border: 1px solid #797979;
      border-radius: 5px;
    }
    .el-tabs__item {
      color: #fff;
    }
    .el-tabs__header .el-tabs__item.is-active {
      color: #00f3ff;
      border-bottom-color: #00f3ff;
    }
    .el-tabs__item:hover {
      color: #00f3ff;
    }
    .table {
      width: 100%;
      margin-top: 10px;
      /deep/ .el-table,
      .el-table__expanded-cell {
        background-color: transparent;
      }
      /deep/ .el-table tr {
        background-color: transparent !important;
      }
      /deep/ .el-table__header-wrapper .el-table__header .has-gutter tr th {
        background-color: transparent !important;
        color: #fff;
      }
      /deep/ .el-table--enable-row-transition .el-table__body td,
      .el-table .cell {
        background-color: transparent;
        color: #fff;
      }
      .el-link {
        margin-left: 20px;
      }
    }
    .Pagin {
      width: 100%;
      height: 50px;
      text-align: center;
      margin-top: 10px;
      .el-pagination__total {
        color: #fff;
      }
      .el-pagination__jump {
        color: #fff;
      }
    }
  }
}
</style>
