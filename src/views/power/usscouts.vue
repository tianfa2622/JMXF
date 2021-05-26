<template>
  <div class="content">
    <div class="content-title">巡逻力量管理</div>
    <div class="content-char">
      <div class="char">
        <div class="char-title">区域巡防人员统计</div>
        <personnelEchar />
      </div>
      <div class="char">
        <div class="char-title">巡防人员类型比例</div>
        <proportionEchar />
      </div>
    </div>
    <div class="content-tab">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="巡防人员管理" name="first">
          <Patrolman />
        </el-tab-pane>
        <el-tab-pane label="警务站管理" name="second">
          <PoliceStation />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import personnelEchar from './components/personnelEchar'
import proportionEchar from './components/proportionEchar'
import PoliceStation from './usscoutsPage/PoliceStation'
import Patrolman from './usscoutsPage/Patrolman'
export default {
  components: {
    personnelEchar,
    proportionEchar,
    PoliceStation,
    Patrolman
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
  .content-char {
    width: 100%;
    height: 42%;
    display: flex;
    justify-content: space-between;
    .char {
      width: 50%;
      height: 100%;
      .char-title {
        width: 100%;
        height: 25px;
        text-align: center;
        font-size: 14px;
        color: #fff;
      }
    }
  }
  .content-tab {
    width: 100%;
    height: 50%;
    padding-top: 10px;
    /deep/ .el-tabs__item {
      color: #00f3ff;
    }
    .el-tabs {
      width: 100%;
      height: 100%;
      .scope {
        width: 100%;
        height: 50px;
      }
    }
    .table {
      width: 100%;
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
