<template>
  <div class="system_content">
    <div class="row-content">
      <div class="col-search">
        <Elsearch :search-settings="searchSettings" :search-btn="searchBtn" :form-data="formData" @search="search" />
      </div>
      <div class="col-table">
        <Tablein :data="tableData"></Tablein>
        <div class="Pagin">
          <el-pagination :current-page="currentPage" :page-sizes="[10, 15, 20, 15]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="10" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Elsearch from '@/components/search/index'
import Tablein from '@/components/Table/tablein.vue'
export default {
  components: { Elsearch, Tablein },
  data() {
    return {
      // 搜索框
      searchSettings: [{ placeholder: '请输入账号或操作内容进行查询', type: 'input', name: 'input' }],
      // 搜索组件按钮属性
      searchBtn: [{ name: '查询', type: 'search' }],
      formData: { input: '' },
      // 表格数据属性
      tableData: {
        tableHeader: [
          {
            label: '序号',
            prop: 'input',
            width: 50
          },
          {
            label: '账号',
            prop: 'input'
          },
          {
            label: '机构名称',
            prop: 'input'
          },
          {
            label: 'IP地址',
            prop: 'input'
          },
          {
            label: '操作内容',
            prop: 'input'
          },
          {
            label: '操作时间',
            prop: 'input'
          }
        ],
        tableList: Array(5).fill({
          input: '123'
        })
      },
      currentPage: 1
    }
  },
  methods: {
    // 搜索按钮
    search() {},
    // 切换当前页展示条数
    handleSizeChange(val) {
      console.log(val)
    },
    // 切换分页
    handleCurrentChange(val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss" scoped>
.system_content {
  width: 100%;
  height: 100%;
  background-color: transparent;
  .row-content {
    display: flex;
    flex-direction: column;
    .col-search {
      width: 100%;
    }
    .col-table {
      margin-top: 20px;
      width: 100%;
      height: calc(100% - 20px);
      /deep/ .el-table,
      .el-table__expanded-cell {
        background-color: transparent;
      }
      /deep/ .el-table tr {
        background-color: transparent !important;
      }
      /deep/ .el-table__header-wrapper .el-table__header .has-gutter tr th {
        // background-color: transparent !important;
        background-color: #20505c !important;
        color: #fff;
      }
      /deep/ .el-table--enable-row-transition .el-table__body td,
      .el-table .cell {
        background-color: transparent;
        color: #45f4fe;
        // color: #fff;
      }
      .el-link:nth-child(n + 2) {
        margin-left: 20px;
      }
      .resetBtn {
        margin-left: 0px !important;
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
}
</style>
