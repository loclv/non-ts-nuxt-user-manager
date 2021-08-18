<template>
  <v-simple-table dark>
    <template #default>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Gender</th>
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
import { GendersEnum } from '@/utilities/model/user'

export default {
  data() {
    return {
      users: [
        {
          name: 'Frozen Yogurt',
          gender: GendersEnum.WOMAN,
        },
        {
          name: 'Ice cream sandwich',
          gender: GendersEnum.MAN,
        },
        {
          name: 'Eclair',
          gender: GendersEnum.OTHER,
        },
        {
          name: 'Cupcake',
          gender: GendersEnum.WOMAN,
        },
        {
          name: 'Gingerbread',
          gender: GendersEnum.OTHER,
        },
        {
          name: 'Jelly bean',
          gender: GendersEnum.MAN,
        },
        {
          name: 'Lollipop',
          gender: GendersEnum.MAN,
        },
        {
          name: 'Honeycomb',
          gender: GendersEnum.OTHER,
        },
        {
          name: 'Donut',
          gender: GendersEnum.WOMAN,
        },
        {
          name: 'KitKat',
          gender: GendersEnum.MAN,
        },
      ],
    }
  },
}
</script>
