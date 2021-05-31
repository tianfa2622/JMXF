<template>
  <div class="mychart">
    <v-chart :options="option" width="100%" resize />
  </div>
</template>
<script>
import option from '../../options/InquiryObject/bar'
export default {
  data() {
    return {
      option
    }
  }
}
</script>

<style lang="scss" scoped>
.mychart {
  width: 100%;
  height: 100%;
  /deep/.echarts {
    width: 100%;
    // height: 100%;
  }
}
</style>
