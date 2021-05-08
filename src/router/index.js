import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '首页',
    component: () => import('@/views/home/index')
  },
  {
    path: '/login',
    name: '登录',
    component: () => import('@/views/login/index')
  },
  {
    path: '/usscouts',
    name: '巡逻力量管理',
    component: () => import('@/views/power/usscouts')
  },
  {
    path: '/equipment',
    name: '巡逻装备管理',
    component: () => import('@/views/power/equipment')
  },
  {
    path: '/guard',
    name: '巡逻勤务管理',
    component: () => import('@/views/power/guard')
  },
  {
    path: '/awareness',
    name: '巡防态势感知',
    component: () => import('@/views/rendered/awareness')
  },
  {
    path: '/warning',
    name: '综合预警中心',
    component: () => import('@/views/rendered/warning')
  },
  {
    path: '/picture',
    name: '勤务一图展示',
    component: () => import('@/views/rendered/picture')
  },
  {
    path: '/screens',
    name: '大屏展示控制',
    component: () => import('@/views/rendered/screens')
  },
  {
    path: '/information',
    name: '信息全局检索',
    component: () => import('@/views/rendered/information')
  },
  {
    path: '/statistical',
    name: '巡防统计分析',
    component: () => import('@/views/rendered/statistical')
  },
  {
    path: '/videopatrol',
    name: '视频远程巡逻',
    component: () => import('@/views/control/videopatrol')
  },
  {
    path: '/flightcontrol',
    name: '机飞操作控制',
    component: () => import('@/views/control/flightcontrol')
  },
  {
    path: '/adjustment',
    name: '巡防调整提示',
    component: () => import('@/views/control/adjustment')
  },
  {
    path: '/InquiryObject',
    name: '盘查对象管理',
    component: () => import('@/views/control/InquiryObject')
  },
  {
    path: '/KeyControl',
    name: '重点布控管理',
    component: () => import('@/views/control/KeyControl')
  },
  {
    path: '/InterfacePatrol',
    name: '街面巡逻查控',
    component: () => import('@/views/control/InterfacePatrol')
  },
  {
    path: '/JointDefense',
    name: '联勤联防查控',
    component: () => import('@/views/control/JointDefense')
  },
  {
    path: '/assistance',
    name: '跨域协助查控',
    component: () => import('@/views/control/assistance')
  },
  {
    path: '/Victory',
    name: '巡防战果查控',
    component: () => import('@/views/control/Victory')
  },
  {
    path: '/Patrolplan',
    name: '巡防预案管理',
    component: () => import('@/views/emergency/Patrolplan')
  },
  {
    path: '/EmergencyCommand',
    name: '应急指挥提示',
    component: () => import('@/views/emergency/EmergencyCommand')
  }
]

const router = new VueRouter({
  routes
})

export default router
