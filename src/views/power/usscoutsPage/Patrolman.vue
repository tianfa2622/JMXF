<template>
  <div class="Patrolman_content">
    <div class="scope">
      <Elsearch ref="Elsearch" :search-settings="searchSettings" :search-btn="searchBtn" :form-data="formData" @add="add" @search="search" @handleChange="handleChange" @handleRemove="handleRemove" />
    </div>
    <div class="table">
      <tablein :data="tableData">
        <template #operation="{data}">
          <el-link type="primary" @click="details(data.name)">详情</el-link>
          <el-link type="primary" @click="modify(data.name)">修改</el-link>
          <el-link type="primary" @click="del(data.name)">删除</el-link>
          <el-link type="primary" @click="Ceiling(data.name)">力量上报</el-link>
        </template>
      </tablein>
    </div>
    <div class="Pagin">
      <el-pagination :current-page="currentPage4" :page-sizes="[10]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="10" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>
    <el-dialog :title="deltitle" :visible.sync="delShow" center width="30%">
      <p v-if="deltitle === '删除'">确认要删除选中内容吗？删除后数据不可恢复哦！！</p>
      <p v-else>确认要上报该巡防力量吗吗？</p>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="confirmDel">确认</el-button>
          <el-button @click="delShow = false">取消</el-button>
        </span>
      </template>
    </el-dialog>
    <el-dialog :title="title" :visible.sync="dialogShow" class="dialog_form">
      <el-form :model="form" :disabled="disable" :rules="rules" label-width="auto">
        <div class="form_left">
          <el-form-item label="姓名" :prop="name">
            <el-input v-model="form.name" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="行政区划代码" :prop="name">
            <el-input v-model="form.name" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="巡逻人员类别" :prop="name">
            <el-select v-model="form.name" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
            </el-select>
          </el-form-item>
          <div class="form_border">
            <p class="form_p_color">巡逻民警</p>
            <el-form-item label="警员编号" :prop="name">
              <el-input v-model="form.name" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="联系电话" :prop="name">
              <el-input v-model="form.name" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="警衔与文职级别" :prop="name">
              <el-input v-model="form.name" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="公安机关机构" :prop="name">
              <el-select v-model="form.name" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="公安机关名称" :prop="name">
              <el-input v-model="form.name" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="公安机关部门类别" :prop="name">
              <el-select v-model="form.name" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
              </el-select>
            </el-form-item>
          </div>
          <el-form-item label="地球经度" :prop="name">
            <el-input v-model="form.name" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="地球纬度" :prop="name">
            <el-input v-model="form.name" placeholder="请输入"></el-input>
          </el-form-item>
        </div>
        <div class="form_right">
          <el-form-item label="公民身份号码" :prop="name">
            <el-input v-model="form.name" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="年龄" :prop="name">
            <el-input v-model="form.name" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="民族" :prop="name">
            <el-input v-model="form.name" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="籍贯省市县" :prop="name">
            <el-input v-model="form.name" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="性别" :prop="name">
            <el-select v-model="form.name" placeholder="请选择">
              <el-option label="男" :value="1"> </el-option>
              <el-option label="女" :value="0"> </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="地址名称" :prop="name">
            <el-input v-model="form.name" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="学历" :prop="name">
            <el-input v-model="form.name" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="婚姻状况" :prop="name">
            <el-input v-model="form.name" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="政治面貌" :prop="name">
            <el-input v-model="form.name" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="对讲机编号" :prop="name">
            <el-input v-model="form.name" placeholder="请输入"></el-input>
          </el-form-item>
        </div>
      </el-form>
      <div v-if="isBottomBtn" slot="footer" class="dialog-footer">
        <el-button @click="dialogShow = false">取 消</el-button>
        <el-button type="primary" @click="dialogShow = false">确 定</el-button>
      </div>
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
        { placeholder: '请输入编号', type: 'input', name: 'input' },
        { placeholder: '请选择巡逻人员类别', type: 'input', name: 'input', optuons: [{ label: '测试1', value: 0 }] },
        { placeholder: '请输入行政区划代码', type: 'input', name: 'input' }
      ],
      // 搜索组件按钮属性
      searchBtn: [
        { name: '搜索', type: 'search' },
        { name: '重置', type: 'reset' },
        { name: '添加', type: 'add' },
        { name: '导入', type: 'file', limit: 1 }
      ],
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
      title: '', // 弹出框标题
      deltitle: '', // 删除或上报弹出层标题
      delShow: false, // 删除或上报弹出层
      dialogShow: false, // 显示弹出框
      // dialogData: {}, // 弹出框数据
      isBottomBtn: false, // 弹出层底部按钮
      options: [
        { label: '测试1', value: 1 },
        { label: '测试2', value: 0 }
      ],
      form: {
        name: null
      },
      // 规则
      rules: {
        name: []
      },
      fileData: [],
      outputs: []
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
      this.fileData = file // 保存当前选择文件
      console.log(this.XLSX)
      this.readExcel() // 调用读取数据的方法
    },
    // 读取数据
    readExcel(e) {
      console.log(e)
      const that = this
      const files = that.fileData
      if (!files) {
        // 如果没有文件
        this.$message.info('请上传文件！')
        return false
      } else if (!/\.(xls|xlsx)$/.test(files.name.toLowerCase())) {
        this.$message.error('上传格式不正确，请上传xls或者xlsx格式')
        return false
      }
      const fileReader = new FileReader()
      fileReader.onload = ev => {
        try {
          const data = ev.target.result
          const workbook = this.XLSX.read(data, {
            type: 'binary'
          })
          if (workbook.SheetNames.length >= 1) {
            this.$message({
              message: '导入数据表成功',
              showClose: true,
              type: 'success'
            })
          }
          const wsname = workbook.SheetNames[0] // 取第一张表
          const ws = this.XLSX.utils.sheet_to_json(workbook.Sheets[wsname]) // 生成json表格内容
          that.outputs = [] // 清空接收数据
          for (let i = 0; i < ws.length; i++) {
            // 健名为绑定 el 表格的关键字，值则是ws[i][对应表头名]
            const sheetData = {
              cid: ws[i]['序号'],
              username: ws[i]['姓名'],
              areanumber: ws[i]['行政区划代码'],
              types: ws[i]['巡逻人员类别'],
              number: ws[i]['编号'],
              phone: ws[i]['联系电话'],
              titleLevel: ws[i]['职称级别'],
              sex: ws[i]['性别'],
              experience: ws[i]['专业、经验能力'],
              report: ws[i]['是否上报']
            }
            that.tableData.tableList.unshift(sheetData)
          }
          this.$refs.Elsearch.$refs.upload.value = ''
          this.fileData = []
        } catch (error) {
          return false
        }
      }
      // 如果为原生 input 则应是 files[0]
      fileReader.readAsBinaryString(files.raw)
    },
    // 移除文件的操作方法
    // eslint-disable-next-line no-unused-vars
    handleRemove(file, fileList) {
      this.fileData = null
    },

    // 力量上报
    Ceiling() {
      this.deltitle = '力量上报'
      this.delShow = true
    },
    // 删除
    del() {
      this.deltitle = '删除'
      this.delShow = true
      // console.log(this.$refs.Elsearch.$refs.inputer)
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
.Patrolman_content {
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
          justify-content: space-between;
          height: auto;
          .form_left {
            width: 50%;
            .el-form-item {
              width: 70% !important;
              margin-right: 0;
              margin-bottom: 10px;
              /deep/.el-form-item__label {
                color: #fff;
              }
              /deep/.el-form-item__content {
                width: auto;
              }
            }
            .form_p_color {
              color: #fa9728;
              margin-bottom: 10px;
            }
            .form_border {
              border: 1px solid #2b444b;
              background-color: rgba(0, 0, 0, 0.2);
              padding: 10px 10px;
              border-radius: 4px;
              margin-bottom: 10px;
            }
          }
          .form_right {
            width: 50%;
            .el-form-item {
              width: 70% !important;
              margin-right: 0;
              margin-bottom: 10px;
              /deep/.el-form-item__label {
                color: #fff;
              }
              /deep/.el-form-item__content {
                width: auto;
              }
            }
          }
        }
      }
      .el-dialog__footer {
        background-color: #0d2e36 !important;
        .dialog-footer {
          text-align: center;
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
