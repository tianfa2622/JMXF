<template>
  <div id="filePie" :style="{ width: '100%', height: '100%' }"></div>
</template>
<script>
export default {
  data: () => ({}),
  created() {},
  mounted() {
    this.filePie()
  },
  methods: {
    filePie() {
      const filePie = this.$echarts.init(document.getElementById('filePie'))
      filePie.setOption({
        // backgroundColor: '#fff',
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: '80%',
          top: '50%',
          data: ['芙蓉区分局', '雨花区分局', '望城区分局', '开福区分局', '岳麓区分局'],
          textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
          }
        },
        series: [
          {
            name: '寻访战果上报',
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['40%', '50%'],
            // avoidLabelOverlap: false,
            label: {
              show: true,
              position: 'inside',
              formatter: '{c}'
            },
            //  emphasis: {
            //      label: {
            //          show: true,
            //          fontSize: '30',
            //          fontWeight: 'bold'
            //      }
            //  },
            labelLine: {
              show: false
            },
            itemStyle: {
              normal: {
                // 这里是重点
                color: function(params) {
                  // 注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                  var colorList = ['#e67d68', '#78a3f7', '#7edeb4', '#7686a1', '#f4c54a', 'grey', '#ca8622']
                  return colorList[params.dataIndex]
                }
              }
            },
            data: [
              {
                value: 1220,
                name: '芙蓉区分局'
              },
              {
                value: 1546,
                name: '雨花区分局'
              },
              {
                value: 6532,
                name: '望城区分局'
              },
              {
                value: 4565,
                name: '开福区分局'
              },
              {
                value: 4565,
                name: '岳麓区分局'
              }
            ]
          }
        ]
      })
      window.onresize = () => filePie.resize()
      window.addEventListener('resize', () => filePie.resize())
    }
  }
}
</script>
<style lang="scss"></style>
