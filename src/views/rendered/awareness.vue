<template>
  <div class="content">
    <div class="content-title">巡防态势感知</div>
    <div class="content-map">
      <awarenessMap />
    </div>
    <div class="content-show">
      <div class="showbox">
        <div class="title">安全态势展示</div>
        <div class="main">
          <ul>
            <li>
              <p class="titles">万家丽地铁站</p>
              <p class="data">
                <span style="color:#fff;">0事件</span>
                <span style="color:#00FF00;">正常</span>
              </p>
            </li>
            <li>
              <p class="titles">万家丽地铁站</p>
              <p class="data">
                <span style="color:#fff;">0事件</span>
                <span style="color:#00FF00;">正常</span>
              </p>
            </li>
            <li>
              <p class="titles">万家丽地铁站</p>
              <p class="data">
                <span style="color:#fff;">0事件</span>
                <span style="color:#00FF00;">正常</span>
              </p>
            </li>
          </ul>
          <ul>
            <li>
              <p class="titles">万家丽地铁站</p>
              <p class="data">
                <span style="color:#fff;">0事件</span>
                <span style="color:#00FF00;">正常</span>
              </p>
            </li>
            <li>
              <p class="titles">万家丽地铁站</p>
              <p class="data">
                <span style="color:#fff;">0事件</span>
                <span style="color:#00FF00;">正常</span>
              </p>
            </li>
            <li>
              <p class="titles">万家丽地铁站</p>
              <p class="data">
                <span style="color:#fff;">0事件</span>
                <span style="color:#00FF00;">正常</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="showboxs">
        <div class="title">巡防专题资源库建设展示</div>
        <div class="main">
          <ul>
            <li>
              <p class="titles">警力库</p>
              <p class="data">
                <span style="color:#fff;">共2102人</span>
                <span style="color:#fff;cursor: pointer;" @click="PoliceForce">查看详情>></span>
              </p>
            </li>
            <li>
              <p class="titles">临控库</p>
              <p class="data">
                <span style="color:#fff;">共2102人</span>
                <span style="color:#fff; cursor: pointer;" @click="TemporaryControl">查看详情>></span>
              </p>
            </li>
          </ul>
          <ul>
            <li>
              <p class="titles">战果库</p>
              <p class="data">
                <span style="color:#fff;">共2102人</span>
                <span style="color:#fff;cursor: pointer;" @click="Victory">查看详情>></span>
              </p>
            </li>
            <li>
              <p class="titles">资源装备库</p>
              <p class="data">
                <span style="color:#fff;">共2102人</span>
                <span style="color:#fff;cursor: pointer;" @click="equipment">查看详情>></span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="content-tab">
      <div class="title">巡防战果展示</div>
      <div class="table">
        <tablein :data="tableData" />
        <div class="Pagin">
          <el-pagination :current-page="currentPage4" :page-sizes="[10]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="10" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        </div>
      </div>
    </div>
    <el-dialog :title="title" :visible.sync="dialogShow" center width="60%">
      <tablein :data="tableData1" />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="cancel">关闭</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import awarenessMap from './components/awarenessMap'
import tablein from '@/components/Table/tablein'
export default {
  components: {
    awarenessMap,
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
            label: '警情编号',
            prop: 'serial',
            width: 80
          },
          {
            label: '警情名称',
            prop: 'name',
            width: 80
          },
          {
            label: '案事件发生开始时间',
            prop: 'times',
            width: 120
          },
          {
            label: '巡防警情类别',
            prop: 'types',
            width: 120
          },
          {
            label: '涉案地址',
            prop: 'address',
            width: 120
          },
          {
            label: '报警人',
            prop: 'police',
            width: 80
          },
          {
            label: '处理人',
            prop: 'dealing',
            width: 80
          },
          {
            label: '数据来源(行政区划代码)',
            prop: 'areanumber',
            width: 180
          }
        ],
        tableList: [
          {
            cid: '1',
            serial: 'JQ2020102201',
            name: '电动车碰撞',
            times: '2020-10-25-10:37',
            types: '车辆',
            address: '万家丽中路',
            police: '杨丽',
            dealing: '张三',
            areanumber: '43100001212'
          },
          {
            cid: '1',
            serial: 'JQ2020102201',
            name: '电动车碰撞',
            times: '2020-10-25-10:37',
            types: '车辆',
            address: '万家丽中路',
            police: '杨丽',
            dealing: '张三',
            areanumber: '43100001212'
          }
        ]
      },
      tableData1: {
        tableHeader: [],
        tableList: Array(5).fill({
          input: '123'
        })
      },
      tableHeaders1: [
        { label: '序号', prop: 'input', width: 50 },
        { label: '姓名', prop: 'input' },
        { label: '行政区划代码', prop: 'input' },
        { label: '巡逻人员类别', prop: 'input' },
        { label: '编号', prop: 'input' },
        { label: '联系电话', prop: 'input' },
        { label: '职称级别', prop: 'input' },
        { label: '性别', prop: 'input' },
        { label: '专业、经验能力', prop: 'input' }
      ],
      tableHeaders2: [
        { label: '序号', prop: 'input', width: 50 },
        { label: '涉案人', prop: 'input' },
        { label: '警情编号', prop: 'input' },
        { label: '警情名称', prop: 'input' },
        { label: '案事件发生开始时间', prop: 'input' },
        { label: '巡防警情类别', prop: 'input' },
        { label: '涉案地址', prop: 'input' },
        { label: '报警人', prop: 'input' },
        { label: '处理人', prop: 'input' }
      ],
      tableHeaders3: [
        { label: '序号', prop: 'input', width: 50 },
        { label: '警情编号', prop: 'input' },
        { label: '警情名称', prop: 'input' },
        { label: '案事件发生开始时间', prop: 'input' },
        { label: '巡防警情类别', prop: 'input' },
        { label: '涉案地址', prop: 'input' },
        { label: '报警人', prop: 'input' },
        { label: '处理人', prop: 'input' },
        { label: '数据来源(行政区划代码)', prop: 'input' }
      ],
      tableHeaders4: [
        { label: '序号', prop: 'input', width: 50 },
        { label: '装备名称', prop: 'input' },
        { label: '行政区划代码', prop: 'input' },
        { label: '公安机关名称', prop: 'input' },
        { label: '装备型号', prop: 'input' },
        { label: '厂家名称', prop: 'input' },
        { label: '购置日期', prop: 'input' },
        { label: '使用期限(月)', prop: 'input' },
        { label: '装备状态', prop: 'input' }
      ],
      title: '',
      dialogShow: false
    }
  },
  methods: {
    PoliceForce() {
      this.title = '警力库'
      this.tableData1.tableHeader = this.tableHeaders1
      this.dialogShow = true
    },
    TemporaryControl() {
      this.title = '临控库'
      this.dialogShow = true
      this.tableData1.tableHeader = this.tableHeaders2
    },
    Victory() {
      this.title = '战果库'
      this.dialogShow = true
      this.tableData1.tableHeader = this.tableHeaders3
    },
    equipment() {
      this.title = '资源(装备)库'
      this.dialogShow = true
      this.tableData1.tableHeader = this.tableHeaders4
    },
    cancel() {
      this.dialogShow = false
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
  .content-map {
    width: 100%;
    height: 50%;
  }
  .content-show {
    width: 100%;
    // height: 25%;
    margin-top: 20px;
    display: flex;
    .showbox {
      width: 50%;
      height: 100%;
      .title {
        height: 20px;
        text-align: center;
        font-size: 16px;
        color: #fff;
      }
      .main {
        width: 100%;
        height: calc(100% - 20px);
        ul {
          width: 100%;
          height: 50%;
          display: flex;
          li {
            width: 30%;
            margin: 10px;
            height: 90%;
            border: 1px solid;
            border-color: rgba(121, 121, 121, 1);
            border-radius: 21px;
            padding: 10px;
            .titles {
              color: #00f3ff;
            }
            .data {
              padding-top: 10px;
              display: flex;
              justify-content: space-between;
              font-size: 14px;
            }
          }
        }
      }
    }
    .showboxs {
      width: 50%;
      height: 100%;
      .title {
        height: 20px;
        text-align: center;
        font-size: 16px;
        color: #fff;
      }
      .main {
        width: 100%;
        height: calc(100% - 20px);
        ul {
          width: 100%;
          height: 50%;
          display: flex;
          justify-content: space-between;
          li {
            width: 40%;
            margin: 10px;
            height: 90%;
            border: 1px solid;
            border-color: rgba(121, 121, 121, 1);
            border-radius: 21px;
            padding: 10px;
            .titles {
              color: #00f3ff;

              text-align: center;
            }
            .data {
              padding-top: 10px;
              display: flex;
              justify-content: space-between;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
  .content-tab {
    width: 100%;
    height: 25%;
    margin: 20px 0;
    .title {
      height: 20px;
      text-align: left;
      font-size: 16px;
      color: #fff;
    }
  }
  .el-dialog__wrapper {
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
        .el-table {
          thead {
            color: #fff;
            font-weight: 700;
            background: #20505c !important;
            & th {
              background-color: transparent;
            }
            & tr {
              background-color: transparent;
            }
          }
        }
        .el-table,
        .el-table__expanded-cell {
          background-color: transparent;
        }
        .el-table th,
        .el-table tr {
          color: #45f4fe;
          background-color: transparent;
        }
        .el-table tbody tr:hover > td {
          background-color: transparent !important;
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
  .table {
    width: 100%;
    // /deep/ .el-table,
    // .el-table__expanded-cell {
    //   background-color: transparent;
    // }
    // /deep/ .el-table tr {
    //   background-color: transparent !important;
    // }
    // /deep/ .el-table__header-wrapper .el-table__header .has-gutter tr th {
    //   background-color: transparent !important;
    //   color: #fff;
    // }
    // /deep/ .el-table--enable-row-transition .el-table__body td,
    // .el-table .cell {
    //   background-color: transparent;
    //   color: #fff;
    // }
    .el-table {
      thead {
        color: #fff;
        font-weight: 700;
        background: #20505c !important;
        & th {
          background-color: transparent;
        }
        & tr {
          background-color: transparent;
        }
      }
    }
    .el-table,
    .el-table__expanded-cell {
      background-color: transparent;
    }
    .el-table th,
    .el-table tr {
      color: #45f4fe;
      background-color: transparent;
    }
    .el-table tbody tr:hover > td {
      background-color: transparent !important;
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
</style>
