<template>
  <div class="Patrol_equipment_content">
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
        <Elsearch :search-settings="searchSettings" :search-btn="searchBtn" :form-data="formData" @add="add" @search="search" />
      </div>
      <div class="table">
        <tablein :data="tableData">
          <template #operation="{data}">
            <el-link type="primary" @click="details(data.name)">详情</el-link>
            <el-link type="primary" @click="modify(data.name)">修改</el-link>
            <el-link type="primary" @click="del(data.name)">删除</el-link>
            <el-link type="primary" @click="report(data.name)">装备上报</el-link>
          </template>
        </tablein>
        <div class="Pagin">
          <el-pagination :current-page="currentPage4" :page-sizes="[10]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="10" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        </div>
        <el-dialog :title="title" :visible.sync="dialogShow" center width="40%">
          <Elsearch :search-settings="dialogSettings" :form-data="dialogData" />
          <template v-if="title !== '详情'" #footer>
            <span class="dialog-footer">
              <el-button @click="confirm">保存</el-button>
              <el-button @click="cancel">关闭</el-button>
            </span>
          </template>
        </el-dialog>
      </div>
      <el-dialog :title="deltitle" :visible.sync="delShow" center width="30%">
        <p v-if="deltitle === '删除'">确认要删除选中内容吗？删除后数据不可恢复哦！！</p>
        <p v-else>确认要上报该巡逻装备吗？</p>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="confirmDel">确认</el-button>
            <el-button @click="delShow = false">取消</el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import Elsearch from '@/components/search/index'
import gearEchar from './components/gearEchar'
import tablein from '@/components/Table/tablein'
export default {
  components: {
    gearEchar,
    tablein,
    Elsearch
  },
  data() {
    return {
      // 搜索框
      searchSettings: [
        { placeholder: '请输入装备名称', type: 'input', name: 'input' },
        { placeholder: '请输入装备型号', type: 'input', name: 'input' },
        {
          placeholder: '请选择装备状态',
          type: 'select',
          name: 'input',
          options: [
            { label: '已启用', value: 1 },
            { label: '已禁用', value: 0 }
          ]
        },
        {
          placeholder: '请选择装备类型',
          type: 'select',
          name: 'input',
          options: [
            { label: '类别一', value: 1 },
            { label: '类别二', value: 0 }
          ]
        },
        { placeholder: '请输入行政区划代码', type: 'input', name: 'input' }
      ],
      // 弹出框
      dialogSettings: [
        { label: '装备名称', placeholder: '请输入', type: 'input', name: 'input' },
        { label: '地球经度', placeholder: '请输入', type: 'input', name: 'input' },
        { label: '地球纬度', placeholder: '请输入', type: 'input', name: 'input' },
        { label: '行政区划代码', placeholder: '请输入', type: 'input', name: 'input' },
        { label: '公安机构名称', placeholder: '请输入', type: 'input', name: 'input' },
        { label: '装备型号', placeholder: '请输入', type: 'input', name: 'input' },
        { label: '厂商名称', placeholder: '请输入', type: 'input', name: 'input' },
        { label: '购置日期', placeholder: '请输入', type: 'input', name: 'input' },
        { label: '使用期限(月)', placeholder: '请输入', type: 'input', name: 'input' },
        { label: '装备状态', placeholder: '请输入', type: 'input', name: 'input' },
        { label: '上报状态', type: 'span', name: 'input' },
        { label: '对讲机编号', placeholder: '请输入', type: 'input', name: 'input' }
      ],
      // 搜索组件按钮属性
      searchBtn: [
        { name: '查询', type: 'search' },
        { name: '重置', type: 'reset' },
        { name: '新增', type: 'add' }
      ],
      formData: { input: '' },
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
      },
      currentPage: 1,
      title: '', // 弹出框标题
      deltitle: '', // 删除或上报弹出层标题
      delShow: false, // 删除或上报弹出层
      dialogShow: false, // 显示弹出框
      dialogData: {} // 弹出框数据
    }
  },
  methods: {
    add() {
      this.title = '添加'
      this.dialogShow = true
    },
    search() {},
    // 上报
    report() {
      this.deltitle = '装备上报'
      this.delShow = true
    },
    details() {
      this.title = '详情'
      this.dialogShow = true
    },
    modify() {
      this.title = '修改'
      this.dialogShow = true
    },
    // 删除
    del() {
      this.deltitle = '删除'
      this.delShow = true
    },
    // 删除或上报确认按钮
    confirmDel() {
      this.delShow = false
    },
    // 弹出框确认按钮
    confirm() {
      this.dialogShow = false
    },
    // 弹出框取消按钮
    cancel() {
      this.dialogShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
.Patrol_equipment_content {
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
      margin-bottom: 10px;
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
          padding-bottom: 10px;
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
              margin-right: 0;
              margin-bottom: 10px;
              .el-form-item__label {
                color: #fff;
              }
              .el-form-item__content {
                width: auto;
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
      // background-color: transparent !important;
      background-color: #20505c !important;
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
      /deep/.el-pagination__total {
        color: #fff;
      }
      /deep/.el-pagination__jump {
        color: #fff;
      }
    }
    // .el-dialog__wrapper {
    //   .el-dialog {
    //     .el-dialog__header {
    //       background-color: #0d2e36 !important;
    //       border-bottom: 1px solid #20505c;
    //       .el-dialog__title {
    //         color: #ffffff !important;
    //       }
    //     }
    //     .el-dialog__body {
    //       background-color: #0d2e36 !important;
    //       p {
    //         color: #fff;
    //       }
    //     }
    //     .el-dialog__footer {
    //       background-color: #0d2e36 !important;
    //       .dialog-footer {
    //         .el-button {
    //           padding: 12px 40px;
    //           background-color: #0e3c42;
    //           color: #3fdee7;
    //           border-color: #797979;
    //         }
    //       }
    //     }
    //   }
    // }
  }
}
</style>
