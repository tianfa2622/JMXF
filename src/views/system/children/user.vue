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
            <el-link v-if="data.input === 1" type="primary" @click="enable(data.name)">启用</el-link>
            <el-link v-else type="primary" @click="disable(data.name)">禁用</el-link>
            <el-link type="primary" @click="del(data.name)">删除</el-link>
          </template>
          <template #operation1="{data}">
            <el-link type="primary" class="resetBtn" @click="ResetMM(data.name)">重置</el-link>
          </template>
        </Tablein>
        <div class="Pagin">
          <el-pagination :current-page="currentPage" :page-sizes="[10, 15, 20, 15]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="10" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        </div>
      </div>
    </div>
    <el-dialog :title="title" :visible.sync="dialogShow" center width="40%">
      <Elsearch :search-settings="dialogSettings" :form-data="dialogData" />
      <p>默认密码与手机号码相同</p>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="confirm">保存</el-button>
          <el-button @click="cancel">关闭</el-button>
        </span>
      </template>
    </el-dialog>
    <el-dialog :title="deltitle" :visible.sync="delShow" center width="30%">
      <el-form v-if="deltitle === '重置密码'" ref="ruleForm" :model="ruleForm" :rules="rules" label-width="auto">
        <el-form-item label="密码" prop="pass">
          <el-input v-model="ruleForm.pass" type="password" show-password></el-input>
        </el-form-item>
      </el-form>
      <p v-else-if="deltitle === '删除'">
        确认删除该用户吗？<br />
        删除前请检查该用户是否没有添加立项数据，否则无法删除！
      </p>
      <p v-else>确认要禁用该用户吗？</p>
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
      title: '', // 弹出框标题
      deltitle: '', // 删除或上报弹出层标题
      delShow: false, // 删除或上报弹出层
      dialogShow: false, // 显示弹出框
      dialogData: {}, // 弹出框数据
      ruleForm: {}, // 重置密码数据
      rules: {}, // 重置密码规则
      // 搜索框
      searchSettings: [
        {
          placeholder: '账号状态',
          type: 'select',
          name: 'input',
          options: [
            { label: '正常', value: 1 },
            { label: '已禁用', value: 0 }
          ]
        },
        { placeholder: '请输入姓名或警号', type: 'input', name: 'input' }
      ],
      // 弹出框
      dialogSettings: [
        { label: '警号', placeholder: '请输入民警警号', type: 'input', name: 'input' },
        { label: '姓名', placeholder: '请输入用户名称', type: 'input', name: 'input' },
        { label: '联系电话', placeholder: '请输入联系电话', type: 'input', name: 'input' },
        { label: '行政区划代码', placeholder: '请输入', type: 'input', name: 'input' },
        {
          label: '所属单位',
          placeholder: '请选择',
          type: 'select',
          name: 'input',
          options: [
            { label: '科信总队', value: 0 },
            { label: '长沙市科信', value: 1 },
            { label: '治安总队', value: 2 }
          ]
        },
        {
          label: '所属角色',
          placeholder: '请选择',
          type: 'select',
          name: 'input',
          options: [
            { label: '立项单位', value: 0 },
            { label: '科信总队', value: 1 },
            { label: '警保总队', value: 2 }
          ]
        }
      ],
      // 搜索组件按钮属性
      searchBtn: [
        { name: '查询', type: 'search' },
        { name: '新增', type: 'add' }
      ],
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
            label: '姓名',
            prop: 'input'
          },
          {
            label: '警号',
            prop: 'input'
          },
          {
            label: '联系电话',
            prop: 'input'
          },
          {
            label: '所属单位',
            prop: 'input'
          },
          {
            label: '所属角色',
            prop: 'input'
          },
          {
            label: '账号状态',
            prop: 'input'
          },
          {
            label: '操作',
            type: 'slot',
            width: 150,
            slotName: 'operation'
          },
          {
            label: '密码',
            type: 'slot',
            slotName: 'operation1'
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
    },
    // 搜索按钮
    search() {},
    // 表格按钮
    modify() {
      this.title = '修改'
      this.dialogShow = true
    },
    // 禁用按钮
    disable() {
      this.deltitle = '禁用'
      this.delShow = true
    },
    // 启用按钮
    enable() {
      this.deltitle = '启用'
      this.delShow = true
    },
    // 弹出框确认按钮
    confirm() {
      this.dialogShow = false
    },
    // 弹出框取消按钮
    cancel() {
      this.dialogShow = false
    },
    // 删除
    del() {
      this.deltitle = '删除'
      this.delShow = true
    },
    // 重置密码
    ResetMM() {
      this.deltitle = '重置密码'
      this.delShow = true
    },
    // 删除或上报确认按钮
    confirmDel() {
      this.delShow = false
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
      /deep/.el-form {
        .el-form-item:first-child {
          width: 6% !important;
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
              .el-radio-group {
                .el-radio {
                  .el-radio__label {
                    color: #45f4fe !important;
                  }
                }
              }
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
</style>
