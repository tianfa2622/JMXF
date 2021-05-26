<template>
  <div class="cx_content">
    <div class="content-title">界面巡逻查控</div>
    <!-- echarts图表 -->
    <el-row type="flex" justify="space-around">
      <el-col :span="12">
        <div class="row_title">人车感知数量统计</div>
        <div class="row_echarts"><Bar></Bar></div>
      </el-col>
      <el-col :span="12">
        <div class="row_title">盘查信息反馈统计</div>
        <div class="row_echarts"><Myline></Myline></div>
      </el-col>
    </el-row>
    <!-- 人车感知识别 -->
    <div class="content_Perception">
      <span class="perception_title">人车感知识别</span>
      <div class="perception_table">
        <Tablein :data="tableData">
          <template #operation="{data}">
            <el-link type="primary" @click="Snap(data.name)">查看抓拍图片</el-link>
            <el-link type="primary" @click="feedback(data.name)">结果反馈</el-link>
          </template>
        </Tablein>
        <div class="Pagin">
          <el-pagination :current-page="currentPage" :page-sizes="[10, 15, 20, 15]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="10" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        </div>
      </div>
    </div>
    <!-- 警情预警查看 -->
    <div class="content_EarlyWarning">
      <span class="EarlyWarning_title">预警信息订阅</span>
      <div class="btn">
        <el-button type="primary" @click="Subscription">预警信息订阅</el-button>
      </div>
      <div class="EarlyWarning_table">
        <Tablein :data="tableData1"></Tablein>
        <div class="Pagin">
          <el-pagination :current-page="currentPage1" :page-sizes="[10, 15, 20, 15]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="10" @size-change="handleSizeChange1" @current-change="handleCurrentChange1" />
        </div>
      </div>
    </div>
    <el-dialog :title="title" :visible.sync="dialogShow" center width="40%">
      <el-image v-if="title === '抓拍图片'" src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg">
        <div slot="placeholder" class="image-slot">
          加载中
          <span class="dot">...</span>
        </div>
      </el-image>
      <el-form v-else ref="form" :model="dialogData" label-width="auto" :rules="{ required: true, message: '请填写', trigger: 'blur' }">
        <el-form-item label="反馈结果">
          <el-input v-model="dialogData.desc" :rows="6" resize="none" clearable type="textarea"></el-input>
        </el-form-item>
      </el-form>
      <template v-if="isBottomBtn1 === true" #footer>
        <span class="dialog-footer">
          <el-button @click="confirm">保存</el-button>
          <el-button @click="cancel">关闭</el-button>
        </span>
      </template>
    </el-dialog>
    <el-dialog :title="subscriptionTitle" :visible.sync="dialogShow2" center width="40%">
      <Elsearch :search-settings="searchSettings" :search-btn="searchBtn" :form-data="formData" @search="search" />
      <Tablein :data="tableData3" style="margin-top:10px">
        <template #operation="{data}">
          <el-link type="primary" @click="unsubscribe(data.name)">取消订阅</el-link>
        </template>
      </Tablein>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogShow2 = false">关闭</el-button>
        </span>
      </template>
    </el-dialog>
    <el-dialog :title="deltitle" class="inner_dialog_class" append-to-body :visible.sync="delShow" center width="30%">
      <p v-if="deltitle === '取消订阅'">确认要取消订阅吗？</p>
      <!-- <p v-else>确认要上报该巡逻装备吗？</p> -->
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
    Tablein,
    Elsearch
  },
  data() {
    return {
      title: '', // 弹出框标题
      dialogShow: false, // 显示弹出框
      isBottomBtn1: false, // 底部按钮显示
      subscriptionTitle: '', // 订阅弹出框标题
      dialogShow2: false, // 订阅显示弹出框
      deltitle: '', // 取消订阅弹出层标题
      delShow: false, // 显示取消订阅弹出层
      // 弹出框数据
      dialogData: {
        desc: ''
      },
      // 订阅弹出层输入框
      searchSettings: [{ label: '区域名称', placeholder: '请选择巡逻区域', type: 'select', name: 'input', options: [{ label: '测试1', value: 0 }] }],
      // 订阅弹出层按钮属性
      searchBtn: [{ name: '订阅', type: 'search' }],
      formData: { input: '' },
      // 人车感知表格数据属性
      tableData: {
        tableHeader: [
          {
            label: '序号',
            prop: 'input',
            width: 50
          },
          {
            label: '对象编号',
            prop: 'input'
          },
          {
            label: '识别类型',
            prop: 'input'
          },
          {
            label: '识别时间',
            prop: 'input'
          },
          {
            label: '记录地点',
            prop: 'input'
          },
          {
            label: '比对对象名称',
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
      // 警情预警表格数据属性
      tableData1: {
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
        tableList: Array(5).fill({
          input: '123'
        })
      },
      // 预警信息订阅表格数据属性
      tableData3: {
        tableHeader: [
          {
            label: '序号',
            prop: 'input',
            width: 50
          },
          {
            label: '区域名称',
            prop: 'input'
          },
          {
            label: '订阅时间',
            prop: 'input'
          },
          {
            label: '操作',
            type: 'slot',
            width: 60,
            slotName: 'operation'
          }
        ],
        tableList: Array(5).fill({
          input: '123'
        })
      },
      currentPage: 1, // 人车感知当前页
      currentPage1: 1 // 警情预警当前页
    }
  },
  methods: {
    // 预警信息订阅按钮
    Subscription() {
      this.subscriptionTitle = '预警信息订阅'
      this.dialogShow2 = true
    },
    // 表格按钮
    // 抓拍图片
    Snap(data) {
      this.title = '抓拍图片'
      this.dialogShow = true
      console.log(data)
    },
    // 结果反馈
    feedback() {
      this.title = '结果反馈'
      this.isBottomBtn1 = true
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
    // 取消订阅按钮
    unsubscribe() {
      this.deltitle = '取消订阅'
      this.delShow = true
    },
    // 取消订阅确认按钮
    confirmDel() {
      this.delShow = false
    },
    // 切换人车感知当前页展示条数
    handleSizeChange(val) {
      console.log(val)
    },
    // 切换警情预警当前页展示条数
    handleSizeChange1(val) {
      console.log(val)
    },
    // 切换人车感知分页
    handleCurrentChange(val) {
      console.log(val)
    },
    // 切换警情预警分页
    handleCurrentChange1(val) {
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
    font-weight: 700;
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
  .content_Perception {
    margin-top: 20px;
    .perception_title {
      display: inline-block;
      color: #fff;
      height: 30px;
      font-size: 15px;
      font-weight: 500;
      border-bottom: 1px solid #808080;
    }
    .perception_table {
      margin-top: 20px;
      width: 100%;
      /deep/ .el-table,
      .el-table__expanded-cell {
        background-color: transparent;
      }
      /deep/ .el-table tr {
        background-color: transparent !important;
      }
      /deep/ .el-table__header-wrapper .el-table__header .has-gutter tr th {
        background-color: #20505c !important;
        // background-color: transparent !important;
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
  }
  .content_EarlyWarning {
    margin-top: 20px;
    .EarlyWarning_title {
      display: inline-block;
      color: #fff;
      height: 30px;
      font-size: 14px;
      font-weight: 500;
      border-bottom: 1px solid #808080;
    }
    .btn {
      margin-top: 20px;
      margin-right: 0.2rem;
      button {
        background-color: rgba(5, 60, 67, 1);
        border-color: rgba(121, 121, 121, 1);
        color: #00f3ff;
      }
    }
    .EarlyWarning_table {
      margin-top: 20px;
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
        // color: #fff;
        color: #45f4fe;
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
.inner_dialog_class {
  /deep/.el-dialog {
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
</style>
