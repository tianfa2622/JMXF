const options = {
  xAxis: {
    type: 'category',
    data: ['2020-01', '2020-02', '2020-03', '2020-04', '2020-05'],
    axisLabel: {
      show: true,
      textStyle: {
        color: '#fff'
      }
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      show: true,
      color: '#fff'
    }
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290],
      type: 'line'
    }
  ]
}
export default options
