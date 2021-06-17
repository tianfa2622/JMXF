<template>
  <div id="Bar" :style="{ width: '100%', height: '100%' }"></div>
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
      const Bar = this.$echarts.init(document.getElementById('Bar'))
      Bar.setOption({
        // backgroundColor: '#fff',
        grid: {
          left: '5%', // gird距离容器左边距
          right: '5%',
          top: '5%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: {
          data: ['天心区', '芙蓉区', '岳麓区', '雨花区', '望城区', '开福区', '长沙县'],
          axisLine: {
            lineStyle: {
              color: '#fff',
              width: '2'
            }
          }
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: '#fff',
              width: '2'
            }
          }
        },
        series: [
          {
            name: '贺龙体育馆第一区域',
            type: 'bar',
            barWidth: '50%',
            data: [220, 182, 191, 234, 290, 330, 310]
          }
        ]
      })
      window.onresize = () => Bar.resize()
      window.addEventListener('resize', () => Bar.resize())
    }
  }
}
</script>
<style lang="scss"></style>
