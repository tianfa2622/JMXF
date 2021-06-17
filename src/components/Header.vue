<template>
  <div class="container">
    <div class="head-left">智慧街面巡防系统</div>
    <div class="head-mid">
      <ul>
        <li>
          <router-link to="/"><div>首页</div></router-link>
        </li>
        <li>
          <div>
            力量调配
            <ul>
              <li>
                <router-link to="/usscouts">巡防力量管理</router-link>
              </li>
              <li><router-link to="/equipment">巡防装备管理</router-link></li>
              <li>
                <router-link to="/guard"> 巡防勤务管理</router-link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            勤务呈现
            <ul>
              <li>
                <router-link to="/awareness"> 巡防态势感知</router-link>
              </li>
              <li><router-link to="/warning">综合预警中心</router-link></li>
              <li><router-link to="/picture">勤务一图展示</router-link></li>
              <li><router-link to="/screens">大屏展示控制</router-link></li>
              <li><router-link to="/information">信息全局检索</router-link></li>
              <li><router-link to="/statistical">巡防统计分析</router-link></li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            巡守查控
            <ul>
              <li><router-link to="/videopatrol">视频远程巡逻</router-link></li>
              <li><router-link to="/flightcontrol">机飞操作控制</router-link></li>
              <li><router-link to="/adjustment">巡防调整提示</router-link></li>
              <li><router-link to="/InquiryObject">盘查对象管理</router-link></li>
              <li><router-link to="/KeyControl">重点布控管理</router-link></li>
              <li><router-link to="/InterfacePatrol">街面巡逻查控</router-link></li>
              <li><router-link to="/JointDefense">联勤联防查控</router-link></li>
              <li><router-link to="/assistance">跨域协助查控</router-link></li>
              <li><router-link to="/Victory">巡防战果管理</router-link></li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            应急指挥
            <ul>
              <li><router-link to="/Patrolplan">巡防预案管理</router-link></li>
              <li><router-link to="/EmergencyCommand">应急指挥提示</router-link></li>
            </ul>
          </div>
        </li>
        <li>
          <div><router-link to="/system">系统设置</router-link></div>
        </li>
      </ul>
    </div>
    <div class="head-right">
      <span class="user">下午好！157***6999 </span>
      <el-button type="text" @click="pushPage"> 退出登录 </el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    pushPage() {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss">
.container {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  .head-left {
    width: 20%;
    line-height: 100px;
    border-radius: 21px;
    box-shadow: none;
    font-size: 35px;
    text-align: center;
    font-weight: 600;
    color: #ffffff;
  }
  .head-mid {
    width: 60%;
    ul {
      display: flex;
      li {
        width: 16%;
        height: 60px;
        line-height: 60px;
        margin-top: 20px;
        text-align: center;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        background: url('../assets/border.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        transform: rotate(18deg);
        z-index: 999;
        div {
          transform: rotate(-18deg);
          &:hover {
            ul {
              display: block;
              z-index: 10;
            }
          }
          ul {
            position: absolute;
            display: none;
            z-index: 999;
            width: 100%;
            li {
              transform: rotate(0deg);
              width: 60%;
              height: 40px;
              margin: 0 auto;
              margin-top: 5px;
              line-height: 40px;
              text-align: center;
              background-color: #044148;
              color: #fff;
              border: 1px solid #01cbd6;
              font-size: 12px;
              background-image: none;
            }
          }
        }
      }
    }
  }
  .head-right {
    width: 15%;
    text-align: right;
    color: #00f3ff;
    font-weight: 600;
  }
}
</style>
