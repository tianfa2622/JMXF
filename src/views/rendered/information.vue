<template>
  <div class="content">
    <div class="content-title">信息全局检索</div>
    <div class="content-card">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="巡防信息查询" name="first">
          <div class="footage-title">巡防信息查询</div>
          <div class="content-tab">
            <div class="inputs">
              <el-input v-model="input" placeholder="请输入警情编号" />
              <el-input v-model="input" placeholder="请输入警情名称" />
              <el-input v-model="input" placeholder="请选择警情类别" />
            </div>
            <div class="buttons">
              <el-button>搜索</el-button>
              <el-button>重置</el-button>
            </div>
          </div>
          <div class="table">
            <tablein :data="tableData">
              <!-- <template #operation="{ data }">
                <el-link type="primary" @click="Infor(data.name)">查看</el-link>
              </template> -->
            </tablein>
          </div>
          <div class="Pagin">
            <el-pagination :current-page="currentPage4" :page-sizes="[10]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="10" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
          </div>
        </el-tab-pane>
        <el-tab-pane label="人员信息查询" name="second">
          <div class="footage-title">人员信息查询</div>
          <div class="content-tab">
            <div class="inputs">
              <el-input v-model="input" placeholder="请输入人员姓名" />
              <el-input v-model="input" placeholder="请输入身份证号" />
            </div>
            <div class="buttons">
              <el-button>搜索</el-button>
              <el-button>重置</el-button>
            </div>
          </div>
          <div class="table">
            <tablein :data="tableData">
              <!-- <template #operation="{ data }">
                <el-link type="primary" @click="Infor(data.name)">查看</el-link>
              </template> -->
            </tablein>
          </div>
          <div class="Pagin">
            <el-pagination :current-page="currentPage4" :page-sizes="[10]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="10" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
          </div>
        </el-tab-pane>
        <el-tab-pane label="车辆信息查询" name="fourth">
          <div class="footage-title">车辆信息查询</div>
          <div class="content-tab">
            <div class="inputs">
              <el-input v-model="input" placeholder="请输入车牌号" />
              <el-input v-model="input" placeholder="请输入驾驶证编号" />
            </div>
            <div class="buttons">
              <el-button>搜索</el-button>
              <el-button>重置</el-button>
            </div>
          </div>
          <div class="table">
            <tablein :data="tableData">
              <!-- <template #operation="{ data }">
                <el-link type="primary" @click="Infor(data.name)">查看</el-link>
              </template> -->
            </tablein>
          </div>
          <div class="Pagin">
            <el-pagination :current-page="currentPage4" :page-sizes="[10]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="10" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import tablein from '@/components/Table/tablein'
export default {
  components: {
    tablein
  },
  data() {
    return {
      activeName: 'first',
      tableData: {
        tableHeader: [
          {
            label: '序号',
            prop: 'cid',
            width: 50
          },
          {
            label: '警情编号',
            prop: 'number',
            width: 80
          },
          {
            label: '警情名称',
            prop: 'name',
            width: 80
          },
          {
            label: '案事件发生开始时间',
            prop: 'starttime',
            width: 80
          },
          {
            label: '巡防警情类别',
            prop: 'category',
            width: 80
          },
          {
            label: '涉案地址',
            prop: 'address',
            width: 80
          },
          {
            label: '报警人',
            prop: 'people',
            width: 80
          },
          {
            label: '处理人',
            prop: 'Handler',
            width: 80
          },
          {
            label: '数据来源（行政区划代码）',
            prop: 'sources',
            width: 80
          }
        ],
        tableList: [
          {
            cid: '1',
            number: 'JQ2020102201',
            name: '电动车碰撞',
            starttime: '20201028 10:37',
            category: '车辆',
            address: '万家丽中路',
            people: '杨丽',
            Handler: '张三',
            sources: '43100001212'
          },
          {
            cid: '1',
            number: 'JQ2020102201',
            name: '电动车碰撞',
            starttime: '20201028 10:37',
            category: '车辆',
            address: '万家丽中路',
            people: '杨丽',
            Handler: '张三',
            sources: '43100001212'
          },
          {
            cid: '1',
            number: 'JQ2020102201',
            name: '电动车碰撞',
            starttime: '20201028 10:37',
            category: '车辆',
            address: '万家丽中路',
            people: '杨丽',
            Handler: '张三',
            sources: '43100001212'
          },
          {
            cid: '1',
            number: 'JQ2020102201',
            name: '电动车碰撞',
            starttime: '20201028 10:37',
            category: '车辆',
            address: '万家丽中路',
            people: '杨丽',
            Handler: '张三',
            sources: '43100001212'
          },
          {
            cid: '1',
            number: 'JQ2020102201',
            name: '电动车碰撞',
            starttime: '20201028 10:37',
            category: '车辆',
            address: '万家丽中路',
            people: '杨丽',
            Handler: '张三',
            sources: '43100001212'
          }
        ]
      }
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
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
      .el-input {
        width: 170px;
        margin-right: 10px;
        input {
          background-color: rgba(5, 60, 67, 1);
          height: 30px;
          color: #00f3ff;
        }
      }
      .el-button {
        background-color: rgba(5, 60, 67, 1);
        border-color: rgba(121, 121, 121, 1);
        color: #00f3ff;
        width: 100px;
      }
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
