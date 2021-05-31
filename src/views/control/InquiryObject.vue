<template>
  <div class="cx_content">
    <div class="content-title">盘查对象管理</div>
    <el-row type="flex" justify="space-around">
      <el-col :span="12">
        <div class="row_title">盘查对象分类统计</div>
        <div class="row_echarts"><Bar></Bar></div>
      </el-col>
      <el-col :span="12">
        <div class="row_title">每月重点对象上报统计</div>
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
          <el-link type="primary" @click="report(data.name)">对象上报</el-link>
        </template>
      </Tablein>
      <div class="Pagin">
        <el-pagination :current-page="currentPage" :page-sizes="[10, 15, 20, 15]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="10" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
      </div>
      <el-dialog :title="title" :visible.sync="dialogFormVisible" class="dialog_form">
        <el-form :model="form" :disabled="disable" :rules="rules" label-width="auto">
          <div class="form_left">
            <el-form-item label="人员姓名" :prop="name">
              <el-input v-model="form.name" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="公民身份号码" :prop="name">
              <el-input v-model="form.name" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="年龄" :prop="name">
              <el-input v-model="form.name" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="民族" :prop="name">
              <el-input v-model="form.name" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="单位地址" :prop="name">
              <el-input v-model="form.name" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="性别" :prop="name">
              <el-select v-model="form.name" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="地址名称" :prop="name">
              <el-input v-model="form.name" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="事由" :prop="name">
              <el-input v-model="form.name" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="交通工具类型" :prop="name">
              <el-select v-model="form.name" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="盘查原因" :prop="name">
              <el-input v-model="form.name" placeholder="请输入"></el-input>
            </el-form-item>
          </div>
          <div class="form_right" :prop="name">
            <el-form-item label="行政区划代码">
              <el-input v-model="form.name" placeholder="请输入"></el-input>
            </el-form-item>
            <div class="form_border">
              <p class="form_p_color">巡逻民警</p>
              <el-form-item label="警员编号" :prop="name">
                <el-input v-model="form.name" placeholder="请输入"></el-input>
              </el-form-item>
              <el-form-item label="警员姓名" :prop="name">
                <el-input v-model="form.name" placeholder="请输入"></el-input>
              </el-form-item>
              <el-form-item label="随同民警编号" :prop="name">
                <el-input v-model="form.name" placeholder="请输入"></el-input>
              </el-form-item>
              <el-form-item label="协警人数" :prop="name">
                <el-input v-model="form.name" placeholder="请输入"></el-input>
              </el-form-item>
              <el-form-item label="公安机关名称" :prop="name">
                <el-input v-model="form.name" placeholder="请输入"></el-input>
              </el-form-item>
            </div>
            <el-form-item label="是否上报" :prop="name">
              <el-radio-group v-model="form.name" class="form_radio">
                <el-radio :label="0">未上报</el-radio>
                <el-radio :label="1">已上报</el-radio>
              </el-radio-group>
            </el-form-item>
          </div>
        </el-form>
        <div v-if="isBottomBtn" slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
      <el-dialog :title="deltitle" :visible.sync="delShow" center width="30%">
        <p v-if="deltitle === '删除'">确认要删除选中内容吗？删除后数据不可恢复哦！！</p>
        <p v-else>确认要上报该对象吗？</p>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="confirmDel">确认</el-button>
            <el-button @click="delShow = false">取消</el-button>
          </span>
        </template>
      </el-dialog>
    </div>
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
      title: '',
      deltitle: '',
      disabled: false, // 弹出层输入框禁用
      delShow: false,
      dialogFormVisible: false, // 是否弹出弹出框
      isBottomBtn: false, // 弹出层底部按钮
      options: [
        { label: '男', value: 1 },
        { label: '女', value: 0 }
      ],
      form: {
        name: null
      },
      // 规则
      rules: {
        name: []
      },
      // 搜索框
      searchSettings: [
        { placeholder: '请输入人员', type: 'input', name: 'input' },
        { placeholder: '请输入警员编号', type: 'input', name: 'input' },
        { placeholder: '请输入警员姓名', type: 'input', name: 'input' },
        { placeholder: '请输入行政区划代码', type: 'input', name: 'input' }
      ],
      // 搜索组件按钮属性
      searchBtn: [
        { name: '查询', type: 'search' },
        { name: '重置', type: 'reset' },
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
            label: '编号',
            prop: 'input'
          },
          {
            label: '盘查人员',
            prop: 'input'
          },
          {
            label: '警员编号',
            prop: 'input'
          },
          {
            label: '警员姓名',
            prop: 'input'
          },
          {
            label: '行政区划代码',
            prop: 'input'
          },
          {
            label: '公安机关',
            prop: 'input'
          },
          {
            label: '协警人数',
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
      this.isBottomBtn = false
      this.dialogFormVisible = true
    },
    // 修改按钮
    modify() {
      this.title = '修改'
      this.isBottomBtn = true
      this.dialogFormVisible = true
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
    /deep/.el-table,
    .el-table__expanded-cell {
      background-color: transparent;
    }
    /deep/.el-table tr {
      background-color: transparent !important;
    }
    /deep/.el-table__header-wrapper .el-table__header .has-gutter tr th {
      // background-color: transparent !important;
      background-color: #20505c !important;
      color: #fff;
    }
    /deep/.el-table--enable-row-transition .el-table__body td,
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
      /deep/.el-pagination__total {
        color: #fff;
      }
      /deep/.el-pagination__jump {
        color: #fff;
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
          padding-bottom: 10px;
          p {
            color: #fff;
          }
          .el-form {
            display: flex;
            justify-content: space-between;
            height: auto;
            .form_left {
              width: 50%;
              .el-form-item {
                width: 70% !important;
                margin-right: 0;
                margin-bottom: 10px;
                /deep/.el-form-item__label {
                  color: #fff;
                }
                /deep/.el-form-item__content {
                  width: auto;
                }
              }
            }
            .form_right {
              width: 50%;
              .el-form-item {
                width: 70% !important;
                margin-right: 0;
                margin-bottom: 10px;
                /deep/.el-form-item__label {
                  color: #fff;
                }
                /deep/.el-form-item__content {
                  width: auto;
                }
              }
              .form_p_color {
                color: #fa9728;
                margin-bottom: 10px;
              }
              .form_border {
                border: 1px solid #2b444b;
                background-color: rgba(0, 0, 0, 0.2);
                padding: 10px 10px;
                border-radius: 4px;
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
}
</style>
