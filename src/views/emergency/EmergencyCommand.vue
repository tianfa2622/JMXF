<template>
  <div class="cx_content">
    <div class="content-title">应急指挥提示</div>
    <el-row type="flex" class="row_box" justify="space-around">
      <el-col :span="10">
        <div class="row_title">预测警情登记统计</div>
        <div class="row_echarts"><Pie></Pie></div>
      </el-col>
      <el-col :span="10">
        <div class="row_title">每月预测警情风险数量统计</div>
        <div class="row_echarts"><Myline></Myline></div>
      </el-col>
    </el-row>
    <el-row type="flex" justify="space-around" class="content-table">
      <el-col :span="11">
        <span class="table_title">警情级别提示栏</span>
        <div class="row_table">
          <Tablein :data="tableData" :table-row-class-name="tableRowClassName" />
        </div>
      </el-col>
      <el-col :span="11">
        <span class="table_title">警情风险提示栏</span>
        <div class="row_table">
          <Tablein :data="tableData1" :table-row-class-name="tableRowClassName" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Pie from './components/EmergencyCommand/pie'
import Myline from './components/EmergencyCommand/line'
import Tablein from '@/components/Table/tablein.vue'
export default {
  components: {
    Myline,
    Tablein,
    Pie
  },
  data() {
    return {
      // 警情级别表格数据属性
      tableData: {
        tableHeader: [
          {
            label: '警情名称',
            prop: 'input',
            width: 50
          },
          {
            label: '报警点名称',
            prop: 'input'
          },
          {
            label: '报警时间',
            prop: 'input'
          },
          {
            label: '警情预测等级',
            prop: 'input'
          }
        ],
        tableList: Array(5).fill({
          input: '123'
        })
      },
      // 警情风险表格数据属性
      tableData1: {
        tableHeader: [
          {
            label: '警情名称',
            prop: 'input',
            width: 50
          },
          {
            label: '报警点名称',
            prop: 'input'
          },
          {
            label: '报警时间',
            prop: 'input'
          },
          {
            label: '风险提示',
            prop: 'input'
          },
          {
            label: '警员姓名',
            prop: 'input'
          }
        ],
        tableList: Array(5).fill({
          input: '123'
        })
      }
    }
  },
  methods: {
    // 动态添加el-tabel不同列表的class
    tableRowClassName({ row, rowIndex }) {
      console.log(row, rowIndex)
      if ((rowIndex + 1) % 2 === 0) {
        return 'success-row'
      } else {
        return 'error-row'
      }
    },
    // 表格按钮
    Infor(data) {
      console.log(data)
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
  .success-row {
    background-color: rgb(29, 114, 122) !important;
    color: #fff !important;
  }
  .success-row:hover > td {
    background-color: rgb(29, 114, 122) !important;
    color: #fff !important;
  }
  .error-row {
    background-color: rgb(69, 244, 254) !important;
    color: #0000 !important;
  }
  .error-row:hover > td {
    background-color: rgb(69, 244, 254) !important;
    color: #000 !important;
  }
  .content-title {
    width: 100%;
    height: 8%;
    font-size: 22px;
    color: #fff;
    font-weight: 600;
  }
  .row_box {
    height: 50%;
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
  .content-table {
    margin-top: 20px;
    .table_title {
      display: inline-block;
      color: #fff;
      height: 30px;
      font-size: 15px;
      font-weight: 500;
      border-bottom: 1px solid #808080;
    }
    .row_table {
      margin-top: 20px;
      /deep/ .el-table,
      .el-table__expanded-cell {
        background-color: transparent;
      }
      // /deep/ .el-table tr {
      //   background-color: transparent !important;
      // }
      /deep/ .el-table__header-wrapper .el-table__header .has-gutter tr th {
        // background-color: transparent !important;
        background-color: #20505c !important;
        color: #fff;
      }
    }
  }
}
</style>
