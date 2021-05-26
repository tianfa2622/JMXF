<template>
  <div>
    <el-table :data="data.tableList" border :stripe="data.stripe" style="width: 100%" :row-class-name="tableRowClassName">
      <!-- <el-table-column
        type="selection"
        align="center"
        width="55"
      ></el-table-column> -->
      <template v-for="item in data.tableHeader">
        <el-table-column v-if="item.type === 'slot'" :key="item.name" :prop="item.prop" :label="item.label" :min-width="item.width" align="center" border>
          <template slot-scope="{ row }">
            <slot :name="item.slotName" :data="row" />
          </template>
        </el-table-column>
        <el-table-column v-else :key="item.name" :prop="item.prop" :label="item.label" align="center" :min-width="item.width" />
      </template>
    </el-table>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['data', 'tableRowClassName'],
  data() {
    return {}
  },
  mounted() {}
}
</script>
<style lang="scss" scope>
.success-row {
  background-color: rgb(29, 114, 122) !important;
  color: #fff !important;
}
.success-row:hover > td {
  background-color: rgb(29, 114, 122) !important;
  color: #fff !important;
}
.error-row {
  background-color: rgb(69, 244, 254) !important;
  color: #000 !important;
}
.error-row:hover > td {
  background-color: rgb(69, 244, 254) !important;
  color: #000 !important;
}
.el-table {
  thead {
    color: #fff;
    font-weight: 700;
    background: #20505c !important;
    & th {
      background-color: transparent;
    }
    & tr {
      background-color: transparent;
    }
  }
}
.el-table,
.el-table__expanded-cell {
  background-color: transparent;
}
.el-table th,
.el-table tr {
  color: #45f4fe;
  background-color: transparent;
}
.el-table tbody tr:hover > td {
  background-color: transparent !important;
}
</style>
