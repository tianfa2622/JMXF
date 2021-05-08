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
                <span style="color:#fff;">查看详情>></span>
              </p>
            </li>
            <li>
              <p class="titles">警力库</p>
              <p class="data">
                <span style="color:#fff;">共2102人</span>
                <span style="color:#fff;">查看详情>></span>
              </p>
            </li>
          </ul>
          <ul>
            <li>
              <p class="titles">警力库</p>
              <p class="data">
                <span style="color:#fff;">共2102人</span>
                <span style="color:#fff;">查看详情>></span>
              </p>
            </li>
            <li>
              <p class="titles">警力库</p>
              <p class="data">
                <span style="color:#fff;">共2102人</span>
                <span style="color:#fff;">查看详情>></span>
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
  .content-map {
    width: 100%;
    height: 42%;
  }
  .content-show {
    width: 100%;
    height: 25%;
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
    .title {
      height: 20px;
      text-align: center;
      font-size: 16px;
      color: #fff;
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
