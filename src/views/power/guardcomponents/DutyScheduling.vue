<template>
  <div class="Duty_content">
    <div class="row-content">
      <div class="col-search">
        <Elsearch :search-settings="searchSettings" :search-btn="searchBtn" :form-data="formData" @add="add" @search="search" @reset="reset" />
        <div class="Elsearch_btn">
          <el-button>导入</el-button>
          <el-button>导出</el-button>
        </div>
      </div>
      <div class="col-table">
        <Tablein :data="tableData">
          <template #operation="{data}">
            <el-link type="primary" @click="details(data.name)">详情</el-link>
            <el-link type="primary" @click="modify(data.name)">修改</el-link>
            <el-link type="primary" @click="del(data.name)">删除</el-link>
          </template>
        </Tablein>
        <div class="Pagin">
          <el-pagination :current-page="currentPage" :page-sizes="[10, 15, 20, 15]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="10" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        </div>
      </div>
    </div>
    <el-dialog :title="title" :visible.sync="dialogShow" :modal-append-to-body="false" center width="60%">
      <Elsearch :search-settings="dialogSettings" :form-data="dialogData" :disabled="disable" />
      <template v-if="isBottomBtn === true" #footer>
        <span class="dialog-footer">
          <el-button @click="confirm">保存</el-button>
          <el-button @click="cancel">关闭</el-button>
        </span>
      </template>
    </el-dialog>
    <el-dialog title="删除" :visible.sync="delShow" :modal-append-to-body="false" center width="30%">
      <p>确认要删除选中内容吗？删除后数据不可恢复哦！！</p>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="confirmDel">确认</el-button>
          <el-button @click="delShow = false">取消</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import Elsearch from '@/components/search/index'
import Tablein from '@/components/Table/tablein.vue'
export default {
  components: { Elsearch, Tablein },
  data() {
    return {
      disable: false, // 输入框只读
      isBottomBtn: false, // 底部按钮显示
      title: '', // 弹出框标题
      delShow: false, // 删除或撤销弹出层
      dialogShow: false, // 显示弹出框
      dialogData: {}, // 弹出框数据
      // 弹出框
      dialogSettings: [
        { label: '巡逻排班名称', placeholder: '请输入', type: 'input', name: 'input' },
        { label: '警员编号', placeholder: '请输入', type: 'input', name: 'input' },
        { label: '姓名', placeholder: '请输入', type: 'input', name: 'input' },
        { label: '公安机关名称', placeholder: '请输入', type: 'input', name: 'input' },
        { label: '巡逻区域名称', placeholder: '请输入', type: 'input', name: 'input' },
        { label: '巡逻路线', placeholder: '请输入', type: 'input', name: 'input' },
        { label: '开始时间', type: 'data', name: 'input' },
        { label: '结束时间', type: 'data', name: 'input' }
      ],
      // 搜索框
      searchSettings: [
        { placeholder: '请输入巡逻区域名称', type: 'input', name: 'input' },
        { placeholder: '请输入警员编号', type: 'input', name: 'input' },
        { placeholder: '请输入警员姓名', type: 'input', name: 'input' },
        { placeholder: '请输入公安机关名称', type: 'input', name: 'input' }
      ],
      // 搜索组件按钮属性
      searchBtn: [
        { name: '搜索', type: 'search' },
        { name: '重置', type: 'reset' },
        { name: '添加', type: 'add' }
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
            label: '巡区排班名称',
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
            label: '巡逻区域名称',
            prop: 'input'
          },
          {
            label: '开始时间',
            prop: 'input'
          },
          {
            label: '结束时间',
            prop: 'input'
          },
          {
            label: '操作',
            type: 'slot',
            width: '150',
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
    // 添加按钮
    add() {
      this.title = '新增'
      this.dialogShow = true
      this.isBottomBtn = true
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
    },
    // 详情按钮
    details() {
      this.title = '详情'
      this.dialogShow = true
      this.isBottomBtn = false
    },
    // 修改按钮
    modify() {
      this.title = '修改'
      this.dialogShow = true
      this.isBottomBtn = true
    },
    // 删除按钮
    del() {
      this.delShow = true
    },
    // 删除确认按钮
    confirmDel() {
      this.delShow = false
    },
    // 弹出框确认按钮
    confirm() {
      this.dialogShow = false
    },
    // 弹出框取消按钮
    cancel() {
      this.dialogShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
.Duty_content {
  width: 100%;
  height: 100%;
  background-color: transparent;
  .row-content {
    display: flex;
    flex-direction: column;
    .col-search {
      width: 100%;
      .Elsearch_btn {
        margin-top: 20px;
        // margin-bottom: 10px;
        width: 100%;
        button {
          width: 100px;
          margin-left: 10px;
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
    /deep/.el-dialog__wrapper {
      .el-dialog {
        .el-dialog__header {
          background-color: #0d2e36 !important;
          border-bottom: 1px solid #20505c;
          .el-dialog__title {
            color: #ffffff !important;
          }
        }
        .el-dialog__body {
          background-color: #0d2e36 !important;
          p {
            color: #fff;
            text-align: center;
          }
          .el-form {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            height: auto;
            .el-form-item {
              width: 80% !important;
              margin-right: 20px;
              margin-bottom: 10px;
              .el-form-item__label {
                color: #fff;
              }
              .el-form-item__content {
                width: auto;
              }
            }
            .btn {
              .el-button {
                padding: 12px 30px;
              }
            }
          }
        }
        .el-dialog__footer {
          background-color: #0d2e36 !important;
          .dialog-footer {
            .el-button {
              padding: 12px 40px;
              background-color: #0e3c42;
              color: #3fdee7;
              border-color: #797979;
            }
          }
        }
      }
    }
  }
  /deep/.el-dialog__wrapper {
    .el-dialog {
      .el-dialog__header {
        background-color: #0d2e36 !important;
        border-bottom: 1px solid #20505c;
        .el-dialog__title {
          color: #ffffff !important;
        }
      }
      .el-dialog__body {
        background-color: #0d2e36 !important;
        p {
          color: #fff;
        }
        .el-form {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          height: auto;
          .el-form-item {
            width: 80% !important;
            margin-right: 0;
            margin-bottom: 10px;
            .el-form-item__label {
              color: #fff;
            }
            .el-form-item__content {
              width: auto;
            }
          }
        }
      }
      .el-dialog__footer {
        background-color: #0d2e36 !important;
        .dialog-footer {
          .el-button {
            padding: 12px 40px;
            background-color: #0e3c42;
            color: #3fdee7;
            border-color: #797979;
          }
        }
      }
    }
  }
}
</style>
