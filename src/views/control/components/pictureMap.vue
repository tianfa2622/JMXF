<template>
  <div style="width:100%;height:100%;">
    <baidu-map class="map" :zoom="zoom" :scroll-wheel-zoom="true" :center="center">
      <bm-marker :position="markerPoint1" animation="BMAP_ANIMATION_BOUNCE" :icon="{ url: require('@/assets/awarenessMap/u126.png'), size: { width: 40, height: 40 } }" @click="videoPlay"></bm-marker>
    </baidu-map>
    <el-dialog title="万家丽中路南段S1摄像头" :destroy-on-close="true" center width="40%" :visible.sync="videoVisible" @close="videoVisible = false">
      <Video :video-url="videoUrl"></Video>
      <div slot="footer" class="dialog-footer">
        <div class="footer_title">
          <p v-if="status === 1" class="p_s">正常</p>
          <p v-else class="p_e">故障</p>
        </div>
        <div class="footer_btn">
          <el-button @click="videoVisible = false">关闭</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Video from '@/components/video/index'
export default {
  components: { Video },
  // eslint-disable-next-line vue/require-prop-types
  props: ['areaTitle'],
  data() {
    return {
      center: '长沙',
      zoom: 14,
      videoUrl: '',
      markerPoint1: {
        lng: 113.004362,
        lat: 28.225319
      },
      // markerPoint2: {
      //   lng: 112.983737,
      //   lat: 28.236012
      // },
      // markerPoint3: {
      //   lng: 112.96268,
      //   lat: 28.22831
      // },
      // markerPoint4: {
      //   lng: 112.97231,
      //   lat: 28.219526
      // },
      // title: '',
      // dialogFormVisible: false,
      videoVisible: false,
      status: 1
    }
  },
  watch: {
    areaTitle(newValue, oldValue) {
      console.log('1', oldValue)
      console.log('2', newValue)
      this.center = newValue
      // this.zoom = 16
    },
    videoVisible(newValue, oldValue) {
      console.log('1', oldValue)
      if (newValue === false) {
        this.videoUrl = ''
      }
    }
  },
  methods: {
    // videoInfo() {
    //   this.title = '视频监控'
    //   this.videoVisible = true
    // },
    // carInfo() {
    //   this.title = '巡逻警车'
    //   this.dialogFormVisible = true
    // },
    // stationInfo() {
    //   this.title = '警务站'
    //   this.dialogFormVisible = true
    // },
    // alarmInfo() {
    //   this.title = '警情'
    //   this.dialogFormVisible = true
    // },
    // Details() {
    //   // this.$router.push({path:'/home',query: {id:'1'}})
    //   this.$router.push('/Victory')
    // },
    videoPlay() {
      this.videoUrl = 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'
      this.videoVisible = true
    }
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
    }
    .el-dialog__body {
      background-color: #0d2e36 !important;
      padding-bottom: 10px;
      .dialog_content {
        margin-bottom: 20px;
        .col_span {
          width: 100%;
          margin-top: 10px;
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
        .col_btn {
          width: 100%;
          margin-top: 10px;
          text-align: end;
          .el-link {
            color: #ffffff;
          }
        }
      }
    }
    .el-dialog__footer {
      background-color: #0d2e36 !important;
      // .dialog-footer {
      //   .el-button {
      //     padding: 12px 40px;
      //     background-color: #0e3c42;
      //     color: #3fdee7;
      //     border-color: #797979;
      //   }
      // }
      .dialog-footer {
        width: 100%;
        display: flex;
        .footer_title {
          width: 48%;
          text-align: start;
          .p_s {
            color: #47fe4b;
            font-size: 16px;
            padding-left: 20px;
          }
          .P_e {
            color: #d0021b;
            font-size: 14px;
          }
        }
        .footer_btn {
          width: 48%;
          text-align: end;
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
