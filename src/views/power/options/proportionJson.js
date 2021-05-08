const options = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
    transitionDuration: 0
  },
  legend: {
    orient: 'vertical',
    left: 'right',
    data: ['运营中心', '技术中心', '人力资源中心', '物流中心', '行政部'],
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
        { value: 335, name: '运营中心' },
        { value: 310, name: '技术中心' },
        { value: 234, name: '人力资源中心' },
        { value: 135, name: '物流中心' },
        { value: 150, name: '行政部' }
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
