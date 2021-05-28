<template>
  <div class="Perception_content">
    <div class="scope">
      <Elsearch :search-settings="searchSettings" :search-btn="searchBtn" :form-data="formData" @add="add" @search="search" @handleChange="handleChange" @handleRemove="handleRemove" />
    </div>
    <div class="table">
      <tablein :data="tableData">
        <template #operation="{data}">
          <!-- <el-link type="primary" @click="details(data.name)">详情</el-link> -->
          <el-link type="primary" @click="modify(data.name)">修改</el-link>
          <el-link type="primary" @click="del(data.name)">删除</el-link>
        </template>
      </tablein>
    </div>
    <div class="Pagin">
      <el-pagination :current-page="currentPage4" :page-sizes="[10]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="10" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>
    <el-dialog title="删除" :visible.sync="delShow" center width="30%">
      <p>确认要删除选中内容吗？删除后数据不可恢复哦！！</p>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="confirmDel">确认</el-button>
          <el-button @click="delShow = false">取消</el-button>
        </span>
      </template>
    </el-dialog>
    <el-dialog :title="title" :visible.sync="dialogShow" center width="40%">
      <Elsearch :search-settings="dialogSettings" :form-data="dialogData" />
      <template v-if="isBottomBtn === true" #footer>
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
        { placeholder: '请输入姓名', type: 'input', name: 'input' },
        { placeholder: '请输入机关公安名称', type: 'input', name: 'input' },
        { placeholder: '请选择警务站类型', type: 'input', name: 'input', optuons: [{ label: '测试1', value: 0 }] },
        { placeholder: '请输入行政区划代码', type: 'input', name: 'input' }
      ],
      // 弹出框
      dialogSettings: [
        { label: '警务站名称', type: 'input', name: 'input' },
        { label: '行政区划代码', type: 'input', name: 'input' },
        { label: '地球经度', type: 'input', name: 'input' },
        { label: '地球纬度', type: 'input', name: 'input' },
        { label: '区划内详细地址', type: 'input', name: 'input' },
        { label: '建立时间', type: 'input', name: 'input' },
        { label: '公安机关名称', type: 'input', name: 'input' },
        { label: '警务站类型', type: 'input', name: 'select', optuons: [{ label: '测试1', value: 0 }] },
        { label: '对讲机编号', type: 'input', name: 'input' }
      ],
      // 搜索组件按钮属性
      searchBtn: [
        { name: '搜索', type: 'search' },
        { name: '重置', type: 'reset' },
        { name: '添加', type: 'add' },
        { name: '导入', type: 'file' }
      ],
      tableData: {
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
      },
      title: '', // 弹出框标题
      deltitle: '', // 删除或上报弹出层标题
      delShow: false, // 删除或上报弹出层
      dialogShow: false, // 显示弹出框
      dialogData: {}, // 弹出框数据
      isBottomBtn: false
    }
  },
  methods: {
    search() {},
    reset() {},
    add() {
      this.title = '添加'
      this.dialogShow = true
      this.isBottomBtn = true
    },
    details() {
      this.title = '详情'
      this.dialogShow = true
      this.isBottomBtn = false
    },
    modify() {
      this.title = '修改'
      this.dialogShow = true
      this.isBottomBtn = true
    },
    // 导入
    // 上传文件时处理方法
    // eslint-disable-next-line no-unused-vars
    handleChange(file, fileList) {
      console.log(file, fileList)
      const objFile = file.raw
      const objStr = /\.(xlsx|xls|csv|vcf|txt)$/
      if (!objStr.test(objFile.name)) {
        this.$alert('选择的文件格式不对，请选对格式1', '警告', {
          confirmButtonText: '确定'
        })
        return false
      } else {
        this.suffix = objFile.name.split('.')[1]
      }
      if (typeof FileReader === 'undefined') {
        // 用来判断浏览器是否支持 FileReader
        this.$message({
          type: 'info',
          message: '您的浏览器不支持文件读取。'
        })
      }
      this.thisObj = objFile
      console.log('选中的xlsx文件', this.thisObj.name)
    },
    // 移除文件的操作方法
    // eslint-disable-next-line no-unused-vars
    handleRemove(file, fileList) {
      this.fileTemp = null
    },
    // 删除
    del() {
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
.Perception_content {
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
</style>
