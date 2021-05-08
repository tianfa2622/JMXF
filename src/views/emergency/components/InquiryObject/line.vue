<template>
  <div class="mychart">
    <v-chart :options="option" resize />
  </div>
</template>
<script>
import option from '../../options/InquiryObject/line.js'
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
  .echarts {
    width: 100%;
    height: 100%;
  }
}
</style>
