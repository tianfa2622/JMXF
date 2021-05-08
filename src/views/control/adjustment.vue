<template>
  <div class="content">
    <div class="content-title">巡防调整提示</div>
    <div class="content-char">
      <div class="char">
        <div class="char-title">网格调整提示数量统计</div>
        <div class="char-echats">
          <gridadjustEchar />
        </div>
      </div>
      <div class="char">
        <div class="char-title">街面警务调整提示数量统计</div>
        <div class="char-echats">
          <gridadjustEchar />
        </div>
      </div>
      <div class="char">
        <div class="char-title">巡逻路线调整提示数量统计</div>
        <div class="char-echats">
          <gridadjustEchar />
        </div>
      </div>
      <div class="char">
        <div class="char-title">巡区网格调整提示栏</div>
        <div class="char-table">
          <tablein :data="tableData" :table-row-class-name="tableRowClassName" />
        </div>
      </div>
      <div class="char">
        <div class="char-title">界面任务站调整提示栏</div>
        <div class="char-table">
          <tablein :data="tableData1" />
        </div>
      </div>
      <div class="char">
        <div class="char-title">巡逻路线提示栏</div>
        <div class="char-table">
          <tablein :data="tableData2" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import gridadjustEchar from './components/gridadjustEchar'
import tablein from '@/components/Table/tablein'

export default {
  components: {
    gridadjustEchar,
    tablein
  },
  data() {
    return {
      tableData: {
        stripe: true,
        tableHeader: [
          {
            label: '巡区网格名称',
            prop: 'input'
            // width: 50
          },
          {
            label: '提示时间',
            prop: 'input'
            // width: 80
          },
          {
            label: '提示原因',
            prop: 'input'
            // width: 80
          }
        ],
        tableList: Array(5).fill({
          input: '123'
        })
      },
      tableData1: {
        stripe: true,
        tableHeader: [
          {
            label: '街面警务站名称',
            prop: 'input'
            // width: 50
          },
          {
            label: '提示时间',
            prop: 'input'
            // width: 80
          },
          {
            label: '提示原因',
            prop: 'input'
            // width: 80
          }
        ],
        tableList: Array(5).fill({
          input: '123'
        })
      },
      tableData2: {
        stripe: true,
        tableHeader: [
          {
            label: '巡逻路线名称',
            prop: 'input'
            // width: 50
          },
          {
            label: '提示时间',
            prop: 'input'
            // width: 80
          },
          {
            label: '提示原因',
            prop: 'input'
            // width: 80
          }
        ],
        tableList: Array(5).fill({
          input: '123'
        })
      }
    }
  },
  methods: {}
}
</script>
<style lang="scss">
.content {
  width: 100%;
  height: calc(100% - 100px);
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
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .char {
      margin: 20px;
      width: 30%;
      height: 50%;
      .char-title {
        text-align: center;
        font-size: 16px;
        color: #fff;
      }
      .char-table {
        width: 100%;
        margin-top: 20px;
        height: calc(100% - 42px);
      }
      .char-echats {
        width: 100%;
        height: calc(100% - 22px);
      }
    }
  }
}
</style>
