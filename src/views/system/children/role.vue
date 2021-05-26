<template>
  <div class="system_content">
    <div class="row-content">
      <div class="col-search">
        <Elsearch :search-settings="searchSettings" :search-btn="searchBtn" :form-data="formData" @add="add" @search="search" />
      </div>
      <div class="col-table">
        <Tablein :data="tableData">
          <template #operation="{data}">
            <el-link type="primary" @click="modify(data.name)">修改</el-link>
            <el-link type="primary" @click="del(data.name)">删除</el-link>
          </template>
        </Tablein>
        <div class="Pagin">
          <el-pagination :current-page="currentPage" :page-sizes="[10, 15, 20, 15]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="10" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        </div>
      </div>
    </div>
    <el-dialog :title="title" width="35%" :visible.sync="dialogFormVisible">
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="auto">
        <el-form-item label="角色名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="设置权限" prop="region">
          <template>
            <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">
              分类管理
            </el-checkbox>
            <el-checkbox-group v-model="permissions" style="margin-left:20px;" @change="handleCheckedChange">
              <el-checkbox v-for="city in cities" :key="city.id" :label="city.id">{{ city.label }}</el-checkbox>
            </el-checkbox-group>
          </template>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
    <el-dialog :title="deltitle" :visible.sync="delShow" center width="30%">
      <p>
        确认删除该角色吗？<br />
        删除前请检查该角色中已无用户，否则无法删除！
      </p>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="confirmDel">确认</el-button>
          <el-button @click="delShow = false">取消</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import Elsearch from '@/components/search/index'
import Tablein from '@/components/Table/tablein.vue'
export default {
  components: { Elsearch, Tablein },
  data() {
    return {
      isIndeterminate: false,
      permissions: [],
      cities: [
        { id: 1, label: '修改/添加' },
        { id: 2, label: '删除' }
      ],
      checkAll: false,
      title: '', // 弹出层标题
      dialogFormVisible: false, // 是否显示弹出层
      // 弹出层数据
      ruleForm: {},
      // 弹出层规则
      rules: {},
      deltitle: '', // 删除弹出层标题
      delShow: false, // 是否显示删除弹出层
      // 搜索框
      searchSettings: [{ placeholder: '请输入角色名称', type: 'input', name: 'input' }],
      // 搜索组件按钮属性
      searchBtn: [
        { name: '查询', type: 'search' },
        { name: '新增', type: 'add' }
      ],
      formData: { input: '' },
      // 表格数据属性
      tableData: {
        tableHeader: [
          {
            label: '序号',
            prop: 'input'
          },
          {
            label: '角色名称',
            prop: 'input'
          },
          {
            label: '账号数量',
            prop: 'input'
          },
          {
            label: '权限',
            type: 'slot',
            slotName: 'operation'
          }
        ],
        tableList: Array(5).fill({
          input: '123'
        })
      },
      currentPage: 1
    }
  },
  methods: {
    // 添加按钮
    add() {
      this.title = '新增'
      this.dialogFormVisible = true
    },
    // 搜索按钮
    search() {},
    // 表格按钮
    modify() {
      this.title = '修改'
      this.dialogFormVisible = true
    },
    // 弹出框确认按钮
    confirm() {
      this.dialogFormVisible = false
    },
    // 弹出框取消按钮
    cancel() {
      this.dialogFormVisible = false
    },
    // 删除
    del() {
      this.deltitle = '删除'
      this.delShow = true
    },
    // 删除确认按钮
    confirmDel() {
      this.delShow = false
    },
    // 切换当前页展示条数
    handleSizeChange(val) {
      console.log(val)
    },
    // 切换分页
    handleCurrentChange(val) {
      console.log(val)
    },
    handleCheckAllChange(val) {
      console.log(val)
      this.checkAll = !!this.checkAll // 判断全选
      // 通过map绑定要去的值
      const checked = this.cities.map(function(item) {
        return item.id
      })
      this.permissions = this.checkAll ? checked : [] // 是否被选中
      this.isIndeterminate = false
    },
    handleCheckedChange(value) {
      console.log(value)
      const checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      // 根据选中的数量定义全选的状态
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    }
  }
}
</script>

<style lang="scss" scoped>
.system_content {
  width: 100%;
  height: 100%;
  background-color: transparent;
  .row-content {
    display: flex;
    flex-direction: column;
    .col-search {
      width: 100%;
    }
    .col-table {
      margin-top: 20px;
      width: 100%;
      height: calc(100% - 20px);
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
      .el-link:nth-child(n + 2) {
        margin-left: 20px;
      }
      .resetBtn {
        margin-left: 0px !important;
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
        p {
          color: #fff;
          text-align: center;
        }
        .el-form {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          height: auto;
          .el-form-item {
            width: 80% !important;
            margin-right: 20px;
            margin-bottom: 10px;
            .el-form-item__label {
              color: #fff;
            }
            .el-form-item__content {
              width: auto;
              .el-checkbox__label {
                color: #45f4fe;
              }
            }
          }
          .btn {
            .el-button {
              padding: 12px 30px;
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
