<template>
  <v-data-table
    v-model="selected"
    dark
    :headers="headers"
    :items="desserts"
    :single-select="true"
    item-key="id"
    show-select
    class="elevation-1"
    @item-selected="$emit('selected', $event)"
  >
  </v-data-table>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Gender', value: 'gender' },
        { text: 'E-mail', value: 'email' },
      ],
      desserts: this.users,
      selected: [],
    }
  },
}
</script>
