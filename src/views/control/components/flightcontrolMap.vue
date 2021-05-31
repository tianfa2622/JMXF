<template>
  <div style="width:100%;height:100%">
    <baidu-map class="map" :zoom="13" :center="center">
      <bm-marker :position="markerPoint1" animation="BMAP_ANIMATION_BOUNCE" :icon="{ url: require('@/assets/awarenessMap/u4353.png'), size: { width: 55, height: 55 } }" @click="robotInfo"></bm-marker>
      <bm-marker :position="markerPoint2" animation="BMAP_ANIMATION_BOUNCE" :icon="{ url: require('@/assets/awarenessMap/u4357.png'), size: { width: 47, height: 47 } }" @click="droneInfo"></bm-marker>
    </baidu-map>
    <el-dialog :title="title" center width="20%" :visible.sync="dialogFormVisible">
      <div class="dialog_content">
        <div class="col_span"><span class="span_title">名称：</span><span class="span_content">张三</span></div>
        <div class="col_span"><span class="span_title">编号：</span><span class="span_content">JH20115547</span></div>
        <div class="col_span"><span class="span_title">所属单位：</span><span class="span_content">雨花区公安局</span></div>
        <div class="col_span"><span class="span_title">所在位置：</span><span class="span_content">万家丽地铁站</span></div>
        <div class="col_span" style="text-align: end;">
          <el-link v-if="title === '巡逻机器人'" :underline="false" @click="connectionRobot">
            连接机器人
            <i class="el-icon-d-arrow-right"></i>
          </el-link>
          <el-link v-else :underline="false" @click="connectionDrone">
            连接无人机
            <i class="el-icon-d-arrow-right"></i>
          </el-link>
        </div>
      </div>
    </el-dialog>
    <el-dialog width="25%" :show-close="false" :visible.sync="innerVisible">
      <span slot="title">
        <el-row type="flex" class="row-bg" align="middle" justify="space-between">
          <el-col :span="10" class="col_title">
            <span v-if="xllb === 1"> 公安局 巡逻机器人张三1号</span>
            <span v-else>公安局 警用无人机京01</span>
          </el-col>
          <el-col :span="10" class="col_btn">
            <el-button type="primary" @click="innerVisible = false">关闭</el-button>
          </el-col>
        </el-row>
      </span>
      <div class="inner_dialog_content">
        <div class="inner_image">
          <el-image :src="TXsrc">
            <div slot="placeholder" class="image-slot">加载中<span class="dot">...</span></div>
          </el-image>
        </div>
        <div class="inner_content">
          <div class="inner_content_left">
            <el-image style="width:100%;height:100%;" fit="fill" :src="require('@/assets/awarenessMap/u4405.png')">
              <div slot="placeholder" class="image-slot">加载中<span class="dot">...</span></div>
            </el-image>
          </div>
          <div class="inner_content_right">
            <el-row type="flex" class="row-warp" align="middle" justify="space-around">
              <el-col :span="10">
                <el-button type="primary">启动</el-button>
              </el-col>
              <el-col :span="10">
                <el-button type="success">停止</el-button>
              </el-col>
              <el-col v-if="xllb !== 1" :span="10">
                <el-button type="info">悬空</el-button>
              </el-col>
              <el-col :span="10">
                <el-button type="info">喊话</el-button>
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="inner_footer">
          <el-row type="flex" class="row-bg" align="middle" justify="space-between">
            <el-col :span="10">
              <span v-if="status === 1" class="success">正常</span>
              <span v-else class="error">故障</span>
            </el-col>
            <el-col :span="10" class="span_btn">
              <el-button @click="PatrolRoute">巡逻路线</el-button>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-dialog>
    <el-dialog :title="tableTitle" center width="40%" :visible.sync="tableVisible">
      <Tablein :data="tableData">
        <template #operation="{data}">
          <el-link type="primary" @click="details(data.name)">查看</el-link>
        </template>
      </Tablein>
      <div class="Pagin">
        <el-pagination :current-page="currentPage" :page-sizes="[10, 15, 20, 15]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="10" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Tablein from '@/components/Table/tablein.vue'
export default {
  components: {
    Tablein
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['areaTitle'],
  data() {
    return {
      innerTitle: '',
      innerVisible: false,
      status: 1,
      xllb: 1,
      currentPage: 1,
      TXsrc: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      center: {
        lng: 112.97935279,
        lat: 28.21347823
      },
      markerPoint1: {
        lng: 113.004362,
        lat: 28.225319
      },
      markerPoint2: {
        lng: 112.983737,
        lat: 28.236012
      },
      title: '',
      tableTitle: '',
      dialogFormVisible: false,
      tableVisible: false,
      tableData: {
        tableHeader: [
          {
            label: '序号',
            prop: 'input',
            width: 50
          },
          {
            label: '路线名称',
            prop: 'input'
          },
          {
            label: '巡逻时长(分钟)',
            prop: 'input'
          },
          {
            label: '操作',
            type: 'slot',
            width: 150,
            slotName: 'operation'
          }
        ],
        tableList: Array(5).fill({
          input: '123'
        })
      }
    }
  },
  watch: {
    areaTitle(newValue, oldValue) {
      console.log('1', oldValue)
      console.log('2', newValue)
      this.center = newValue
      this.zoom = 16
    }
    // videoVisible(newValue, oldValue) {
    //   console.log('1', oldValue)
    //   if (newValue === false) {
    //     this.videoUrl = ''
    //   }
    // }
  },
  methods: {
    robotInfo() {
      this.title = '巡逻机器人'
      this.dialogFormVisible = true
    },
    droneInfo() {
      this.title = '警用无人机'
      this.dialogFormVisible = true
    },
    connectionRobot() {
      this.xllb = 1
      this.innerVisible = true
    },
    connectionDrone() {
      this.xllb = 0
      this.innerVisible = true
    },
    PatrolRoute() {
      this.tableTitle = '巡逻路线'
      this.tableVisible = true
    },
    details() {},
    handleSizeChange() {},
    handleCurrentChange() {}
  }
}
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 100%;
}
/deep/.el-dialog__wrapper {
  .el-dialog {
    .el-dialog__header {
      background-color: #0d2e36 !important;
      border-bottom: 1px solid #20505c;
      .el-dialog__title {
        color: #ffffff !important;
      }
      .row-bg {
        .col_title {
          color: #ffffff;
          font-size: 14px;
        }
        .col_btn {
          text-align: end;
        }
        .el-button {
          padding: 12px 40px;
          background-color: #0e3c42;
          color: #3fdee7;
          border-color: #797979;
        }
      }
    }
    .el-dialog__body {
      background-color: #0d2e36 !important;
      padding-bottom: 10px;
      .dialog_content {
        margin-bottom: 20px;
        .col_span {
          width: 100%;
          margin-top: 10px;
          .el-link.el-link--default:hover {
            text-decoration: none;
          }
          span {
            // margin-left: 20px !important;
            font-size: 14px !important;
            color: #ffffff !important;
          }
          .span_title {
            width: 30%;
          }
          .span_content {
            width: 50%;
            margin-left: 10px;
          }
        }
      }
      .inner_dialog_content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .inner_image {
          height: 45%;
          width: 100%;
          .image-slot {
            color: #ffffff;
          }
          .dot {
            color: #ffffff;
          }
        }
        .inner_content {
          margin-top: 20px;
          height: 30%;
          width: 100%;
          display: flex;
          justify-content: space-around;
          .inner_content_left {
            width: 48%;
            .image-slot {
              color: #ffffff;
            }
            .dot {
              color: #ffffff;
            }
          }
          .inner_content_right {
            width: 48%;
            .row-warp {
              flex-wrap: wrap;
              height: 80%;
              .el-button {
                // padding: 12px 40px;
                background-color: #0e3c42;
                color: #3fdee7;
                border-color: #797979;
              }
            }
          }
        }
        .inner_footer {
          margin-top: 10px;
          height: 20%;
          width: 100%;
          .row-bg {
            .success {
              color: #51ec7b;
            }
            .error {
              color: red;
            }
            .span_btn {
              text-align: end;
            }
            .el-button {
              // padding: 12px 40px;
              background-color: #0e3c42;
              color: #3fdee7;
              border-color: #797979;
            }
          }
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
  }
}
</style>
