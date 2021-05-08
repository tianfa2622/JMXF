const options = {
  tooltip: {
    trigger: 'axis',
    transitionDuration: 0,
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  color: ['#73DEB3', '#F25F40'],
  legend: {
    data: ['安全', '危险'],
    textStyle: {
      color: '#fff' // 图例文字颜色
    },
    left: 10
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['2020-03', '2020-04', '2020-05', '2020-06', '2020-07', '2020-08', '2020-09'],
      axisLabel: {
        show: true,
        textStyle: {
          color: '#fff'
        }
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        show: true,
        interval: 'auto',
        formatter: '{value}',
        color: '#fff'
      },
      show: true
    }
  ],
  series: [
    {
      name: '安全',
      type: 'bar',
      stack: '广告',
      data: [50, 70, 50, 70, 50, 70, 50]
    },
    {
      name: '危险',
      type: 'bar',
      stack: '广告',
      data: [20, 70, 50, 70, 50, 70, 50]
    }
  ]
}
export default options
