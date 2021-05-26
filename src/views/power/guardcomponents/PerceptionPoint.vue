<template>
  <div class="PerceptionPoint">
    <div class="scope">
      <Elsearch :search-settings="searchSettings" :search-btn="searchBtn" :form-data="formData" @add="add" @search="search" />
    </div>
    <div class="table">
      <tablein :data="tableDatatwo">
        <template #operation="{data}">
          <el-link type="primary" @click="details(data.name)">详情</el-link>
          <el-link type="primary" @click="modify(data.name)">修改</el-link>
          <el-link type="primary" @click="del(data.name)">删除</el-link>
        </template>
      </tablein>
    </div>
    <div class="Pagin">
      <el-pagination :current-page="currentPage4" :page-sizes="[10]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="10" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
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
    <el-dialog :title="title" :visible.sync="dialogShow" center width="50%">
      <Elsearch :search-settings="dialogSettings" :form-data="dialogData" />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="confirm">保存</el-button>
          <el-button @click="cancel">关闭</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import Elsearch from '@/components/search/index'
import tablein from '@/components/Table/tablein'
export default {
  components: {
    tablein,
    Elsearch
  },
  data() {
    return {
      // 搜索框
      searchSettings: [
        { placeholder: '请输入设备名称', type: 'input', name: 'input' },
        { placeholder: '请输入厂商名称', type: 'input', name: 'input' },
        { placeholder: '请输入公安机关名称', type: 'input', name: 'input' },
        { placeholder: '请输入行政区划代码', type: 'input', name: 'input' }
      ],
      // 弹出框
      dialogSettings: [
        { label: '设备名称', placeholder: '请输入', type: 'input', name: 'input' },
        { label: '感知设备类型', placeholder: '请选择', type: 'select', name: 'input', optuons: [{ label: '测试1', value: 0 }] },
        { label: '厂商名称', placeholder: '请输入', type: 'input', name: 'input' },
        { label: '采集数据类型', placeholder: '请选择', type: 'select', name: 'input', optuons: [{ label: '测试1', value: 0 }] },
        { label: 'IP地址', placeholder: '请输入', type: 'input', name: 'input' },
        { label: '监视方向', placeholder: '请输入', type: 'input', name: 'input' },
        { label: 'IPV6地址', placeholder: '请输入', type: 'input', name: 'input' },
        { label: '监视区域', placeholder: '请输入', type: 'input', name: 'input' },
        { label: '地球经度', placeholder: '请输入', type: 'input', name: 'input' },
        { label: '摄像机位置类型', placeholder: '请选择', type: 'select', name: 'input', optuons: [{ label: '测试1', value: 0 }] },
        { label: '地球纬度', placeholder: '请输入', type: 'input', name: 'input' },
        { label: '摄像机用途', placeholder: '请输入', type: 'input', name: 'input' },
        { label: '行政区划代码', placeholder: '请输入', type: 'input', name: 'input' },
        { label: '巡区对象', placeholder: '请输入', type: 'input', name: 'input' },
        { label: '地址名称', placeholder: '请输入', type: 'input', name: 'input' },
        {},
        { label: '公安机关名称', placeholder: '请输入', type: 'input', name: 'input' }
      ],
      // 搜索组件按钮属性
      searchBtn: [
        { name: '查询', type: 'search' },
        { name: '重置', type: 'reset' },
        { name: '添加', type: 'add' }
      ],
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
      },
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
.PerceptionPoint {
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
          justify-content: space-between;
          height: auto;
          .el-form-item {
            width: 45% !important;
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
</style>
