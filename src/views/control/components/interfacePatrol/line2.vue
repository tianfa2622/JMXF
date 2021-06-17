<template>
  <div id="line" :style="{ width: '100%', height: '100%' }"></div>
</template>
<script>
export default {
  data: () => ({}),
  created() {},
  mounted() {
    this.Bar()
  },
  methods: {
    Bar() {
      const line = this.$echarts.init(document.getElementById('line'))
      line.setOption({
        // backgroundColor: '#fff',
        // title: {
        //   text: '订单量（个）',
        //   left: '18px',
        //   top: '0',
        //   textStyle: {
        //     color: '#999',
        //     fontSize: 12,
        //     fontWeight: '400'
        //   }
        // },
        color: ['#73A0FA', '#73DEB3'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            },
            lineStyle: {
              type: 'dashed'
            }
          }
        },
        grid: {
          left: '25',
          right: '25',
          bottom: '24',
          top: '75',
          containLabel: true
        },
        legend: {
          data: ['人脸', '车牌'],
          orient: 'horizontal',
          icon: 'rect',
          show: true,
          left: 20,
          top: 25,
          textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
          }
        },
        xAxis: {
          type: 'category',
          data: ['2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06'],
          splitLine: {
            show: false
          },
          axisTick: {
            show: true
          },
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
          }
        },
        yAxis: {
          type: 'value',
          // max: max_value>=100? max_value + 100: max_value+10,
          // max: max_value > 100 ? max_value * 2 : max_value + 10,
          // interval: 10,
          // nameLocation: "center",
          axisLabel: {
            color: '#fff',
            textStyle: {
              fontSize: 12
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#F3F4F4'
            }
          },
          axisTick: {
            show: true
          },
          axisLine: {
            show: true
          }
        },
        series: [
          {
            name: '人脸',
            type: 'line',
            smooth: false,
            lineStyle: {
              normal: {
                width: 3
                // color: 'rgba(4, 130, 252, 1)',
                // shadowColor: 'rgba(54, 149, 232, 0.73)',
                // shadowBlur: 3,
                // shadowOffsetY: 1
              }
            },
            itemStyle: {
              // color: '#fff',
              // borderColor: "#7c1fa2",
              borderWidth: 4
            },
            data: [888, 543, 656, 300, 777, 565]
          },
          {
            name: '车牌',
            type: 'line',
            smooth: false,
            lineStyle: {
              normal: {
                width: 3
                // color: 'rgba(4, 130, 252, 1)',
                // shadowColor: 'rgba(54, 149, 232, 0.73)',
              }
            },
            itemStyle: {
              // color: '#fff',
              // borderColor: "#7c1fa2",
              borderWidth: 4
            },
            data: [545, 300, 720, 300, 865, 600]
          }
        ]
      })
      window.onresize = () => line.resize()
      window.addEventListener('resize', () => line.resize())
    }
  }
}
</script>
<style lang="scss"></style>
