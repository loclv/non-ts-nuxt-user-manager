<template>
  <main>
    <v-app-bar app dark></v-app-bar>

    <v-main>
      <v-container>
        <h1>User manager</h1>

        <p>Users number: {{ users.length }}</p>
        <SimpleTable :users="users"></SimpleTable>
        <NuxtLink to="/about">About</NuxtLink>
      </v-container>
    </v-main>
  </main>
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

<style>
body {
  font-family: Lato, sans-serif;
}
</style>
