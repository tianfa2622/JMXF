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
            <el-button>预案管理</el-button>
          </div>
          <div class="right-main">
            <div class="main-six">
              <p>万家丽地铁站-1号摄像头 <span>● 正常</span></p>
              <img src="../../assets/six.jpg" />
              <el-button>历史视频录像</el-button>
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
              <el-button>历史视频录像</el-button>
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
              <el-button>历史视频录像</el-button>
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
              <el-button>历史视频录像</el-button>
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
              <el-button>历史视频录像</el-button>
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
              <el-button>历史视频录像</el-button>
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
  </div>
</template>

<script>
import pictureMap from './components/pictureMap'
const cityOptions = ['万家丽地铁站-1号摄像头', '万家丽地铁站-1号摄像头', '万家丽地铁站-1号摄像头', '万家丽地铁站-1号摄像头', '万家丽地铁站-1号摄像头']
export default {
  components: {
    pictureMap
  },
  data() {
    return {
      checkAll: false,
      checkedCities: ['上海', '北京'],
      cities: cityOptions,
      isIndeterminate: true
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
}
</style>
