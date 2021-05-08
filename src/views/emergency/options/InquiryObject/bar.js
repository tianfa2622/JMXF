const options = {
  backgroundColor: '#fff',
  // title: {
  //   text: 'Awesome Chart'
  // },
  grid: {
    top: '5%',
    left: '5%',
    right: '3%',
    bottom: '8%'
    // containLabel: true
  },
  xAxis: {
    data: ['人员', '机动车', '非机动车', '物品', '船舶', '照片', '视频']
  },
  yAxis: {},
  series: [
    {
      type: 'bar',
      data: [220, 182, 191, 234, 290, 330, 310]
    }
  ]
}
export default options
