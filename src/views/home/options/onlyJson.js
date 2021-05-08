var scaleData = [
  {
    name: '芙蓉区分局',
    value: 10
  },
  {
    name: '雨花区分局',
    value: 10
  },
  {
    name: '望城区分局',
    value: 10
  },
  {
    name: '开福区分局',
    value: 10
  },
  {
    name: '岳麓区分局',
    value: 10
  }
]
var rich = {
  white: {
    color: '#fff',
    align: 'center',
    fontWeight: 'bold',
    fontSize: 10,
    padding: [0, 0]
  }
}
var placeHolderStyle = {
  normal: {
    label: {
      show: false
    },
    labelLine: {
      show: false
    },
    color: 'rgba(0, 0, 0, 0)',
    borderColor: 'rgba(0, 0, 0, 0)',
    borderWidth: 0
  }
}
var data = []
var color1 = ['rgb(255, 153, 153)', 'rgb(255, 176, 63)', 'rgb(61, 186, 45)', 'rgb(43, 166, 254)', 'rgb(255,222,0)', 'rgb(255,0,0)']

for (var i = 0; i < scaleData.length; i++) {
  data.push(
    {
      value: scaleData[i].value,
      name: scaleData[i].name,
      itemStyle: {
        normal: {
          borderWidth: 4,
          shadowBlur: 10,
          borderColor: color1[i],
          shadowColor: color1[i],
          color: color1[i]
          // opacity: 0.75
        }
      }
    },
    {
      value: 2,
      name: '',
      itemStyle: placeHolderStyle
    }
  )
}
var seriesObj = [
  {
    name: '',
    type: 'pie',
    clockWise: false,
    radius: [20, 70],
    hoverAnimation: false,
    itemStyle: {
      normal: {
        label: {
          show: true,
          position: 'inner',
          fontWeight: 'bold',
          fontSize: 10,
          formatter: function(params) {
            var percent = 0
            var total = 0
            for (var i = 0; i < scaleData.length; i++) {
              total += scaleData[i].value
            }
            percent = ((params.value / total) * 100).toFixed(0)
            if (params.name !== '') {
              return params.name + '\n{white|' + '占比' + percent + '%}'
            } else {
              return ''
            }
          },
          rich: rich
        },
        labelLine: {
          show: false
        }
      }
    },
    data: data
  }
]
const options = {
  tooltip: {
    // show: false
    transitionDuration: 0
  },
  legend: {
    show: false
  },
  toolbox: {
    // show: false
  },

  series: seriesObj
}
export default options
