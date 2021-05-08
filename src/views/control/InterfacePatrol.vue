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
            <el-link type="primary" @click="Infor(data.name)">查看抓拍图片</el-link>
            <el-link type="primary" @click="Infor(data.name)">结果反馈</el-link>
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
  </div>
</template>

<script>
import Bar from './components/InquiryObject/bar'
import Myline from './components/InquiryObject/line.vue'
import Tablein from '@/components/Table/tablein.vue'
export default {
  components: {
    Bar,
    Myline,
    Tablein
  },
  data() {
    return {
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
      currentPage: 1, // 人车感知当前页
      currentPage1: 1 // 警情预警当前页
    }
  },
  methods: {
    // 预警信息订阅按钮
    Subscription() {},
    // 表格按钮
    Infor(data) {
      console.log(data)
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
}
</style>
