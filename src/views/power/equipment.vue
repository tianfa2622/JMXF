<template>
  <div class="content">
    <div class="content-title">巡逻装备管理</div>
    <div class="content-char">
      <div class="char">
        <div class="char-title">
          装备详情展示
        </div>
        <div class="char-content">
          <div class="blocks">
            <div class="block">
              <div class="left">
                <img src="../../assets/u5.png" alt="" />
              </div>
              <div class="right">
                <p>每月新增装备数量 <span>268</span> 个</p>
              </div>
            </div>
            <div class="block">
              <div class="left">
                <img src="../../assets/u6.png" alt="" />
              </div>
              <div class="right">
                <p>本月即将到期数量 <span>12</span> 个</p>
              </div>
            </div>
          </div>
          <div class="blocks">
            <div class="block">
              <div class="left">
                <img src="../../assets/u7.png" alt="" />
              </div>
              <div class="right">
                <p>巡防装备总数 <span>2157</span> 个</p>
              </div>
            </div>
            <div class="block">
              <div class="left">
                <img src="../../assets/u8.png" alt="" />
              </div>
              <div class="right">
                <p>上报装备数量 <span>112</span> 个</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="char">
        <div class="char-title">
          巡防装备比例
        </div>
        <gearEchar />
      </div>
    </div>
    <div class="content-tab">
      <div class="scope">
        <div class="inputs">
          <el-input v-model="input" placeholder="请输入装备名称" />
          <el-input v-model="input" placeholder="请输入装备型号" />
          <el-input v-model="input" placeholder="请选择装备类型" />
          <el-input v-model="input" placeholder="请选择装备状态" />
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
            <el-link type="primary" @click="Infor(data.name)">装备上报</el-link>
          </template>
        </tablein>
        <div class="Pagin">
          <el-pagination :current-page="currentPage4" :page-sizes="[10]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="10" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gearEchar from './components/gearEchar'
import tablein from '@/components/Table/tablein'
export default {
  components: {
    gearEchar,
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
            label: '装备名称',
            prop: 'names',
            width: 50
          },
          {
            label: '行政区划代码',
            prop: 'areanumber',
            width: 80
          },
          {
            label: '公安机关名称',
            prop: 'public',
            width: 80
          },
          {
            label: '装备型号',
            prop: 'model',
            width: 80
          },
          {
            label: '厂家名称',
            prop: 'manufacturer',
            width: 80
          },
          {
            label: '购置日期',
            prop: 'times',
            width: 100
          },
          {
            label: '使用期限(月)',
            prop: 'month',
            width: 50
          },
          {
            label: '装备状态',
            prop: 'statu',
            width: 50
          },
          {
            label: '是否上报',
            prop: 'report',
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
            names: '安检巡逻车',
            areanumber: '430102002000',
            public: '万家丽分局',
            model: 'AJC000256',
            manufacturer: '腾安巡逻车厂',
            times: '2020-10-27',
            month: '36',
            statu: '正常',
            report: '未上报'
          },
          {
            cid: '1',
            names: '安检巡逻车',
            areanumber: '430102002000',
            public: '万家丽分局',
            model: 'AJC000256',
            manufacturer: '腾安巡逻车厂',
            times: '2020-10-27',
            month: '36',
            statu: '正常',
            report: '未上报'
          },
          {
            cid: '1',
            names: '安检巡逻车',
            areanumber: '430102002000',
            public: '万家丽分局',
            model: 'AJC000256',
            manufacturer: '腾安巡逻车厂',
            times: '2020-10-27',
            month: '36',
            statu: '正常',
            report: '未上报'
          },
          {
            cid: '1',
            names: '安检巡逻车',
            areanumber: '430102002000',
            public: '万家丽分局',
            model: 'AJC000256',
            manufacturer: '腾安巡逻车厂',
            times: '2020-10-27',
            month: '36',
            statu: '正常',
            report: '未上报'
          },
          {
            cid: '1',
            names: '安检巡逻车',
            areanumber: '430102002000',
            public: '万家丽分局',
            model: 'AJC000256',
            manufacturer: '腾安巡逻车厂',
            times: '2020-10-27',
            month: '36',
            statu: '正常',
            report: '未上报'
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
      .char-content {
        width: 100%;
        height: calc(100% - 25px);
        padding-top: 5%;
        .blocks {
          width: 100%;
          height: 50%;
          display: flex;
          justify-content: space-between;
          .block {
            width: 40%;
            height: 50%;
            background-image: url('../../assets/border01.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            display: flex;
            .left {
              width: 40%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              img {
                width: 30px;
                height: 30px;
              }
            }
            .right {
              width: 60%;
              height: 100%;
              display: flex;
              align-items: center;
              flex-wrap: wrap;
              color: #00f3ff;
              font-size: 14px;
              span {
                color: #fff;
              }
            }
          }
        }
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
