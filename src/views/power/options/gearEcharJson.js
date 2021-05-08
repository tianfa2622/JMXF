const options = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
    transitionDuration: 0
  },
  legend: {
    orient: 'vertical',
    left: 'right',
    data: ['枪支', '车辆', '移动终端', '无人机', '巡逻机器人', '特种装备'],
    textStyle: {
      color: '#ffffff'
    }
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        { value: 335, name: '枪支' },
        { value: 310, name: '车辆' },
        { value: 234, name: '移动终端' },
        { value: 135, name: '无人机' },
        { value: 150, name: '巡逻机器人' },
        { value: 222, name: '特种装备' }
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        },
        normal: {
          label: {
            textStyle: {
              color: '#ffffff'
            }
          }
        }
      }
    }
  ]
}
export default options
