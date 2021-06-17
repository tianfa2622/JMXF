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
      const data1 = [120, 132, 101, 134, 90, 230, 210]
      const data2 = [220, 182, 191, 234, 290, 330, 310]
      Bar.setOption({
        // backgroundColor: '#fff',
        color: ['#78a3f7', '#7edeb4'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: function(params) {
            // 这里就是控制显示的样式
            let relVal = params[0].name
            let value = 0
            for (let i = 0, l = params.length; i < l; i++) {
              value += params[i].value
            }
            for (let i = 0, l = params.length; i < l; i++) {
              // marker 就是带颜色的小圆圈 seriesName x轴名称  value  y轴值 后面就是计算百分比
              relVal += '<br/>' + params[i].marker + params[i].seriesName + '  : 数量 : ' + parseFloat(params[i].value) + ', 百分比 : ' + ((100 * parseFloat(params[i].value)) / parseFloat(value)).toFixed(2) + '%'
            }
            return relVal
          }
        },
        legend: {
          data: ['已反馈', '未反馈'],
          textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
          }
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
            data: ['2020-01', '2020-02', '2020-03', '2020-04', '2020-05', '2020-06', '2020-07'],
            axisLine: {
              lineStyle: {
                color: '#fff',
                width: '2'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#fff',
                width: '2'
              }
            }
          }
        ],
        series: [
          {
            name: '已反馈',
            type: 'bar',
            stack: '反馈总数',
            label: {
              show: true,
              // position: 'insideRight',
              // eslint-disable-next-line no-unused-vars
              formatter: function(params, index) {
                return params.value === 0 ? '0%' : Math.round((params.value / data1[params.dataIndex]) * 1000) / 10 + '%'
              }
            },
            barWidth: 30,
            data: data1
          },
          {
            name: '未反馈',
            type: 'bar',
            stack: '反馈总数',
            label: {
              show: true,
              // position: 'insideRight'
              // eslint-disable-next-line no-unused-vars
              formatter: function(params, index) {
                return params.value === 0 ? '0%' : Math.round((params.value / data2[params.dataIndex]) * 1000) / 10 + '%'
              }
            },
            barWidth: 30,
            data: data2
          }
        ]
      })
      window.onresize = () => Bar.resize()
      window.addEventListener('resize', () => Bar.resize())
      // 定义计算方法
      // function Percentage(num, total) {
      //   return Math.round((num / total) * 10000) / 100.0 // 小数点后两位百分比
      // }
    }
  }
}
</script>
<style lang="scss"></style>
