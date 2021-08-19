<template>
  <v-simple-table dark>
    <template #default>
      <thead>
        <tr>
          <th class="text-left table-header">Name</th>
          <th class="text-left table-header">Gender</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in users" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.gender }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.table-header {
  font-size: 18px !important;
}
</style>
