<template>
  <el-dialog :title="title" :visible="isShow" center @close="close">
    <el-form ref="dialogForm" :model="form" :rules="rules" label-width="auto">
      <el-form-item v-for="(item, index) in dialogs" :key="index" :label="item.label" :prop="item.name">
        <el-input v-if="item.type === 'input'" v-model="form[item.name]" :readonly="readOnly" :type="item.type"></el-input>
        <el-input v-if="item.type === 'password'" v-model="form[item.name]" type="password" :readonly="readOnly" autocomplete="off"></el-input>
        <el-input v-if="item.type === 'number'" v-model.number="form[item.name]" :placeholder="item.placeholder" :min="0" type="number" onkeyup="value=value.replace(/[^\d]/g,'')" :readonly="readOnly"></el-input>
        <el-select v-else-if="item.type === 'select'" v-model="form[item.name]" clearable :disabled="readOnly" :placeholder="item.placeholder" @change="item.selectChanged ? selectChanged(form[item.name], item.options) : ''">
          <el-option v-for="op in item.options" :key="op.value" :label="op.label" :value="op.value"></el-option>
        </el-select>
        <el-cascader v-else-if="item.type === 'cascader'" v-model="form[item.name]" :placeholder="item.placeholder" :disabled="readOnly" :props="item.props" :options="item.options"></el-cascader>
        <el-input v-if="item.type === 'textarea'" v-model="form[item.name]" :readonly="item.disable ? false : readOnly" :rows="3" resize="none" :type="item.type"></el-input>
        <el-date-picker v-else-if="item.type === 'datetime'" v-model="form[item.name]" value-format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="选择日期时间" :readonly="readOnly"> </el-date-picker>
        <el-date-picker v-else-if="item.type === 'date'" v-model="form[item.name]" value-format="yyyy-MM-dd" type="date" placeholder="选择日期" :readonly="readOnly"> </el-date-picker>
      </el-form-item>
      <el-form-item v-if="uploadBtn == true ? true : false" label="">
        <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-form-item>
    </el-form>
    <span v-if="isDetermine" slot="footer" class="dialog-footer">
      <el-button type="primary" @click="SureToSubmit">确 定</el-button>
      <el-button class="closeStyle" @click="close">取 消</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['title', 'isShow', 'readOnly', 'dialogs', 'uploadBtn', 'isDetermine', 'rules'],
  data: () => ({
    show: false,
    form: {},
    // Determine: false,
    fileList: []
  }),
  watch: {
    // eslint-disable-next-line no-unused-vars
    isShow(v) {
      this.show = this.isShow
    }
    // Determine() {
    //   this.Determine = this.isDetermine
    // },
  },
  created() {},
  mounted() {},
  methods: {
    // eslint-disable-next-line no-unused-vars
    close(e) {
      this.$emit('close', false)
    },
    selectChanged(code, data) {
      this.$emit('selectChanged', code, data)
    },
    SureToSubmit() {
      this.$emit('Submit', this.form)
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    // eslint-disable-next-line no-unused-vars
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
  }
}
</script>
<style lang="scss" scoped>
.el-dialog__wrapper {
  .el-dialog {
    background-color: rgb(2, 16, 47);
    .el-dialog__header {
      background-color: #0d2e36 !important;
      border-bottom: 1px solid #20505c;
      .el-dialog__title {
        color: #ffffff !important;
      }
    }
    .el-dialog__body {
      background-color: #0d2e36 !important;
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
                background-color: rgba(5, 60, 67, 1);
                color: #00f3ff;
                border: none;
              }
            }
            .el-select {
              width: 100%;
              .el-input {
                width: 100%;
                input {
                  background-color: rgba(5, 60, 67, 1);
                  color: #00f3ff;
                  // border: none;
                }
              }
            }
            .el-textarea {
              width: 100%;
              textarea {
                width: 100%;
                background-color: rgba(5, 60, 67, 1);
                color: #00f3ff;
                // border: none;
                // color: #fff;
              }
              textarea::placeholder {
                color: #fff;
              }
            }
            .el-date-editor {
              width: 100%;
              background-color: rgba(5, 60, 67, 1);
              // color: #00f3ff;
              // border: none;
              input {
                background-color: rgba(5, 60, 67, 1);
                color: #00f3ff;
                // border: none;
              }
              .el-input__icon,
              .el-range-separator {
                color: #fff;
              }
            }
          }
        }
      }
    }
    .dialog-footer {
      width: 100%;
      text-align: center;
      background-color: #0d2e36 !important;
      // .closeStyle {
      //   background-color: rgba($color: #000000, $alpha: 0);
      //   border-color: #02102f;
      // }
      .el-button {
        padding: 12px 40px;
        background-color: #0e3c42;
        color: #3fdee7;
        border-color: #797979;
      }
    }
  }
}
</style>
