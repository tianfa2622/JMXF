<template>
  <div style="height:calc(100% - 20px)">
    <v-chart :options="option" resize />
  </div>
</template>
<script>
import option from '../options/riskJson'
export default {
  data() {
    return {
      option
    }
  }
}
</script>

<style scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
