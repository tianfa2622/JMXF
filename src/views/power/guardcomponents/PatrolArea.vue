<template>
  <div class="Area_content">
    <div class="scope">
      <Elsearch :search-settings="searchSettings" :search-btn="searchBtn" :form-data="formData" @add="add" @search="search" />
    </div>
    <div class="table">
      <tablein :data="tableData">
        <template #operation="{data}">
          <el-link type="primary" @click="details(data.name)">详情</el-link>
          <el-link type="primary" @click="modify(data.name)">修改</el-link>
          <el-link type="primary" @click="del(data.name)">删除</el-link>
          <el-link type="primary" @click="deploy(data.name)">力量部署</el-link>
          <el-link type="primary" @click="roster(data.name)">勤务排班</el-link>
          <el-link type="primary" @click="report(data.name)">勤务方案上报</el-link>
          <el-link type="primary" @click="patrolRoute(data.name)">巡逻路线</el-link>
        </template>
      </tablein>
      <el-dialog :title="title" :visible.sync="dialogShow" center width="40%">
        <Elsearch :search-settings="dialogSettings" :form-data="dialogData" />
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="confirm">保存</el-button>
            <el-button @click="cancel">关闭</el-button>
          </span>
        </template>
      </el-dialog>
    </div>
    <div class="Pagin">
      <el-pagination :current-page="currentPage4" :page-sizes="[10]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="10" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>
    <el-dialog :title="deltitle" :visible.sync="delShow" center width="30%">
      <p v-if="deltitle === '删除'">确认要删除选中内容吗？删除后数据不可恢复哦！！</p>
      <p v-else>确认要上报该勤务方案吗？</p>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="confirmDel">确认</el-button>
          <el-button @click="delShow = false">取消</el-button>
        </span>
      </template>
    </el-dialog>
    <el-dialog :title="Pagetitle" :visible.sync="PageShow" center width="70%">
      <DutyScheduling v-if="Pagetitle === '勤务排班'" /><ForceDeployment v-else-if="Pagetitle === '力量部署'" /><PatrolRoute v-else />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="PageShow = false">关闭</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import Elsearch from '@/components/search/index'
import tablein from '@/components/Table/tablein'
import DutyScheduling from './DutyScheduling'
import ForceDeployment from './ForceDeployment'
import PatrolRoute from './patrolRoute'
export default {
  components: {
    tablein,
    Elsearch,
    DutyScheduling,
    PatrolRoute,
    ForceDeployment
  },
  data() {
    return {
      // 搜索框
      searchSettings: [
        { placeholder: '请输入巡逻区域名称', type: 'input', name: 'input' },
        { placeholder: '请输入公安机关名称', type: 'input', name: 'input' },
        {
          placeholder: '请选择巡区类型',
          type: 'select',
          name: 'input',
          options: [
            { label: '类型1', value: 1 },
            { label: '类型2', value: 0 }
          ]
        },
        { placeholder: '请输入行政区划代码', type: 'input', name: 'input' }
      ],
      // 弹出框
      dialogSettings: [
        { label: '巡逻排版名称', placeholder: '请输入', type: 'input', name: 'input' },
        { label: '警员编号', placeholder: '请输入', type: 'input', name: 'input' },
        { label: '姓名', placeholder: '请输入', type: 'input', name: 'input' },
        { label: '公安机构名称', placeholder: '请输入', type: 'input', name: 'input' },
        { label: '巡逻区域名称', placeholder: '请输入', type: 'input', name: 'input' },
        { label: '巡逻路线', placeholder: '请输入', type: 'input', name: 'input' },
        { label: '开始时间', placeholder: '请输入', type: 'data', name: 'input' },
        { label: '结束时间', placeholder: '请输入', type: 'data', name: 'input' }
      ],
      // 搜索组件按钮属性
      searchBtn: [
        { name: '查询', type: 'search' },
        { name: '重置', type: 'reset' },
        { name: '新增', type: 'add' }
      ],
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
      Pagetitle: '',
      PageShow: false,
      title: '', // 弹出框标题
      deltitle: '', // 删除或上报弹出层标题
      delShow: false, // 删除或上报弹出层
      dialogShow: false, // 显示弹出框
      dialogData: {} // 弹出框数据
    }
  },
  methods: {
    search() {},
    // reset(){},
    add() {
      this.title = '添加'
      this.dialogShow = true
    },
    // 力量部署
    deploy() {
      this.Pagetitle = '力量部署'
      this.PageShow = true
    },
    details() {
      this.title = '详情'
      this.dialogShow = true
    },
    modify() {
      this.title = '修改'
      this.dialogShow = true
    },
    // 勤务排班
    roster(data) {
      this.Pagetitle = '勤务排班'
      this.PageShow = true
      console.log(data)
    },
    // 勤务方案上报
    report(data) {
      console.log(data)
      this.deltitle = '勤务方案上报'
      this.delShow = true
    },
    // 巡逻路线
    patrolRoute(data) {
      console.log(data)
      this.Pagetitle = '巡逻路线'
      this.PageShow = true
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
.Area_content {
  .table {
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
</style>
