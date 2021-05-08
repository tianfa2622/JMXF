<template>
  <div class="content">
    <div class="content-title">综合预警中心</div>
    <div class="content-char">
      <div class="char">
        <div class="char-title">区域巡防人员统计</div>
        <subtypeEchar />
      </div>
      <div class="char">
        <div class="char-title">巡防人员类型比例</div>
        <totalEchar />
      </div>
    </div>
    <div class="content-tab">
      <div class="scope">
        <div class="inputs">
          <el-input v-model="input" placeholder="请选择预警类型" />
          <el-input v-model="input" placeholder="请输入发起民警姓名" />
          <el-input v-model="input" placeholder="请输入发起民警编号" />
          <el-input v-model="input" placeholder="请输入行政区划代码" />
        </div>
        <div class="buttons">
          <el-button>搜索</el-button>
          <el-button>重置</el-button>
          <el-button>添加 </el-button>
        </div>
      </div>
      <div class="table">
        <tablein :data="tableData">
          <template #operation="{data}">
            <el-link type="primary" @click="Infor(data.name)">详情</el-link>
            <el-link type="primary" @click="Infor(data.name)">修改</el-link>
            <el-link type="primary" @click="Infor(data.name)">删除</el-link>
            <el-link type="primary" @click="Infor(data.name)">订阅</el-link>
          </template>
        </tablein>
      </div>
      <div class="Pagin">
        <el-pagination :current-page="currentPage4" :page-sizes="[10]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="10" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
      </div>
    </div>
  </div>
</template>

<script>
import subtypeEchar from './components/subtypeEchar'
import totalEchar from './components/totalEchar'
import tablein from '@/components/Table/tablein'
export default {
  components: {
    subtypeEchar,
    totalEchar,
    tablein
  },
  data() {
    return {
      tableData: {
        tableHeader: [
          {
            label: '序号',
            prop: 'cid',
            width: 50
          },
          {
            label: '预警类型',
            prop: 'types',
            width: 80
          },
          {
            label: '预警时间',
            prop: 'times',
            width: 80
          },
          {
            label: '预警级别',
            prop: 'level',
            width: 80
          },
          {
            label: '预警内容类型',
            prop: 'contenttype',
            width: 80
          },
          {
            label: '发起民警姓名',
            prop: 'name',
            width: 80
          },
          {
            label: '发起民警编号',
            prop: 'serial',
            width: 80
          },
          {
            label: '行政区划代码',
            prop: 'code',
            width: 80
          },
          {
            label: '是否订阅',
            prop: 'whether',
            width: 80
          },
          {
            label: '操作',
            type: 'slot',
            width: 150,
            slotName: 'operation'
          }
        ],
        tableList: [
          {
            cid: '1',
            types: '感知比对预警',
            times: '2020-10-10-10:25',
            level: '二级',
            contenttype: '人脸识别预警',
            name: '张凤',
            serial: '000125',
            code: '431000212542',
            whether: '已订阅'
          },
          {
            cid: '1',
            types: '感知比对预警',
            times: '2020-10-10-10:25',
            level: '二级',
            contenttype: '人脸识别预警',
            name: '张凤',
            serial: '000125',
            code: '431000212542',
            whether: '已订阅'
          },
          {
            cid: '1',
            types: '感知比对预警',
            times: '2020-10-10-10:25',
            level: '二级',
            contenttype: '人脸识别预警',
            name: '张凤',
            serial: '000125',
            code: '431000212542',
            whether: '已订阅'
          },
          {
            cid: '1',
            types: '感知比对预警',
            times: '2020-10-10-10:25',
            level: '二级',
            contenttype: '人脸识别预警',
            name: '张凤',
            serial: '000125',
            code: '431000212542',
            whether: '已订阅'
          },
          {
            cid: '1',
            types: '感知比对预警',
            times: '2020-10-10-10:25',
            level: '二级',
            contenttype: '人脸识别预警',
            name: '张凤',
            serial: '000125',
            code: '431000212542',
            whether: '已订阅'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
.content {
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
  .content-char {
    width: 100%;
    height: 42%;
    display: flex;
    justify-content: space-between;
    .char {
      width: 50%;
      height: 100%;
      .char-title {
        width: 100%;
        height: 25px;
        text-align: center;
        font-size: 14px;
        color: #fff;
      }
    }
  }
  .content-tab {
    width: 100%;
    height: 50%;
    padding-top: 10px;
    .scope {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-between;
      .el-input {
        width: 170px;
        margin-right: 10px;
        input {
          background-color: rgba(5, 60, 67, 1);
          height: 30px;
          color: #00f3ff;
        }
      }
      .el-button {
        background-color: rgba(5, 60, 67, 1);
        border-color: rgba(121, 121, 121, 1);
        color: #00f3ff;
        width: 100px;
      }
    }
    .table {
      width: 100%;
      /deep/ .el-table,
      .el-table__expanded-cell {
        background-color: transparent;
      }
      /deep/ .el-table tr {
        background-color: transparent !important;
      }
      /deep/ .el-table__header-wrapper .el-table__header .has-gutter tr th {
        background-color: transparent !important;
        color: #fff;
      }
      /deep/ .el-table--enable-row-transition .el-table__body td,
      .el-table .cell {
        background-color: transparent;
        color: #fff;
      }
      .el-link {
        margin-left: 20px;
      }
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
</style>
