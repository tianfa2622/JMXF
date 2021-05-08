<template>
  <el-dialog :title="title" :visible="isShow" center @close="close">
    <el-form ref="dialogForm" :model="form" :rules="rules" label-width="auto">
      <el-form-item :label="item.label" :prop="item.name" v-for="(item, index) in dialogs" :key="index">
        <el-input v-if="item.type==='input'" v-model="form[item.name]" :readonly="readOnly" :type="item.type"></el-input>
        <el-input v-if="item.type==='password'" type="password" v-model="form[item.name]" :readonly="readOnly" autocomplete="off"></el-input>
        <el-input v-model.number="form[item.name]" :placeholder="item.placeholder" :min="0" type="number" onkeyup="value=value.replace(/[^\d]/g,'')" :readonly="readOnly" v-if="item.type === 'number'"></el-input>
        <el-select clearable v-else-if="item.type === 'select'" @change="item.selectChanged?selectChanged(form[item.name],item.options):''" v-model="form[item.name]" :disabled="readOnly" :placeholder="item.placeholder">
          <el-option v-for="op in item.options" :label="op.label" :value="op.value" :key="op.value"></el-option>
        </el-select>
        <el-cascader
          v-else-if="item.type === 'cascader'" :placeholder="item.placeholder" :disabled="readOnly"
          v-model="form[item.name]" :props="item.props"
          :options="item.options"></el-cascader>
        <el-input v-if="item.type==='textarea'" v-model="form[item.name]" :readonly="item.disable ? false : readOnly " :rows="3" resize="none" :type="item.type"></el-input>
        <el-date-picker v-else-if="item.type === 'datetime'" value-format="yyyy-MM-dd HH:mm:ss"  v-model="form[item.name]" type="datetime" placeholder="选择日期时间" :readonly="readOnly">
        </el-date-picker>
        <el-date-picker v-else-if="item.type === 'date'" value-format="yyyy-MM-dd" v-model="form[item.name]" type="date"
        placeholder="选择日期" :readonly="readOnly">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="" v-if="uploadBtn == true ? true : false">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList"
        >
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-form-item>
    </el-form>
    <Eltable v-if="tableShow" :tableHead="tableHead" :tableSettings="tableSettings" :tableDatas="tableDatas" @detailed="detailed" :iSloading="iSloading" @sizeChange="sizeChange" @pageChange="pageChange" :pagination="pagination"></Eltable>
    <el-form class="elFormDialog" v-if="elFormShow" ref="form" :model="form" label-width="auto">
      <el-form-item label="审批人">
        <el-input v-model="form.name" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="审批时间">
        <el-date-picker v-model="form.time" type="datetime" placeholder="选择日期时间"> </el-date-picker>
      </el-form-item>
      <el-form-item label="审批意见">
        <el-button type="primary">审批通过</el-button>
        <el-button type="primary" @click="examineNo">审批不通过</el-button>
        <el-input type="textarea" v-model="form.name" placeholder="不通过原因" ref="textarea"></el-input>
      </el-form-item>
    </el-form>
    <el-dialog ref="innerDialogForm" width="30%" center :title="innerVisibleTitle" :visible.sync="innerDialog" append-to-body @close="innerClose">
      <el-form ref="innerform" :model="innerform" label-width="auto">
        <el-form-item :label="item.label" v-for="(item, index) in innerVisibleDiologs" :key="index">
          <el-input v-model="innerform[item.name]" :readonly="readOnly" :type="item.type"></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
    <span slot="footer" class="dialog-footer" v-if="isDetermine">
      <el-button type="primary" @click="SureToSubmit">确 定</el-button>
      <el-button @click="close" class="closeStyle">取 消</el-button>
    </span>
  </el-dialog>
</template>
<script>
import Eltable from '@/components/table'
export default {
  props: ['title', 'isShow', 'readOnly', 'dialogs', 'tableHead', 'tableSettings', 'tableDatas', 'elFormShow', 'uploadBtn', 'innerVisible', 'innerVisibleDiologs', 'innerVisibleTitle', 'isDetermine', 'dialogData', 'rules', 'iSloading', 'pagination', 'innerDialogFormData'],
  data: () => ({
    show: false,
    innerDialog: false,
    tableShow: false,
    // Determine: false,
    form: { },
    innerform: {},
    fileList: []
  }),
  created () {
  },
  mounted() {
  },
  methods: {
    close (e) {
      this.$emit('close', false)
    },
    innerClose (e) {
      this.$emit('innerClose', false)
    },
    selectChanged(code, data) {
      this.$emit('selectChanged', code, data)
    },
    isdialogData() {
      if (this.dialogData !== undefined) {
        this.form = { ...this.dialogData }
      }
    },
    isInnerDialogFormData() {
      if (this.innerDialogFormData) {

      }
    },
    isTable () {
      if (this.tableHead !== undefined) {
        this.tableShow = true
      } else {
        this.tableShow = false
      }
    },
    SureToSubmit() {
      this.$emit('Submit', this.form)
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    detailed (e) {
      this.$emit('detailed', e)
    },
    sizeChange(val) {
      this.$emit('sizeChange', val)
    },
    pageChange(val) {
      this.$emit('pageChange', val)
    }
  },
  watch: {
    isShow (v) {
      this.show = this.isShow
      if (v === true) {
        this.isTable()
        this.isdialogData()
      }
    },
    innerVisible (val) {
      this.innerDialog = this.innerVisible
      if (this.innerDialog === true) {
        this.innerform = { ...this.innerDialogFormData }
      }
    },
    // Determine() {
    //   this.Determine = this.isDetermine
    // },
    innerVisibleDiologs (val) {
      console.log(val)
    }
  },
  components: { Eltable }
}
</script>
<style lang="scss">
.el-dialog__wrapper {
  .el-dialog {
    background-color: rgb(2, 16, 47);
    .el-dialog__header {
      background-color: rgb(2, 25, 60);
      .el-dialog__title {
        color: rgb(106, 239, 244);
      }
    }
    .el-dialog__body {
      .el-form {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        height: auto;
        .el-form-item {
          width: 40% !important;
          margin-right: 0;
          margin-bottom: 0.2rem;
          .el-form-item__label {
            color: #fff;
          }
          .el-form-item__content {
            width: auto;
            .el-input {
              width: 100%;
              input {
                background-color: rgb(5, 33, 73);
                border: none;
              }
            }
          }
        }
      }
    }
    .dialog-footer{
      width: 100%;
      text-align: end;
      .closeStyle{
        background-color:rgba($color: #000000, $alpha: 0);
        border-color:#02102F;
      }
    }
  }
}
</style>
