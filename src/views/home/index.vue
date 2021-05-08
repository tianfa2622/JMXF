<template>
  <div class="content">
    <div class="data">
      <div class="datablock">
        <div class="left">
          <img src="../../assets/u1.png" alt="" />
        </div>
        <div class="right">
          <p>巡防人员总数 <span>3617</span> 个</p>
        </div>
      </div>
      <div class="datablock">
        <div class="left">
          <img src="../../assets/u2.png" alt="" />
        </div>
        <div class="right">
          <p>巡防装备总数 <span>2157</span> 个</p>
        </div>
      </div>
      <div class="datablock">
        <div class="left">
          <img src="../../assets/u3.png" alt="" />
        </div>
        <div class="right">
          <p>巡防战果总数 <span>3617</span> 个</p>
        </div>
      </div>
      <div class="datablock">
        <div class="left">
          <img src="../../assets/u4.png" alt="" />
        </div>
        <div class="right">
          <p>巡区网格数 <span>105</span> 个</p>
          <p>勤务排班数 <span>398</span> 个</p>
        </div>
      </div>
    </div>

    <div class="main">
      <div class="left">
        <div class="char">
          <p>区域巡防力量统计</p>
          <forceEchar />
        </div>
        <div class="char">
          <p>区域巡区网格数量统计</p>
          <onlyEchar />
        </div>
      </div>
      <div class="right">
        <p>地图巡逻</p>
        <div class="maps">
          <div class="operation">
            选择区域：
            <el-select v-model="value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <el-button icon="el-icon-search" circle />
          </div>
          <div class="mappings">
            <indexmap />
          </div>
        </div>
      </div>
    </div>

    <div class="linechart">
      <div class="chart">
        <p>历史安全态势统计分析</p>
        <oftenEchar />
      </div>
      <div class="chart">
        <p>每月预测警情风险数量统计</p>
        <riskEchar />
      </div>
      <div class="chart">
        <p>区域巡防预案统计</p>
        <scoutEchar />
      </div>
    </div>
  </div>
</template>

<script>
import forceEchar from './components/forceEchar'
import onlyEchar from './components/onlyEchar'
import indexmap from './components/indexmap'
import oftenEchar from './components/oftenEchar'
import riskEchar from './components/riskEchar'
import scoutEchar from './components/scoutEchar'
export default {
  components: {
    forceEchar,
    onlyEchar,
    indexmap,
    oftenEchar,
    riskEchar,
    scoutEchar
  },
  data() {
    return {
      options: []
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
  .data {
    width: 100%;
    height: 8%;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    .datablock {
      width: 20%;
      height: 100%;
      background-image: url('../../assets/border01.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      display: flex;
      .left {
        width: 40%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 30px;
          height: 30px;
        }
      }
      .right {
        width: 60%;
        height: 100%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        color: #00f3ff;
        font-size: 14px;
        span {
          color: #fff;
        }
      }
    }
  }
  .main {
    width: 100%;
    height: 60%;
    display: flex;
    .left {
      width: 35%;
      height: 100%;
      .char {
        width: 100%;
        height: 50%;
        p {
          font-size: 15px;
          color: #fff;
          text-align: center;
        }
      }
    }
    .right {
      width: 65%;
      height: 100%;
      p {
        font-size: 15px;
        color: #fff;
        text-align: center;
      }
      .maps {
        width: 100%;
        height: calc(100% - 40px);
        margin-top: 20px;
        border-style: solid;
        border-radius: 21px;
        border-width: 1px;
        padding: 20px;
        background-color: rgba(7, 46, 55, 1);
        border-color: rgba(121, 121, 121, 1);
        .operation {
          width: 100%;
          height: 50px;
          margin: 0 auto;
          color: #fff;
          font-size: 14px;
          /deep/.el-input__inner {
            height: 30px;
          }
          button {
            margin-left: 10px;
          }
        }
        .mappings {
          width: 100%;
          height: calc(100% - 50px);
        }
      }
    }
  }
  .linechart {
    width: 100%;
    height: calc(100% - 68%);
    display: flex;
    justify-content: space-between;
    .chart {
      width: 33%;
      height: 100%;
      p {
        font-size: 15px;
        color: #fff;
        text-align: center;
      }
    }
  }
}
</style>
