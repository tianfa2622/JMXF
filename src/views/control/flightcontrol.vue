<template>
  <div class="flinght_content">
    <div class="content-title">机飞操作控制</div>
    <div class="content-map">
      <div class="map-select">
        选择区域：
        <el-select v-model="value" placeholder="请选择" @change="selectMap">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <el-button>搜索</el-button>
      </div>
      <div class="map">
        <FlightcontrolMap :area-title="areaTitle" />
      </div>
    </div>
  </div>
</template>
<script>
import FlightcontrolMap from './components/flightcontrolMap'
export default {
  components: {
    FlightcontrolMap
  },
  data() {
    return {
      areaTitle: '',
      options: [
        { label: '望城区', value: '望城区' },
        { label: '岳麓区', value: '岳麓区' },
        { label: '雨花区', value: '雨花区' }
      ]
    }
  },
  methods: {
    selectMap(v) {
      this.areaTitle = v
    }
  }
}
</script>
<style lang="scss" scoped>
.flinght_content {
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
  .content-map {
    width: 100%;
    .map-select {
      font-size: 14px;
      color: #fff;
      input {
        width: 170px;
        background-color: rgba(5, 60, 67, 1);
        height: 30px;
        // color: #00f3ff;
        color: #000;
      }
      // input::placeholder {
      //   /* color: #adb4be !important; */
      //   color: #000 !important;
      // }
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
      height: 600px;
      padding: 10px;
    }
  }
}
// /deep/.el-dialog__wrapper {
//   .el-dialog {
//     .el-dialog__header {
//       background-color: #0d2e36 !important;
//       border-bottom: 1px solid #20505c;
//       .el-dialog__title {
//         color: #ffffff !important;
//       }
//     }
//     .el-dialog__body {
//       background-color: #0d2e36 !important;
//       padding-bottom: 10px;
//       .inner_dialog_content {
//         width: 100%;
//         height: 100%;
//         display: flex;
//         flex-direction: column;
//         .inner_image {
//           height: 40%;
//           width: 100%;
//           .image-slot {
//             color: #ffffff;
//           }
//           .dot {
//             color: #ffffff;
//           }
//         }
//         .inner_content {
//           height: 40%;
//           width: 100%;
//           display: flex;
//           justify-content: space-around;
//           .inner_content_left {
//             width: 48%;
//             .image-slot {
//               color: #ffffff;
//             }
//             .dot {
//               color: #ffffff;
//             }
//           }
//           .inner_content_right {
//             width: 48%;
//           }
//         }
//         .inner_footer {
//           height: 20%;
//           width: 100%;
//           display: flex;
//           justify-content: space-around;
//           .left_status {
//             width: 48%;
//             .success {
//               color: #51ec7b;
//             }
//             .error {
//               color: red;
//             }
//           }
//           .right_btn {
//             width: 48%;
//           }
//         }
//       }
//     }
//   }
// }
</style>
