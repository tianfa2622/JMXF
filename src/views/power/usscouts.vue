<template>
  <div class="content">
    <div class="content-title">巡逻力量管理</div>
    <div class="content-char">
      <div class="char">
        <div class="char-title">区域巡防人员统计</div>
        <personnelEchar />
      </div>
      <div class="char">
        <div class="char-title">巡防人员类型比例</div>
        <proportionEchar />
      </div>
    </div>
    <div class="content-tab">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="巡防人员管理" name="first">
          <div class="scope">
            <div class="inputs">
              <el-input v-model="input" placeholder="请输入姓名" />
              <el-input v-model="input" placeholder="请输入编号" />
              <el-input v-model="input" placeholder="请选择巡逻人员类别" />
              <el-input v-model="input" placeholder="请输入行政区划代码" />
            </div>

            <div class="buttons">
              <el-button>搜索</el-button>
              <el-button>重置</el-button>
              <el-button>添加 </el-button>
              <el-button>导入</el-button>
            </div>
          </div>
          <div class="table">
            <tablein :data="tableData">
              <template #operation="{data}">
                <el-link type="primary" @click="Infor(data.name)">详情</el-link>
                <el-link type="primary" @click="Infor(data.name)">修改</el-link>
                <el-link type="primary" @click="Infor(data.name)">删除</el-link>
                <el-link type="primary" @click="Infor(data.name)">力量上限</el-link>
              </template>
            </tablein>
          </div>

          <div class="Pagin">
            <el-pagination :current-page="currentPage4" :page-sizes="[10]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="10" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
          </div>
        </el-tab-pane>
        <el-tab-pane label="警务站管理" name="second">
          <div class="scope">
            <div class="inputs">
              <el-input v-model="input" placeholder="请输入名称" />
              <el-input v-model="input" placeholder="请输入机关公安名称" />
              <el-input v-model="input" placeholder="请选择警务站类型" />
              <el-input v-model="input" placeholder="请输入行政区划代码" />
            </div>

            <div class="buttons">
              <el-button>搜索</el-button>
              <el-button>重置</el-button>
              <el-button>添加 </el-button>
              <el-button>导入</el-button>
            </div>
          </div>
          <div class="table">
            <tablein :data="tableDatatwo">
              <template #operation="{data}">
                <el-link type="primary" @click="Infor(data.name)">详情</el-link>
                <el-link type="primary" @click="Infor(data.name)">修改</el-link>
                <el-link type="primary" @click="Infor(data.name)">删除</el-link>
                <el-link type="primary" @click="Infor(data.name)">力量上限</el-link>
              </template>
            </tablein>
          </div>
          <div class="Pagin">
            <el-pagination :current-page="currentPage4" :page-sizes="[4]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="4" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import personnelEchar from './components/personnelEchar'
import proportionEchar from './components/proportionEchar'
import tablein from '@/components/Table/tablein'
export default {
  components: {
    personnelEchar,
    proportionEchar,
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
            label: '姓名',
            prop: 'username',
            width: 50
          },
          {
            label: '行政区划代码',
            prop: 'areanumber',
            width: 80
          },
          {
            label: '巡逻人员类别',
            prop: 'types',
            width: 80
          },
          {
            label: '编号',
            prop: 'number',
            width: 80
          },
          {
            label: '联系电话',
            prop: 'phone',
            width: 80
          },
          {
            label: '职称级别',
            prop: 'titleLevel',
            width: 80
          },
          {
            label: '性别',
            prop: 'sex',
            width: 50
          },
          {
            label: '专业、经验能力',
            prop: 'experience',
            width: 80
          },
          {
            label: '是否上报',
            prop: 'report',
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
            cid: 1,
            username: '张三',
            areanumber: '430102002000',
            types: '街道巡逻',
            number: 'CSGAJC0058',
            phone: 17770058665,
            titleLevel: '警员',
            sex: '男',
            experience: '熟练',
            report: '未上报'
          },
          {
            cid: 1,
            username: '张三',
            areanumber: '430102002000',
            types: '街道巡逻',
            number: 'CSGAJC0058',
            phone: 17770058665,
            titleLevel: '警员',
            sex: '男',
            experience: '熟练',
            report: '未上报'
          },
          {
            cid: 1,
            username: '张三',
            areanumber: '430102002000',
            types: '街道巡逻',
            number: 'CSGAJC0058',
            phone: 17770058665,
            titleLevel: '警员',
            sex: '男',
            experience: '熟练',
            report: '未上报'
          },
          {
            cid: 1,
            username: '张三',
            areanumber: '430102002000',
            types: '街道巡逻',
            number: 'CSGAJC0058',
            phone: 17770058665,
            titleLevel: '警员',
            sex: '男',
            experience: '熟练',
            report: '未上报'
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
            label: '区划内详细地址',
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
            label: '建立时间',
            prop: 'time',
            width: 50
          },
          {
            label: '公安机关名称',
            prop: 'official',
            width: 50
          },
          {
            label: '警务站类型',
            prop: 'police',
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
            time: '2002-02-12',
            official: '芙蓉区分局',
            police: '巡逻休息'
          },
          {
            cid: '1',
            username: '万家丽警务站',
            areanumber: '430102002000',
            address: '人民东路中段芙蓉区政府旁',
            earth: '',
            area: '',
            time: '2002-02-12',
            official: '芙蓉区分局',
            police: '巡逻休息'
          },
          {
            cid: '1',
            username: '万家丽警务站',
            areanumber: '430102002000',
            address: '人民东路中段芙蓉区政府旁',
            earth: '',
            area: '',
            time: '2002-02-12',
            official: '芙蓉区分局',
            police: '巡逻休息'
          },
          {
            cid: '1',
            username: '万家丽警务站',
            areanumber: '430102002000',
            address: '人民东路中段芙蓉区政府旁',
            earth: '',
            area: '',
            time: '2002-02-12',
            official: '芙蓉区分局',
            police: '巡逻休息'
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
