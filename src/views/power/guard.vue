<template>
  <div class="content">
    <div class="content-title">巡逻勤务管理</div>
    <div class="content-char">
      <div class="char">
        <div class="char-title">区域勤务排班统计（月）</div>
        <schedulingEchar />
      </div>
      <div class="char">
        <div class="char-title">区域巡区网格数量统计</div>
        <ofandEchar />
      </div>
    </div>
    <div class="content-tab">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="巡区管理" name="first">
          <div class="scope">
            <div class="inputs">
              <el-input v-model="input" placeholder="请输入巡逻区域名称" />
              <el-input v-model="input" placeholder="请输入公安机关名称" />
              <el-input v-model="input" placeholder="请选择巡区类型" />
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
                <el-link type="primary" @click="Infor(data.name)">力量部署</el-link>
                <el-link type="primary" @click="Infor(data.name)">勤务排班</el-link>
                <el-link type="primary" @click="Infor(data.name)">勤务方案上报</el-link>
                <el-link type="primary" @click="Infor(data.name)">巡逻路线</el-link>
              </template>
            </tablein>
          </div>

          <div class="Pagin">
            <el-pagination :current-page="currentPage4" :page-sizes="[10]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="10" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
          </div>
        </el-tab-pane>
        <el-tab-pane label="巡区感知点位管理" name="second">
          <div class="scope">
            <div class="inputs">
              <el-input v-model="input" placeholder="请输入设备名称" />
              <el-input v-model="input" placeholder="请输入厂商名称" />
              <el-input v-model="input" placeholder="请输入公安机关名称" />
              <el-input v-model="input" placeholder="请输入行政区划代码" />
            </div>

            <div class="buttons">
              <el-button>搜索</el-button>
              <el-button>重置</el-button>
              <el-button>添加 </el-button>
            </div>
          </div>
          <div class="table">
            <tablein :data="tableDatatwo">
              <template #operation="{data}">
                <el-link type="primary" @click="Infor(data.name)">详情</el-link>
                <el-link type="primary" @click="Infor(data.name)">修改</el-link>
                <el-link type="primary" @click="Infor(data.name)">删除</el-link>
              </template>
            </tablein>
          </div>
          <div class="Pagin">
            <el-pagination :current-page="currentPage4" :page-sizes="[10]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="10" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import schedulingEchar from './components/schedulingEchar'
import ofandEchar from './components/ofandEchar'
import tablein from '@/components/Table/tablein'
export default {
  components: {
    schedulingEchar,
    ofandEchar,
    tablein
  },
  data() {
    return {
      activeName: 'first',
      tableData: {
        tableHeader: [
          {
            label: '序号',
            prop: 'cid',
            width: 50
          },
          {
            label: '巡逻区域名称',
            prop: 'names',
            width: 80
          },
          {
            label: '公安机关名称',
            prop: 'public',
            width: 80
          },
          {
            label: '行政区划代码',
            prop: 'areanumber',
            width: 80
          },
          {
            label: '巡区类型',
            prop: 'types',
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
            names: '万家丽广场',
            public: '万家丽分局',
            areanumber: '4311111110',
            types: '商圈'
          },
          {
            cid: '1',
            names: '万家丽广场',
            public: '万家丽分局',
            areanumber: '4311111110',
            types: '商圈'
          },
          {
            cid: '1',
            names: '万家丽广场',
            public: '万家丽分局',
            areanumber: '4311111110',
            types: '商圈'
          },
          {
            cid: '1',
            names: '万家丽广场',
            public: '万家丽分局',
            areanumber: '4311111110',
            types: '商圈'
          }
        ]
      },
      tableDatatwo: {
        tableHeader: [
          {
            label: '序号',
            prop: 'cid',
            width: 50
          },
          {
            label: '名称',
            prop: 'username',
            width: 50
          },
          {
            label: '行政区划代码',
            prop: 'areanumber',
            width: 80
          },
          {
            label: '地址名称',
            prop: 'address',
            width: 100
          },
          {
            label: '地球经度',
            prop: 'earth',
            width: 50
          },
          {
            label: '地区纬度',
            prop: 'area',
            width: 50
          },
          {
            label: '公安机关名称',
            prop: 'official',
            width: 50
          },
          {
            label: '感知设备类型',
            prop: 'types',
            width: 50
          },
          {
            label: '摄像机用途',
            prop: 'unused',
            width: 50
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
            username: '万家丽警务站',
            areanumber: '430102002000',
            address: '人民东路中段芙蓉区政府旁',
            earth: '',
            area: '',
            official: '芙蓉区分局',
            types: '摄像机x1',
            unused: '监控'
          },
          {
            cid: '1',
            username: '万家丽警务站',
            areanumber: '430102002000',
            address: '人民东路中段芙蓉区政府旁',
            earth: '',
            area: '',
            official: '芙蓉区分局',
            types: '摄像机x1',
            unused: '监控'
          },
          {
            cid: '1',
            username: '万家丽警务站',
            areanumber: '430102002000',
            address: '人民东路中段芙蓉区政府旁',
            earth: '',
            area: '',
            official: '芙蓉区分局',
            types: '摄像机x1',
            unused: '监控'
          },
          {
            cid: '1',
            username: '万家丽警务站',
            areanumber: '430102002000',
            address: '人民东路中段芙蓉区政府旁',
            earth: '',
            area: '',
            official: '芙蓉区分局',
            types: '摄像机x1',
            unused: '监控'
          }
        ]
      }
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
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
    /deep/ .el-tabs__item {
      color: #00f3ff;
    }
    .el-tabs {
      width: 100%;
      height: 100%;
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
