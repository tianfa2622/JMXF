<template>
  <div style="width:100%;height:100%">
    <baidu-map class="map" :zoom="13" :center="center">
      <bm-marker :position="markerPoint1" animation="BMAP_ANIMATION_BOUNCE" :icon="{ url: require('@/assets/awarenessMap/u1844.png'), size: { width: 50, height: 50 } }" @click="personnelInfo"></bm-marker>
      <bm-marker :position="markerPoint2" animation="BMAP_ANIMATION_BOUNCE" :icon="{ url: require('@/assets/awarenessMap/u2460.png'), size: { width: 50, height: 50 } }" @click="carInfo"></bm-marker>
      <bm-marker :position="markerPoint3" animation="BMAP_ANIMATION_BOUNCE" :icon="{ url: require('@/assets/awarenessMap/u2476.png'), size: { width: 50, height: 50 } }" @click="stationInfo"></bm-marker>
    </baidu-map>
    <el-dialog :title="title" center width="20%" :visible.sync="dialogFormVisible">
      <div v-if="title === '巡逻人员'" class="dialog_content">
        <div class="col_span"><span class="span_title">姓名：</span><span class="span_content">张三</span></div>
        <div class="col_span"><span class="span_title">编号：</span><span class="span_content">JH20115547</span></div>
        <div class="col_span"><span class="span_title">所在位置：</span><span class="span_content">雨花区公安局</span></div>
        <div class="col_span"><span class="span_title">对讲机编号：</span><span class="span_content">022135</span></div>
      </div>
      <div v-else-if="title === '巡逻警车'" class="dialog_content">
        <div class="col_span"><span class="span_title">名称：</span><span class="span_content">警车JC00125</span></div>
        <div class="col_span"><span class="span_title">编号：</span><span class="span_content">JC20115547</span></div>
        <div class="col_span"><span class="span_title">所在位置：</span><span class="span_content">雨花区公安局</span></div>
        <div class="col_span"><span class="span_title">持有民警：</span><span class="span_content">张三</span></div>
        <div class="col_span"><span class="span_title">对讲机编号：</span><span class="span_content">022135</span></div>
      </div>
      <div v-else class="dialog_content">
        <div class="col_span"><span class="span_title">名称：</span><span class="span_content">警务站JW2201</span></div>
        <div class="col_span"><span class="span_title">编号：</span><span class="span_content">Jw2201</span></div>
        <div class="col_span"><span class="span_title">所在位置：</span><span class="span_content">雨花区公安局</span></div>
        <div class="col_span"><span class="span_title">驻点民警：</span><span class="span_content">张三</span></div>
        <div class="col_span"><span class="span_title">对讲机编号：</span><span class="span_content">022135</span></div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      markerPoint3: {
        lng: 112.96268,
        lat: 28.22831
      },
      title: '',
      dialogFormVisible: false
    }
  },
  methods: {
    personnelInfo() {
      this.title = '巡逻人员'
      this.dialogFormVisible = true
    },
    carInfo() {
      this.title = '巡逻警车'
      this.dialogFormVisible = true
    },
    stationInfo() {
      this.title = '警务站'
      this.dialogFormVisible = true
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
      }
    }
  }
}
</style>
