<template>
  <div class="system_content">
    <div class="row-content">
      <div class="col-search">
        <Elsearch :search-settings="searchSettings" :search-btn="searchBtn" :form-data="formData" @add="add" @search="search" />
      </div>
      <div class="col-table">
        <Tablein :data="tableData">
          <template #operation="{data}">
            <el-link type="primary" @click="modify(data.name)">修改</el-link>
            <el-link type="primary" @click="subscription(data.name)">订阅详情</el-link>
          </template>
        </Tablein>
        <div class="Pagin">
          <el-pagination :current-page="currentPage" :page-sizes="[10, 15, 20, 15]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="10" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        </div>
      </div>
      <el-dialog :visible.sync="dialogFormVisible" width="40%" :title="title" center>
        <Elsearch :search-settings="dialogSearch[0]" />
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="confirm">保存</el-button>
            <el-button @click="cancel">取消</el-button>
          </span>
        </template>
      </el-dialog>
    </div>
    <el-dialog :visible.sync="dialogShow" width="60%" custom-class="dialog" title="订阅详情" center>
      <div class="l">
        <Elsearch :search-settings="dialogSearch[1]" />
      </div>
      <div class="r">
        <el-form :model="form" label-width="auto">
          <el-form-item label="操作类型">
            <el-select v-model="form.region" placeholder="请选择操作类型">
              <el-option label="订阅" value="0"></el-option>
              <el-option label="取消订阅" value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="订阅执行状态">
            <span v-if="form.region == 1" class="spancolor">未订阅</span>
            <span v-else class="spancolor">订阅</span>
          </el-form-item>
          <Elsearch v-if="form.region == 1" :search-settings="dialogSearch[2]" />
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="subscriptionConfirm">确认</el-button>
          <el-button @click="subscriptionCancel">取消</el-button>
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
      title: '',
      dialogFormVisible: false,
      dialogShow: false,
      // 弹出层属性
      dialogSearch: [
        [
          { label: '安装地点', placeholder: '请输入安装地点', type: 'input' },
          {
            label: '是否包含下级',
            type: 'radio',
            options: [
              { label: '是', value: 0 },
              { label: '否', value: 1 }
            ]
          },
          { label: '设备标识', placeholder: '请输入设备标识', type: 'input' },
          { label: '设备名称', placeholder: '请输入设备名称', type: 'input' },
          { label: '设备生产商名称', placeholder: '请输入设备生产商名称', type: 'input' },
          { label: '设备型号', placeholder: '请输入设备型号', type: 'input' },
          {
            label: '设备类型',
            placeholder: '请输入设备类型',
            type: 'select',
            options: [
              { label: '智能分析仪', value: 0 },
              { label: '智能安检机', value: 1 },
              { label: '其他', value: 2 }
            ]
          },
          {
            label: '应用场景',
            placeholder: '请输入应用场景',
            type: 'select',
            options: [
              { label: '公安检查站', value: 0 },
              { label: '火车站', value: 1 },
              { label: '汽车站', value: 2 }
            ]
          },
          { label: '地球经度', placeholder: '请输入地球经度', type: 'input' },
          { label: '地球纬度', placeholder: '请输入地球纬度', type: 'input' }
        ],
        [
          { label: '订阅标题', placeholder: '请输入订阅标题', type: 'input' },
          { label: '订阅类别', placeholder: '请输入订阅类别', type: 'input' },
          { label: '订阅资源路径', placeholder: '请输入订阅资源路径', type: 'input' },
          {
            label: '申请人姓名',
            placeholder: '请输入申请人姓名',
            type: 'select',
            options: [
              { label: '张三', value: 0 },
              { label: '张三', value: 1 },
              { label: '张三', value: 2 }
            ]
          },
          {
            label: '申请人单位名称',
            placeholder: '请输入申请人单位名称',
            type: 'select',
            options: [
              { label: '岳麓区公安局', value: 0 },
              { label: '天心区公安局', value: 1 },
              { label: '张三', value: 2 }
            ]
          },
          { label: '开始时间', type: 'data' },
          { label: '结束时间', type: 'data' },
          { label: '信息接收地址', placeholder: '请输入信息接收地址', type: 'input' },
          { label: '信息上报间隔时间', placeholder: '请输入信息上报间隔时间', type: 'input' },
          { label: '理由', placeholder: '请输入订阅理由', type: 'textarea' }
        ],
        [
          {
            label: '订阅取消单位',
            placeholder: '请输入订阅取消单位',
            type: 'select',
            options: [
              { label: '岳麓区公安局', value: 0 },
              { label: '天心区公安局', value: 1 },
              { label: '张三', value: 2 }
            ]
          },
          {
            label: '订阅取消人',
            placeholder: '请输入订阅取消人',
            type: 'select',
            options: [
              { label: '张三', value: 0 },
              { label: '张三', value: 1 },
              { label: '张三', value: 2 }
            ]
          },
          { label: '取消时间', type: 'data' },
          { label: '取消原因', placeholder: '请输入取消原因', type: 'textarea' }
        ]
      ],
      // 搜索框
      searchSettings: [
        { placeholder: '请输入安装地点', type: 'input', name: 'input' },
        { placeholder: '请输入设备标识', type: 'input', name: 'input' },
        { placeholder: '请输入设备名称', type: 'input', name: 'input' }
      ],
      // 搜索组件按钮属性
      searchBtn: [
        { name: '查询', type: 'search' },
        { name: '注册', type: 'add' }
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
            label: '安装地点',
            prop: 'input'
          },
          {
            label: '是否包含下级',
            prop: 'input'
          },
          {
            label: '设备标识',
            prop: 'input'
          },
          {
            label: '设备生产商名称',
            prop: 'input'
          },
          {
            label: '设备型号',
            prop: 'input'
          },
          {
            label: '设备类型',
            prop: 'input'
          },
          {
            label: '应用场景',
            prop: 'input'
          },
          {
            label: '地球经度',
            prop: 'input'
          },
          {
            label: '地球纬度',
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
    // 注册按钮
    add() {
      this.title = '注册'
      this.dialogFormVisible = true
    },
    // 搜索按钮
    search() {},
    // 表格按钮
    modify(data) {
      console.log(data)
      this.title = '修改'
      this.dialogFormVisible = true
    },
    // 弹出框确认按钮
    confirm() {
      this.dialogFormVisible = false
    },
    // 弹出框取消按钮
    cancel() {
      this.dialogFormVisible = false
    },
    // 订阅详情
    subscription() {
      this.dialogShow = true
    },
    // 订阅详情确定按钮
    subscriptionConfirm() {
      this.dialogShow = false
    },
    // 订阅详情取消按钮
    subscriptionCancel() {
      this.dialogShow = false
    },
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
    .dialog {
      .el-dialog__header {
        background-color: #0d2e36 !important;
        border-bottom: 1px solid #20505c;
        .el-dialog__title {
          color: #ffffff !important;
        }
      }
      .el-dialog__body {
        display: flex;
        background-color: #0d2e36 !important;
        justify-content: space-between;
        .l,
        .r {
          width: 50%;
          .spancolor {
            color: #45f4fe;
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
        // .l {
        //   .searchCom {
        //     .el-form {
        //       .el-form-item {
        //         width: 80%;
        //       }
        //     }
        //   }
        // }
        // .r {
        //   .el-form {
        //     margin-top: 0.2rem;
        //     .searchCom,
        //     .searchCom > .el-form {
        //       margin: 0;
        //     }
        //     .el-form-item {
        //       width: 80% !important;
        //       .el-form-item__label-wrap {
        //         .el-form-item__label {
        //           color: #fff;
        //         }
        //       }
        //       .el-form-item__content {
        //         span {
        //           color: #fff;
        //         }
        //         .el-select {
        //           width: 90%;
        //           .el-input {
        //             width: 100%;
        //             input {
        //               background-color: #072e37;
        //               color: #fff;
        //               border-width: 2px;
        //               border-style: inset;
        //               border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
        //             }
        //             input::placeholder {
        //               color: #00f3ff;
        //             }
        //           }
        //         }
        //       }
        //     }
        //   }
        // }
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
