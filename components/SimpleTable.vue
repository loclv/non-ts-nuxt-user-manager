<template>
  <v-simple-table dark>
    <template #default>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Calories</th>
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
const GendersEnum = { woman: 'woman', man: 'man', other: 'other' }

export default {
  data() {
    return {
      users: [
        {
          name: 'Frozen Yogurt',
          gender: GendersEnum.woman,
        },
        {
          name: 'Ice cream sandwich',
          gender: GendersEnum.man,
        },
        {
          name: 'Eclair',
          gender: GendersEnum.other,
        },
        {
          name: 'Cupcake',
          gender: GendersEnum.woman,
        },
        {
          name: 'Gingerbread',
          gender: GendersEnum.other,
        },
        {
          name: 'Jelly bean',
          gender: GendersEnum.man,
        },
        {
          name: 'Lollipop',
          gender: GendersEnum.man,
        },
        {
          name: 'Honeycomb',
          gender: GendersEnum.other,
        },
        {
          name: 'Donut',
          gender: GendersEnum.woman,
        },
        {
          name: 'KitKat',
          gender: GendersEnum.man,
        },
      ],
    }
  },
}
</script>
