<template>
  <div class="cx_content">
    <div class="content-title">跨域协助查控</div>
    <el-row type="flex" justify="space-around">
      <el-col :span="12">
        <div class="row_title">跨域查控数量统计</div>
        <div class="row_echarts"><Bar></Bar></div>
      </el-col>
      <el-col :span="12">
        <div class="row_title">查控反馈比例统计</div>
        <div class="row_echarts"><Myline></Myline></div>
      </el-col>
    </el-row>
    <div class="cx_content_search">
      <Elsearch :search-settings="searchSettings" :search-btn="searchBtn" :form-data="formData" @add="add" @search="search" @reset="reset" />
    </div>
    <div class="cx_content_table">
      <Tablein :data="tableData">
        <template #operation="{data}">
          <el-link type="primary" @click="details(data.name)">详情</el-link>
          <el-link type="primary" @click="modify(data.name)">修改</el-link>
          <el-link type="primary" @click="del(data.name)">删除</el-link>
          <el-link type="primary" @click="revoke(data.name)">撤销申请</el-link>
          <el-link type="primary" @click="feedback(data.name)">结果反馈</el-link>
        </template>
      </Tablein>
      <div class="Pagin">
        <el-pagination :current-page="currentPage" :page-sizes="[10, 15, 20, 15]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="10" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
      </div>
    </div>
    <el-dialog :title="title" :visible.sync="dialogShow" center width="40%">
      <Elsearch v-if="title !== '结果反馈'" :search-settings="dialogSettings" :form-data="dialogData" />
      <el-form v-else ref="form" :model="dialogDatas" label-width="auto" :rules="{ required: true, message: '请填写', trigger: 'blur' }">
        <el-form-item label="反馈结果">
          <el-input v-model="dialogData.desc" :rows="6" resize="none" clearable type="textarea"></el-input>
        </el-form-item>
      </el-form>
      <template v-if="isBottomBtn === true" #footer>
        <span class="dialog-footer">
          <el-button @click="confirm">保存</el-button>
          <el-button @click="cancel">关闭</el-button>
        </span>
      </template>
    </el-dialog>
    <el-dialog :title="deltitle" class="inner_dialog_class" :visible.sync="delShow" center width="30%">
      <p v-if="deltitle === '删除'">确认要删除选中内容吗？删除后数据不可恢复哦！！</p>
      <p v-else>确认要撤销申请吗？</p>
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
import Bar from './components/InquiryObject/bar'
import Myline from './components/InquiryObject/line.vue'
import Elsearch from '@/components/search/index'
import Tablein from '@/components/Table/tablein.vue'
export default {
  components: {
    Bar,
    Myline,
    Elsearch,
    Tablein
  },
  data() {
    return {
      title: '', // 弹出框标题
      dialogShow: false, // 显示弹出框
      isBottomBtn: false, // 底部按钮显示
      deltitle: '', // 删除/撤销申请弹出层标题
      delShow: false, // 显示删除/撤销申请弹出层
      // 弹出框反馈数据
      dialogDatas: {
        desc: ''
      },
      // 弹出框数据
      dialogData: {
        input: ''
      },
      // 订阅弹出层输入框
      dialogSettings: [
        { label: '对象名称', placeholder: '请输入', type: 'input', name: 'input' },
        { label: '布控类型', placeholder: '请选择', type: 'select', name: 'input', options: [{ label: '测试1', value: 0 }] },
        { label: '布控时间', type: 'data', name: 'input' },
        { label: '申请地点', placeholder: '请输入', type: 'input', name: 'input' }
      ],
      // 搜索框
      searchSettings: [
        { placeholder: '请输入对象名称', type: 'input', name: 'input' },
        { placeholder: '请输入布控类型', type: 'input', name: 'input' }
      ],
      // 搜索组件按钮属性
      searchBtn: [
        { name: '查询', type: 'search' },
        { name: '重置', type: 'reset' },
        { name: '申请协助', type: 'add' }
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
            label: '对象名称',
            prop: 'input'
          },
          {
            label: '布控类型',
            prop: 'input'
          },
          {
            label: '布控时间',
            prop: 'input'
          },
          {
            label: '申请地点',
            prop: 'input'
          },
          {
            label: '是否申请',
            prop: 'input'
          },
          {
            label: '操作',
            type: 'slot',
            width: 150,
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
      this.title = '申请协助'
      this.dialogShow = true
      this.isBottomBtn = true
    },
    // 搜索按钮
    search() {},
    // 重置按钮
    reset() {
      Object.assign(this.$data.formData, this.$options.data().formData)
    },
    // 表格按钮
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
      this.deltitle = '删除'
      this.delShow = true
    },
    // 撤销按钮
    revoke() {
      this.deltitle = '撤销申请'
      this.delShow = true
    },
    // 结果反馈
    feedback() {
      this.title = '结果反馈'
      this.isBottomBtn = true
      this.dialogShow = true
    },
    // 弹出框确认按钮
    confirm() {
      this.dialogShow = false
    },
    // 弹出框取消按钮
    cancel() {
      this.dialogShow = false
    },
    // 删除或撤销确认按钮
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
.cx_content {
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
  .row_title {
    color: #ffffff;
    font-size: 14px;
    text-align: center;
    height: 30px;
  }
  .row_echarts {
    width: 100%;
    height: calc(100% - 30px);
  }
  .cx_content_search {
    margin: 10px 0 20px 0;
  }
  .cx_content_table {
    width: 100%;
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
    .el-link {
      margin-left: 20px;
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
</style>
