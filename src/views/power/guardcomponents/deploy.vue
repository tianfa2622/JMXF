<template>
  <div class="deploy_content">
    <div class="row-content">
      <div class="col-search">
        <Elsearch :search-settings="searchSettings" :search-btn="searchBtn" :form-data="formData" @search="search" @reset="reset" />
      </div>
      <div class="col-table">
        <Tablein :data="tableData">
          <template #operation="{data}">
            <el-link type="primary" @click="deploy(data.name)">部署</el-link>
          </template>
        </Tablein>
        <div class="Pagin">
          <el-pagination :current-page="currentPage" :page-sizes="[10, 15, 20, 15]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="10" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        </div>
      </div>
    </div>
    <!-- <el-dialog title="删除" :visible.sync="delShow" center width="30%">
      <p>确认要删除选中内容吗？删除后数据不可恢复哦！！</p>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="confirmDel">确认</el-button>
          <el-button @click="delShow = false">取消</el-button>
        </span>
      </template>
    </el-dialog> -->
  </div>
</template>

<script>
import Elsearch from '@/components/search/index'
import Tablein from '@/components/Table/tablein.vue'

export default {
  components: { Elsearch, Tablein },
  data() {
    return {
      // disable: false, // 输入框只读
      // title: '', // 弹出框标题
      // delShow: false, // 删除或撤销弹出层
      // dialogShow: false, // 显示弹出框
      // 搜索框
      searchSettings: [
        { placeholder: '请输入警员编号', type: 'input', name: 'input' },
        { placeholder: '请输入警员姓名', type: 'input', name: 'input' },
        { placeholder: '请输入公安机关名称', type: 'input', name: 'input' }
      ],
      // 搜索组件按钮属性
      searchBtn: [
        { name: '搜索', type: 'search' },
        { name: '重置', type: 'reset' }
      ],
      form: {},
      formData: { input: '' },
      // 表格数据属性
      tableData: {
        tableHeader: [
          {
            label: '序号',
            prop: 'input'
          },
          {
            label: '警员编号',
            prop: 'input'
          },
          {
            label: '姓名',
            prop: 'input'
          },
          {
            label: '公安机关名称',
            prop: 'input'
          },
          {
            label: '部署时间',
            prop: 'input'
          },
          {
            label: '操作',
            type: 'slot',
            slotName: 'operation'
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
    // 部署按钮
    deploy() {
      console.log(1)
      // this.title = '部署'
      // this.dialogShow = true
    },
    // 搜索按钮
    search() {},
    // 重置按钮
    reset() {
      Object.assign(this.$data.formData, this.$options.data().formData)
    },
    // 切换当前页展示条数
    handleSizeChange(val) {
      console.log(val)
    },
    // 切换分页
    handleCurrentChange(val) {
      console.log(val)
    }
    // // 删除确认按钮
    // confirmDel() {
    //   this.delShow = false
    // },
    // // 弹出框取消按钮
    // cancel() {
    //   this.dialogShow = false
    // }
  }
}
</script>

<style lang="scss" scoped>
.deploy_content {
  width: 100%;
  height: 100%;
  background-color: transparent;
  .row-content {
    display: flex;
    flex-direction: column;
    .col-search {
      width: 100%;
      .Elsearch_btn {
        margin-bottom: 10px;
        width: 100%;
        button {
          width: 100px;
          margin-left: 20px;
          background-color: rgba(5, 60, 67, 1);
          border-color: rgba(121, 121, 121, 1);
          color: #00f3ff;
        }
      }
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
  // /deep/.el-dialog__wrapper {
  //   .el-dialog {
  //     .el-dialog__header {
  //       background-color: #0d2e36 !important;
  //       border-bottom: 1px solid #20505c;
  //       .el-dialog__title {
  //         color: #ffffff !important;
  //       }
  //     }
  //     .el-dialog__body {
  //       background-color: #0d2e36 !important;
  //       p {
  //         color: #fff;
  //       }
  //       .el-form {
  //         display: flex;
  //         flex-wrap: wrap;
  //         justify-content: center;
  //         height: auto;
  //         .el-form-item {
  //           width: 80% !important;
  //           margin-right: 0;
  //           margin-bottom: 10px;
  //           .el-form-item__label {
  //             color: #fff;
  //           }
  //           .el-form-item__content {
  //             width: auto;
  //           }
  //         }
  //       }
  //     }
  //     .el-dialog__footer {
  //       background-color: #0d2e36 !important;
  //       .dialog-footer {
  //         .el-button {
  //           padding: 12px 40px;
  //           background-color: #0e3c42;
  //           color: #3fdee7;
  //           border-color: #797979;
  //         }
  //       }
  //     }
  //   }
  // }
}
</style>
