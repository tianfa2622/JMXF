<template>
  <div class="scouts_content">
    <div class="footage-title">巡防信息查询</div>
    <div class="content-tab">
      <Elsearch :search-settings="searchSettings" :search-btn="searchBtn" :form-data="formData" @add="add" @search="search" />
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
  </div>
</template>

<script>
import Elsearch from '@/components/search/index'
import tablein from '@/components/Table/tablein'
export default {
  components: {
    tablein,
    Elsearch
  },
  data() {
    return {
      // 搜索框
      searchSettings: [
        { placeholder: '请输入警情编号', type: 'input', name: 'input' },
        { placeholder: '请输入警情名称', type: 'input', name: 'input' },
        {
          placeholder: '请选择警情类别',
          type: 'select',
          name: 'input',
          options: [
            { label: '类型1', value: 1 },
            { label: '类型2', value: 0 }
          ]
        }
      ],
      // 搜索组件按钮属性
      searchBtn: [
        { name: '查询', type: 'search' },
        { name: '重置', type: 'reset' }
      ],
      tableData: {
        tableHeader: [
          {
            label: '序号',
            prop: 'input',
            width: 50
          },
          {
            label: '警情编号',
            prop: 'input'
          },
          {
            label: '警情名称',
            prop: 'input'
          },
          {
            label: '案事件发生开始时间',
            prop: 'input'
          },
          {
            label: '巡防警情类别',
            prop: 'input'
          },
          {
            label: '涉案地址',
            prop: 'input'
          },
          {
            label: '报警人',
            prop: 'input'
          },
          {
            label: '处理人',
            prop: 'input'
          },
          {
            label: '数据来源(行政区划代码)',
            prop: 'input'
          }
        ],
        tableList: Array(5).fill({ input: '123' })
      }
    }
  },
  methods: {
    search() {}
    // reset(){},
  }
}
</script>

<style lang="scss" scoped>
.scouts_content {
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
