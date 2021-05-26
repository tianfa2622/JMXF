<template>
  <div class="xf_content">
    <div class="content-title">巡防调整提示</div>
    <el-row type="flex" justify="space-around">
      <el-col :span="7">
        <div class="row_title">网格调整提示数量统计</div>
        <div class="row_echarts">
          <gridadjustEchar />
        </div>
      </el-col>
      <el-col :span="7">
        <div class="row_title">街面警务调整提示数量统计</div>
        <div class="row_echarts">
          <gridadjustEchar />
        </div>
      </el-col>
      <el-col :span="7">
        <div class="row_title">巡逻路线调整提示数量统计</div>
        <div class="row_echarts">
          <gridadjustEchar />
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" justify="space-around" class="content-table">
      <el-col :span="7">
        <span class="table_title">巡区网格调整提示栏</span>
        <div class="row_table">
          <Tablein :data="tableData" :table-row-class-name="tableRowClassName" />
        </div>
      </el-col>
      <el-col :span="7">
        <span class="table_title">界面任务站调整提示栏</span>
        <div class="row_table">
          <Tablein :data="tableData1" :table-row-class-name="tableRowClassName" />
        </div>
      </el-col>
      <el-col :span="7">
        <span class="table_title">巡逻路线提示栏</span>
        <div class="row_table">
          <Tablein :data="tableData2" :table-row-class-name="tableRowClassName" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import gridadjustEchar from './components/gridadjustEchar'
import Tablein from '@/components/Table/tablein'

export default {
  components: {
    gridadjustEchar,
    Tablein
  },
  data() {
    return {
      tableData: {
        stripe: true,
        tableHeader: [
          {
            label: '巡区网格名称',
            prop: 'input'
            // width: 50
          },
          {
            label: '提示时间',
            prop: 'input'
            // width: 80
          },
          {
            label: '提示原因',
            prop: 'input'
            // width: 80
          }
        ],
        tableList: Array(5).fill({
          input: '123'
        })
      },
      tableData1: {
        stripe: true,
        tableHeader: [
          {
            label: '街面警务站名称',
            prop: 'input'
            // width: 50
          },
          {
            label: '提示时间',
            prop: 'input'
            // width: 80
          },
          {
            label: '提示原因',
            prop: 'input'
            // width: 80
          }
        ],
        tableList: Array(5).fill({
          input: '123'
        })
      },
      tableData2: {
        stripe: true,
        tableHeader: [
          {
            label: '巡逻路线名称',
            prop: 'input'
            // width: 50
          },
          {
            label: '提示时间',
            prop: 'input'
            // width: 80
          },
          {
            label: '提示原因',
            prop: 'input'
            // width: 80
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
    }
  }
}
</script>
<style lang="scss" scoped>
.xf_content {
  width: 95%;
  height: calc(100% - 120px);
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 40px;
  background-image: url('../../assets/backimg01.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  overflow: auto;
  /deep/.success-row {
    background-color: rgb(29, 114, 122) !important;
    color: #fff !important;
  }
  /deep/.success-row:hover > td {
    background-color: rgb(29, 114, 122) !important;
    color: #fff !important;
  }
  /deep/.error-row {
    background-color: rgb(69, 244, 254) !important;
    color: #000 !important;
  }
  /deep/.error-row:hover > td {
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
