<template>
  <div id="fileLine" :style="{ width: '100%', height: '100%' }"></div>
</template>
<script>
export default {
  data: () => ({}),
  created() {},
  mounted() {
    this.fileLine()
  },
  methods: {
    fileLine() {
      const fileLine = this.$echarts.init(document.getElementById('fileLine'))
      fileLine.setOption({
        // backgroundColor: '#fff',
        tooltip: {
          trigger: 'axis',
          show: true,
          formatter: function(params) {
            var res = params[0].name
            for (var i = 0; i < params.length; i++) {
              res += '<br>' + params[i].marker + params[i].seriesName + '：' + params[i].data + '个'
            }
            return res
          }
        },
        grid: {
          left: '5%', // gird距离容器左边距
          right: '5%',
          top: '5%',
          bottom: '5%',
          containLabel: true
        },
        title: {
          left: 0,
          top: 0,
          itemGap: 50,
          textStyle: {
            color: '#fff',
            fontSize: 18
          }
        },
        xAxis: [
          {
            type: 'category',
            axisLine: {
              show: true,
              lineStyle: {
                color: '#E2E8EC'
              }
            },
            axisLabel: {
              show: true,
              // margin: 20,
              textStyle: {
                color: '#fff'
              }
            },
            axisTick: {
              show: false
            },
            // boundaryGap: true,
            data: ['2020', '2021', '2022', '2023', '2024']
          }
        ],
        yAxis: [
          {
            type: 'value',
            min: 0,
            splitNumber: 4,
            axisLine: {
              show: true,
              lineStyle: {
                color: '#E2E8EC'
              }
            },
            axisLabel: {
              show: true,
              // margin: 20,
              textStyle: {
                color: '#fff'
              }
            },
            axisTick: {
              show: true
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(226, 232, 236, 1)',
                type: 'dashed'
              }
            }
          }
        ],
        series: [
          {
            name: '',
            type: 'line',
            // smooth: true, //是否平滑
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 10,
            lineStyle: {
              normal: {
                width: 4,
                color: 'rgba(4, 130, 252, 1)',
                shadowColor: 'rgba(54, 149, 232, 0.73)',
                shadowBlur: 3,
                shadowOffsetY: 1
              }
            },
            label: {
              show: false,
              position: 'top',
              textStyle: {
                color: '#48B3FF'
              }
            },

            itemStyle: {
              color: '#FFF',
              borderColor: 'rgba(4, 130, 252, 1)',
              borderWidth: 2
            },
            tooltip: {
              show: true
            },
            data: [550, 350, 620, 580, 970]
          }
        ]
      })
      window.onresize = () => fileLine.resize()
      window.addEventListener('resize', () => fileLine.resize())
    }
  }
}
</script>
<style lang="scss"></style>
