const options = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
    transitionDuration: 0
  },
  legend: {
    orient: 'vertical',
    left: 'right',
    data: ['芙蓉区分局', '雨花区分局', '望城区分局', '开福区分局', '岳麓区分局'],
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
        { value: 335, name: '芙蓉区分局' },
        { value: 310, name: '雨花区分局' },
        { value: 234, name: '望城区分局' },
        { value: 135, name: '开福区分局' },
        { value: 150, name: '岳麓区分局' }
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
