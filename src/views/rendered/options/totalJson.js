const options = {
  tooltip: {
    trigger: 'axis'
  },
  xAxis: [
    {
      type: 'category',
      data: ['2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06'],
      axisLine: {
        lineStyle: {
          color: '#fff'
        }
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      splitNumber: 4,
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: '#fff'
        }
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: '#fff'
        }
      },
      nameTextStyle: {
        color: '#fff'
      },
      splitArea: {
        show: false
      }
    }
  ],
  series: [
    {
      name: '总数',
      type: 'line',
      data: [620, 555, 600, 655, 422, 580],
      lineStyle: {
        normal: {
          width: 8,
          color: {
            type: 'linear',

            colorStops: [
              {
                offset: 0,
                color: '#A9F387' // 0% 处的颜色
              },
              {
                offset: 1,
                color: '#48D8BF' // 100% 处的颜色
              }
            ],
            globalCoord: false // 缺省为 false
          },
          shadowColor: 'rgba(72,216,191, 0.3)',
          shadowBlur: 10,
          shadowOffsetY: 20
        }
      },
      itemStyle: {
        normal: {
          color: '#fff',
          borderWidth: 10,
          borderColor: '#A9F387'
        }
      },
      smooth: true
    }
  ]
}
export default options
