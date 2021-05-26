<template>
  <div class="cx_content">
    <div class="content-title">巡防预案管理</div>
    <el-row type="flex" justify="space-around">
      <el-col :span="12">
        <div class="row_title">区域巡防预案统计</div>
        <div class="row_echarts"><Bar></Bar></div>
      </el-col>
      <el-col :span="12">
        <div class="row_title">巡防预案类型比例统计</div>
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
          <el-link type="primary" @click="report(data.name)">预案上报</el-link>
        </template>
      </Tablein>
      <div class="Pagin">
        <el-pagination :current-page="currentPage" :page-sizes="[10, 15, 20, 15]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="10" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
      </div>
    </div>
    <el-dialog :title="title" width="35%" :visible.sync="dialogFormVisible">
      <el-form :model="dialogForm" label-width="auto" :disabled="disabled" :rules="rules">
        <el-form-item label="预案名称" prop="name">
          <el-input v-model="dialogForm.name" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="关键词" prop="name">
          <el-input v-model="dialogForm.name" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="简要情况" prop="name">
          <el-input v-model="dialogForm.name" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="详细情况" prop="name">
          <el-input v-model="dialogForm.name" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="行政区划代码" prop="name">
          <el-input v-model="dialogForm.name" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="上传民警姓名" prop="name">
          <el-input v-model="dialogForm.name" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="上传民警编号" prop="name">
          <el-input v-model="dialogForm.name" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="电子文件URL" prop="name">
          <el-input v-model="dialogForm.name" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-row type="flex" justify="space-around">
            <el-col v-if="title !== '详情'" :span="8">
              <el-button>上传预案</el-button>
            </el-col>
            <el-col :span="8">
              <el-button>下载预案</el-button>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
      <div v-if="title !== '详情'" slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirm">保 存</el-button>
        <el-button @click="cancel">关 闭</el-button>
      </div>
    </el-dialog>
    <el-dialog :title="deltitle" :visible.sync="delShow" center width="30%">
      <p v-if="deltitle === '删除'">确认要删除选中内容吗？删除后数据不可恢复哦！！</p>
      <p v-else>确认要上报该巡防预案吗？</p>
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
      title: '', // 弹出层标题
      deltitle: '',
      delShow: false,
      dialogFormVisible: false, // 是否显示弹出层
      disabled: false, // 弹出层是否只读
      dialogForm: {}, // 弹出层数据
      rules: {}, // 弹出层规则
      // 搜索框
      searchSettings: [
        { placeholder: '请输入预案名称', type: 'input', name: 'input' },
        { placeholder: '请输入上传民警姓名', type: 'input', name: 'input' },
        { placeholder: '请输入上传民警编号', type: 'input', name: 'input' },
        { placeholder: '请输入行政区划代码', type: 'input', name: 'input', options: [] }
      ],
      // 搜索组件按钮属性
      searchBtn: [
        { name: '查询', type: 'search' },
        { name: '重置', type: 'reset' },
        { name: '添加', type: 'add' }
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
            label: '预案名称',
            prop: 'input'
          },
          {
            label: '预案类别',
            prop: 'input'
          },
          {
            label: '关键词',
            prop: 'input'
          },
          {
            label: '行政区划代码',
            prop: 'input'
          },
          {
            label: '上传民警姓名',
            prop: 'input'
          },
          {
            label: '上传民警编号',
            prop: 'input'
          },
          {
            label: '录入时间',
            prop: 'input'
          },
          {
            label: '是否上报',
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
      this.title = '新增'
      this.dialogFormVisible = true
    },
    // 搜索按钮
    search() {},
    // 重置按钮
    reset() {
      Object.assign(this.$data.formData, this.$options.data().formData)
    },
    // 详情按钮
    details() {
      this.title = '详情'
      this.dialogFormVisible = true
    },
    // 修改按钮
    modify() {
      this.title = '修改'
      this.dialogFormVisible = true
    },
    // 弹出层确定按钮
    confirm() {
      this.dialogFormVisible = false
    },
    // 弹出层取消按钮
    cancel() {
      this.dialogFormVisible = false
    },
    // 上报按钮
    report() {
      this.deltitle = '上报'
      this.delShow = true
    },
    // 删除
    del() {
      this.deltitle = '删除'
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
              .el-button {
                padding: 12px 40px;
                background-color: #0e3c42;
                color: #3fdee7;
                border-color: #797979;
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
          text-align: center;
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
