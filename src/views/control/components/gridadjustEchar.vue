<template>
  <div class="mychart">
    <v-chart :options="option" resize />
  </div>
</template>
<script>
import option from '../options/gridJson'
export default {
  data() {
    return {
      option
    }
  }
}
</script>

<style scoped>
/* .echarts { */
/* width: 100%;
  height: 100%;
} */
.mychart {
  width: 100%;
  height: 100%;
}
</style>
