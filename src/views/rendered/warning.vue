<template>
  <div class="content">
    <div class="content-title">综合预警中心</div>
    <div class="content-char">
      <div class="char">
        <div class="char-title">区域巡防人员统计</div>
        <subtypeEchar />
      </div>
      <div class="char">
        <div class="char-title">巡防人员类型比例</div>
        <totalEchar />
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
            <el-link type="primary" @click="subscription(data.name)">订阅</el-link>
          </template>
        </tablein>
      </div>
      <div class="Pagin">
        <el-pagination :current-page="currentPage4" :page-sizes="[10]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="10" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
      </div>
      <el-dialog :title="deltitle" :visible.sync="delShow" center width="30%">
        <p v-if="deltitle === '删除'">确认要删除选中内容吗？删除后数据不可恢复哦！！</p>
        <p v-else>确认要订阅改预警信息吗？</p>
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
  </div>
</template>

<script>
import subtypeEchar from './components/subtypeEchar'
import totalEchar from './components/totalEchar'
import tablein from '@/components/Table/tablein'
import Elsearch from '@/components/search/index'
export default {
  components: {
    subtypeEchar,
    totalEchar,
    tablein,
    Elsearch
  },
  data() {
    return {
      title: '', // 弹出框标题
      deltitle: '', // 删除或上报弹出层标题
      delShow: false, // 删除或上报弹出层
      dialogShow: false, // 显示弹出框
      dialogData: {}, // 弹出框数据
      // 搜索框
      searchSettings: [
        { placeholder: '请选择预警类型', type: 'select', name: 'input', options: [{ label: '测试1', value: 0 }] },
        { placeholder: '请输入发起民警姓名', type: 'input', name: 'input' },
        { placeholder: '请输入发起民警编号', type: 'input', name: 'input' },
        { placeholder: '请输入行政区划代码', type: 'input', name: 'input' }
      ],
      // 弹出框
      dialogSettings: [
        { label: '预警类型', placeholder: '请选择', type: 'select', name: 'input', optuons: [{ label: '测试1', value: 0 }] },
        { label: '发起民警姓名', placeholder: '请输入', type: 'input', name: 'input' },
        { label: '预警时间', placeholder: '请输入', type: 'data', name: 'input' },
        { label: '发起民警编号', placeholder: '请输入', type: 'input', name: 'input' },
        { label: '预警级别', placeholder: '请选择', type: 'select', name: 'input', optuons: [{ label: '测试1', value: 0 }] },
        { label: '行政区划代码', placeholder: '请输入', type: 'input', name: 'input' },
        { label: '内容类型', placeholder: '请输入', type: 'select', name: 'input', optuons: [{ label: '测试1', value: 0 }] },
        {
          label: '是否订阅',
          placeholder: '请输入',
          type: 'select',
          name: 'input',
          optuons: [
            { label: '是', value: 0 },
            { label: '否', value: 1 }
          ]
        },
        { label: '预警内容', placeholder: '请输入', type: 'textarea', name: 'input' }
      ],
      // 搜索组件按钮属性
      searchBtn: [
        { name: '查询', type: 'search' },
        { name: '重置', type: 'reset' },
        { name: '添加', type: 'add' }
      ],
      tableData: {
        tableHeader: [
          {
            label: '序号',
            prop: 'cid',
            width: 50
          },
          {
            label: '预警类型',
            prop: 'types',
            width: 80
          },
          {
            label: '预警时间',
            prop: 'times',
            width: 80
          },
          {
            label: '预警级别',
            prop: 'level',
            width: 80
          },
          {
            label: '预警内容类型',
            prop: 'contenttype',
            width: 80
          },
          {
            label: '发起民警姓名',
            prop: 'name',
            width: 80
          },
          {
            label: '发起民警编号',
            prop: 'serial',
            width: 80
          },
          {
            label: '行政区划代码',
            prop: 'code',
            width: 80
          },
          {
            label: '是否订阅',
            prop: 'whether',
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
            types: '感知比对预警',
            times: '2020-10-10-10:25',
            level: '二级',
            contenttype: '人脸识别预警',
            name: '张凤',
            serial: '000125',
            code: '431000212542',
            whether: '已订阅'
          },
          {
            cid: '1',
            types: '感知比对预警',
            times: '2020-10-10-10:25',
            level: '二级',
            contenttype: '人脸识别预警',
            name: '张凤',
            serial: '000125',
            code: '431000212542',
            whether: '已订阅'
          },
          {
            cid: '1',
            types: '感知比对预警',
            times: '2020-10-10-10:25',
            level: '二级',
            contenttype: '人脸识别预警',
            name: '张凤',
            serial: '000125',
            code: '431000212542',
            whether: '已订阅'
          },
          {
            cid: '1',
            types: '感知比对预警',
            times: '2020-10-10-10:25',
            level: '二级',
            contenttype: '人脸识别预警',
            name: '张凤',
            serial: '000125',
            code: '431000212542',
            whether: '已订阅'
          },
          {
            cid: '1',
            types: '感知比对预警',
            times: '2020-10-10-10:25',
            level: '二级',
            contenttype: '人脸识别预警',
            name: '张凤',
            serial: '000125',
            code: '431000212542',
            whether: '已订阅'
          }
        ]
      }
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
    // 订阅
    subscription() {
      this.deltitle = '订阅'
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
    .scope {
      width: 100%;
      height: 50px;
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
    .el-dialog__wrapper {
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
            .el-form-item:last-child {
              width: 80% !important;
              margin-right: 0;
              margin-bottom: 10px;
            }
            .el-form-item {
              width: 40% !important;
              margin-right: 0;
              margin-bottom: 10px;
              .el-form-item__label {
                color: #fff;
              }
              .el-form-item__content {
                width: auto;
                .el-textarea {
                  input::-webkit-input-placeholder,
                  textarea::-webkit-input-placeholder {
                    color: #45f4fe !important;
                  }

                  input:-moz-placeholder,
                  textarea:-moz-placeholder {
                    color: #45f4fe !important;
                  }

                  input::-moz-placeholder,
                  textarea::-moz-placeholder {
                    color: #45f4fe !important;
                  }

                  input:-ms-input-placeholder,
                  textarea:-ms-input-placeholder {
                    color: #45f4fe !important;
                  }
                }
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
}
</style>
