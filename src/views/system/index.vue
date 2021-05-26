<template>
  <div class="content">
    <div class="content-title">系统设置</div>
    <div class="content-tabs">
      <el-tabs v-model="activeName" class="tabs-content" type="card" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">
          <User />
        </el-tab-pane>
        <el-tab-pane label="角色管理" name="second">
          <Role />
        </el-tab-pane>
        <el-tab-pane label="设备管理" name="third">
          <Equipment />
        </el-tab-pane>
        <el-tab-pane label="字典管理" name="fourth">
          <Dictionary />
        </el-tab-pane>
        <el-tab-pane label="组织机构" name="fifth">
          <Mechanism />
        </el-tab-pane>
        <el-tab-pane label="系统日志" name="sixth">
          <SystemLog />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import User from './children/user' // 用户管理
import Role from './children/role' // 角色管理
import Equipment from './children/equipment' // 设备管理
import Dictionary from './children/dictionary' // 字典管理
import Mechanism from './children/mechanism' // 组织机构
import SystemLog from './children/systemLog' // 系统日志
export default {
  components: {
    User,
    Role,
    Equipment,
    Dictionary,
    Mechanism,
    SystemLog
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

<style lang="scss" scoped>
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
  .content-tabs {
    height: calc(100% - 60px);
    .tabs-content {
      height: 100%;
    }
    // /deep/ .el-tabs__content {
    //   height: calc(100% - 41px);
    // }
    /deep/ .el-tabs__header {
      margin: 0 0 40px;
    }
    /deep/ .el-tabs--card > .el-tabs__header {
      border-bottom: none;
    }
    /deep/ .el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
      background: #e4e4e4;
      font-weight: 800;
    }
    /deep/ .el-tabs--card > .el-tabs__header .el-tabs__item:hover {
      background: #e4e4e4;
      font-weight: 800;
    }
    /deep/ .el-tabs--card > .el-tabs__header .el-tabs__item {
      border-bottom: 1px solid #ccc;
      border-right: 1px solid #ccc;
      background: #fff;
      color: #000;
    }
  }
}
</style>
