<template>
  <div class="content">
    <div class="content-title">勤务一图展示</div>
    <div class="content-map">
      <div class="map-scope">
        选择区域：<el-select v-model="value" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <el-button>搜索</el-button>
      </div>
      <div class="map">
        <pictureMap />
      </div>
    </div>

    <div class="content-query">
      <div class="query-title">
        盘查对象轨迹查询
      </div>
      <div class="query-inputs"><span class="title">人员身份证号：</span><el-input v-model="input" placeholder="请输入" /><el-button>搜索</el-button> <span class="title">车牌号：</span><el-input v-model="input" placeholder="请输入" /><el-button>搜索</el-button> <span class="title">物品编号：</span><el-input v-model="input" placeholder="请输入" /><el-button>搜索</el-button></div>
    </div>
    <div class="content-query">
      <div class="query-title">
        资源定位
      </div>
      <div class="query-inputs"><span class="title">资源编号：</span><el-input v-model="input" placeholder="请输入" /><el-button>搜索</el-button></div>
    </div>
    <div class="content-tab">
      <div class="tab-title">巡逻轨迹回放</div>
      <div class="table">
        <tablein :data="tableData">
          <template #operation="{data}">
            <el-link type="primary" @click="Infor(data.name)">查看</el-link>
          </template>
        </tablein>
      </div>
      <div class="Pagin">
        <el-pagination :current-page="currentPage4" :page-sizes="[10]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="10" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
      </div>
    </div>
  </div>
</template>

<script>
import pictureMap from './components/pictureMap'
import tablein from '@/components/Table/tablein'
export default {
  components: {
    pictureMap,
    tablein
  },
  data() {
    return {
      tableData: {
        tableHeader: [
          {
            label: '序号',
            prop: 'cid',
            width: 50
          },
          {
            label: '巡防区域',
            prop: 'scouts',
            width: 80
          },
          {
            label: '巡防排班',
            prop: 'time',
            width: 120
          },
          {
            label: '巡逻路线',
            prop: 'route',
            width: 80
          },
          {
            label: '操作',
            type: 'slot',
            width: 150,
            slotName: 'operation'
          }
        ],
        tableList: [
          {
            cid: '1',
            scouts: '万家丽广场',
            time: '2020-10-28中午第一轮',
            route: 'b路线'
          },
          {
            cid: '1',
            scouts: '万家丽广场',
            time: '2020-10-28中午第一轮',
            route: 'b路线'
          },
          {
            cid: '1',
            scouts: '万家丽广场',
            time: '2020-10-28中午第一轮',
            route: 'b路线'
          },
          {
            cid: '1',
            scouts: '万家丽广场',
            time: '2020-10-28中午第一轮',
            route: 'b路线'
          },
          {
            cid: '1',
            scouts: '万家丽广场',
            time: '2020-10-28中午第一轮',
            route: 'b路线'
          }
        ]
      }
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
  .content-map {
    width: 100%;
    height: 52%;
    .map-scope {
      width: 100%;
      height: 30px;
      color: #fff;
      .el-select {
        height: 100%;
        .el-input__inner {
          height: 100%;
          background-color: rgba(5, 60, 67, 1);
          color: #00f3ff;
        }
        .el-input {
          height: 100%;
        }
        .el-input__icon {
          line-height: 25px;
        }
      }
      .el-button {
        background-color: #053c43;
        border-color: #797979;
        color: #00f3ff;
        width: 100px;
        margin-left: 10px;
        padding: 8px 20px;
      }
    }
    .map {
      width: 100%;
      height: calc(100% - 30px);
      padding: 10px;
    }
  }
  .content-tab {
    width: 100%;
    height: 20%;
    .tab-title {
      color: #fff;
      font-size: 16px;
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
  .content-query {
    width: 100%;
    height: 10%;
    .query-title {
      color: #fff;
      font-size: 16px;
    }
    .query-inputs {
      padding-top: 10px;
      color: #fff;
      font-size: 14px;
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
        padding: 8px 20px;
      }
      .title {
        margin-left: 10px;
      }
    }
  }
}
</style>
