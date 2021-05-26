<template>
  <div class="content">
    <div class="content-title">大屏展示控制</div>
    <div class="content-footage">
      <div class="footage-title">实时视频画面</div>
      <div class="footage-main">
        <div class="main-left">
          <el-input v-model="input" placeholder="请输入地点" />
          <el-button>搜索</el-button><br />
          <el-select v-model="value" placeholder="芙蓉区"> <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" /> </el-select><br />
          <el-select v-model="value" placeholder="万家丽地铁站"> <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" /> </el-select><br />
          <div class="multi-select">
            <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</el-checkbox>
            <div style="margin: 15px 0" />
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
              <el-checkbox v-for="city in cities" :key="city" :label="city">{{ city }}</el-checkbox>
            </el-checkbox-group>
          </div>
          <div class="buttons">
            <el-button>确定</el-button>
            <el-button>重置</el-button>
          </div>
        </div>
        <div class="main-right">
          <div class="right-button">
            <el-button @click="planManagement">预案管理</el-button>
          </div>
          <div class="right-main">
            <div class="main-six">
              <p>万家丽地铁站-1号摄像头 <span>● 正常</span></p>
              <img src="../../assets/six.jpg" />
              <el-button @click="historicalVideo">历史视频录像</el-button>
              <span
                style="
                  color: #fff;
                  font-size: 14px;
                  float: right;
                  padding-top: 10px;
                "
                >万家丽地铁站</span
              >
            </div>
            <div class="main-six">
              <p>万家丽地铁站-1号摄像头 <span>● 正常</span></p>
              <img src="../../assets/six.jpg" />
              <el-button @click="historicalVideo">历史视频录像</el-button>
              <span
                style="
                  color: #fff;
                  font-size: 14px;
                  float: right;
                  padding-top: 10px;
                "
                >万家丽地铁站</span
              >
            </div>
            <div class="main-six">
              <p>万家丽地铁站-1号摄像头 <span>● 正常</span></p>
              <img src="../../assets/six.jpg" />
              <el-button @click="historicalVideo">历史视频录像</el-button>
              <span
                style="
                  color: #fff;
                  font-size: 14px;
                  float: right;
                  padding-top: 10px;
                "
                >万家丽地铁站</span
              >
            </div>
            <div class="main-six">
              <p>万家丽地铁站-1号摄像头 <span>● 正常</span></p>
              <img src="../../assets/six.jpg" />
              <el-button @click="historicalVideo">历史视频录像</el-button>
              <span
                style="
                  color: #fff;
                  font-size: 14px;
                  float: right;
                  padding-top: 10px;
                "
                >万家丽地铁站</span
              >
            </div>
            <div class="main-six">
              <p>万家丽地铁站-1号摄像头 <span>● 正常</span></p>
              <img src="../../assets/six.jpg" />
              <el-button @click="historicalVideo">历史视频录像</el-button>
              <span
                style="
                  color: #fff;
                  font-size: 14px;
                  float: right;
                  padding-top: 10px;
                "
                >万家丽地铁站</span
              >
            </div>
            <div class="main-six">
              <p>万家丽地铁站-1号摄像头 <span>● 正常</span></p>
              <img src="../../assets/six.jpg" />
              <el-button @click="historicalVideo">历史视频录像</el-button>
              <span
                style="
                  color: #fff;
                  font-size: 14px;
                  float: right;
                  padding-top: 10px;
                "
                >万家丽地铁站</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-map">
      <div class="footage-title">电子地图</div>
      <div class="map-select">
        选择区域：
        <el-select v-model="value" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <el-button>搜索</el-button>
      </div>
      <div class="map">
        <pictureMap />
      </div>
    </div>
    <el-dialog :title="title" :visible.sync="dialogShow" center width="50%">
      <div class="table">
        <el-button @click="add">添加</el-button>
        <tablein :data="tableDatatwo" class="MyElTable">
          <template #operation="{data}">
            <el-link v-if="title === '预案管理'" type="primary" @click="modify(data.name)">修改</el-link>
            <el-link v-if="title === '预案管理'" type="primary" @click="del(data.name)">删除</el-link>
            <el-link v-if="title === '历史视频录像'" type="primary" @click="Replay(data.name)">回放</el-link>
          </template>
        </tablein>
      </div>
      <div class="Pagin">
        <el-pagination :current-page="currentPage4" :page-sizes="[10]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="10" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
      </div>
      <el-dialog width="35%" :title="innerTitle" :visible.sync="innerVisible" append-to-body center>
        <el-form ref="form" :model="form" label-width="auto">
          <el-form-item label="预案名称">
            <el-input v-model="form.name" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="播放时长">
            <el-input v-model="form.name" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="选择区域">
            <el-select v-model="form.name" placeholder="请选择区域">
              <el-option label="芙蓉区" value="shanghai"></el-option>
            </el-select>
            <el-select v-model="form.region" style="margin-left:10px" placeholder="请选择地铁站">
              <el-option label="万家丽地铁站" value="shanghai"></el-option>
              <el-option label="景泰广场地铁站" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="选择摄像头">
            <div class="multi-select">
              <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="city in cities" :key="city" :label="city">{{ city }}</el-checkbox>
              </el-checkbox-group>
              <div class="border" />
              <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选/全不选</el-checkbox>
            </div>
          </el-form-item>
          <el-form-item label="是否启用预案">
            <el-radio-group v-model="form.name">
              <el-radio label="是"></el-radio>
              <el-radio label="否"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="innerConfirm">保存</el-button>
            <el-button @click="innerCancel">关闭</el-button>
          </span>
        </template>
      </el-dialog>
      <el-dialog title="删除" :visible.sync="delShow" center width="30%" append-to-body>
        <p>确认要删除选中内容吗？删除后数据不可恢复哦！！</p>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="confirmDel">确认</el-button>
            <el-button @click="delShow = false">取消</el-button>
          </span>
        </template>
      </el-dialog>
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
import tablein from '@/components/Table/tablein'
import pictureMap from './components/pictureMap'
const cityOptions = ['万家丽地铁站-1号摄像头', '万家丽地铁站-1号摄像头', '万家丽地铁站-1号摄像头', '万家丽地铁站-1号摄像头', '万家丽地铁站-1号摄像头']
export default {
  components: {
    pictureMap,
    tablein
  },
  data() {
    return {
      title: '', // 弹出框标题
      delShow: false, // 删除或上报弹出层
      dialogShow: false, // 显示弹出框
      dialogData: {}, // 弹出框数据
      innerTitle: '',
      innerVisible: false,
      checkAll: false,
      checkedCities: ['上海', '北京'],
      cities: cityOptions,
      isIndeterminate: true,
      form: {
        name: null
      },
      tableDatatwo: {
        tableHeader: [],
        tableList: Array(5).fill({ input: '111' })
      },
      tableHeader1: [
        {
          label: '序号',
          prop: 'input',
          width: 50
        },
        {
          label: '预案名称',
          prop: 'input'
        },
        {
          label: '添加时间',
          prop: 'input'
        },
        {
          label: '播放时长(分钟)',
          prop: 'input'
        },
        {
          label: '设备数量',
          prop: 'input'
        },
        {
          label: '操作',
          type: 'slot',
          width: 150,
          slotName: 'operation'
        }
      ],
      tableHeader2: [
        {
          label: '序号',
          prop: 'input',
          width: 50
        },
        {
          label: '视频名称',
          prop: 'input'
        },
        {
          label: '上传时间',
          prop: 'input'
        },
        {
          label: '视频时间段',
          prop: 'input'
        },
        {
          label: '视频时长(分钟)',
          prop: 'input'
        },
        {
          label: '所属设备',
          prop: 'input'
        },
        {
          label: '操作',
          type: 'slot',
          width: 150,
          slotName: 'operation'
        }
      ]
    }
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange(value) {
      const checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    },
    planManagement() {
      this.title = '预案管理'
      this.dialogShow = true
      this.tableDatatwo.tableHeader = this.tableHeader1
    },
    historicalVideo() {
      this.title = '历史视频录像'
      this.dialogShow = true
      this.tableDatatwo.tableHeader = this.tableHeader2
    },
    modify() {
      this.innerTitle = '修改'
      this.innerVisible = true
    },
    add() {
      this.innerTitle = '添加'
      this.innerVisible = true
    },
    del() {
      this.delShow = true
    },
    innerConfirm() {
      this.innerVisible = false
    },
    innerCancel() {
      this.innerVisible = false
    },
    confirmDel() {
      this.delShow = false
    },
    confirm() {
      this.dialogShow = false
    },
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
  .content-footage {
    width: 100%;
    border: 1px solid rgba(121, 121, 121, 1);
    border-radius: 21px;
    background-color: rgba(7, 46, 55, 1);
    padding: 20px;
    .footage-title {
      font-size: 16px;
      color: #fff;
    }
    .footage-main {
      width: 100%;
      height: 600px;
      display: flex;
      justify-content: space-between;
      .main-left {
        width: 30%;
        height: 100%;
        padding: 10px;
        .el-input {
          width: 170px;
          margin-right: 10px;
          margin-top: 10px;
          input {
            background-color: rgba(5, 60, 67, 1);
            height: 30px;
            color: #00f3ff;
          }
          .el-input__icon {
            line-height: 25px;
          }
        }
        .el-button {
          background-color: rgba(5, 60, 67, 1);
          border-color: rgba(121, 121, 121, 1);
          color: #00f3ff;
          width: 80px;
          padding: 8px 20px;
        }
        .multi-select {
          width: 80%;
          height: 200px;
          border: 1px solid rgb(118, 118, 118);
          background-color: #091621;
          font-style: normal;
          font-size: 13px;
          padding: 2px;
          margin-top: 10px;
          .el-checkbox__label {
            color: #fff;
          }
          .el-checkbox {
            padding: 5px 0 5px 10px;
          }
        }
        .buttons {
          margin-top: 10px;
        }
      }
      .main-right {
        width: 80%;
        height: 100%;
        .right-button {
          width: 100%;
          height: 40px;
          position: relative;
          text-align: right;
          right: 40px;
          button {
            background-color: rgba(5, 60, 67, 1);
            border-color: rgba(121, 121, 121, 1);
            color: #00f3ff;
          }
        }
        .right-main {
          width: 100%;
          height: calc(100% - 40px);
          display: flex;
          flex-wrap: wrap;
          .main-six {
            width: 31%;
            height: 48%;
            margin: 10px;
            padding: 10px;
            box-sizing: border-box;
            border: 1px solid rgba(121, 121, 121, 1);
            border-radius: 21px;
            button {
              height: 35px;
              background-color: rgba(5, 60, 67, 1);
              border-color: rgba(121, 121, 121, 1);
              color: #00f3ff !important;
            }
            img {
              width: 100%;
              height: 75%;
            }
            p {
              color: #ffff;
              font-size: 20px;
              span {
                color: #00ff00;
                font-size: 14px;
                float: right;
                padding-top: 6px;
              }
            }
          }
        }
      }
    }
  }
  .content-map {
    width: 100%;
    border: 1px solid rgba(121, 121, 121, 1);
    border-radius: 21px;
    background-color: rgba(7, 46, 55, 1);
    padding: 20px;
    margin-top: 25px;
    .footage-title {
      font-size: 16px;
      color: #fff;
      margin-bottom: 20px;
    }
    .map-select {
      font-size: 14px;
      color: #fff;
      input {
        width: 170px;
        background-color: rgba(5, 60, 67, 1);
        height: 30px;
        color: #00f3ff;
      }
      .el-input__icon {
        line-height: 25px;
      }
      button {
        height: 35px;
        line-height: 10px;
        margin-left: 30px;
        background-color: rgba(5, 60, 67, 1);
        border-color: rgba(121, 121, 121, 1);
        color: #00f3ff;
      }
    }
    .map {
      width: 100%;
      height: 500px;
      padding: 10px;
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
        .el-button {
          width: 100px;
          background-color: rgba(5, 60, 67, 1);
          border-color: rgba(121, 121, 121, 1);
          color: #00f3ff;
        }
        .MyElTable {
          margin-top: 10px;
          .el-link {
            margin-left: 10px;
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
            input {
              background-color: #0d2e36;
            }
            .el-radio__label {
              color: #3fdee7;
            }
            .multi-select {
              border: 1px solid #cccccc;
              padding: 10px 20px;
              .el-checkbox__label {
                color: #3fdee7;
              }
              .border {
                width: 100%;
                height: 2px;
                border: 1px solid #ccc;
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
</style>
