<template>
  <div id="pie" :style="{ width: '100%', height: '100%' }"></div>
</template>
<script>
export default {
  data: () => ({}),
  created() {},
  mounted() {
    this.pie()
  },
  methods: {
    pie() {
      const pie = this.$echarts.init(document.getElementById('pie'))
      const dataArr = [
        { value: 603, name: '一级' },
        { value: 252, name: '二级' },
        { value: 256, name: '三级' },
        { value: 134, name: '四级' }
        // { value: 72, name: '其他' }
      ]
      pie.setOption({
        // backgroundColor: '#fff',
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} ' // "{a} <br/>{b} : {c} "
        },
        legend: {
          x: '80%',
          y: '45%',
          formatter: '{name}',
          textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
          }
        },
        calculable: true,
        series: [
          {
            name: '进度占比',
            type: 'pie',
            radius: '70%', // 饼图的半径大小
            center: ['40%', '50%'], // 饼图的位置
            label: {
              // 饼图图形上的文本标签
              normal: {
                show: true,
                position: 'inner', // 标签的位置
                formatter: '{c}'
              }
            },
            data: dataArr,
            itemStyle: {
              // 鼠标悬停时：
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
      window.onresize = () => pie.resize()
      window.addEventListener('resize', () => pie.resize())
    }
  }
}
</script>
<style lang="scss"></style>
