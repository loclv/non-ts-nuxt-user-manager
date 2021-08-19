<template>
  <main>
    <v-app-bar app dark></v-app-bar>

    <v-main>
      <v-container>
        <h1>User manager</h1>

        <UserCount :title="'Users'" :count="users.length"></UserCount>
        <UserCount :title="'Woman users'" :count="womanCount"></UserCount>
        <UserCount :title="'Man users'" :count="manCount"></UserCount>
        <UserCount :title="'Other users'" :count="otherCount"></UserCount>

        <SimpleTable :users="users"></SimpleTable>
        <NuxtLink to="/about">About</NuxtLink>
      </v-container>
    </v-main>
  </main>
</template>

<script>
import { GendersEnum } from '@/utilities/model'
import { users } from '@/utilities/json'
import { countGender } from '@/utilities'

export default {
  data() {
    return {
      users,
    }
  },
  computed: {
    womanCount() {
      return countGender(this.users, GendersEnum.WOMAN)
    },
    manCount() {
      return countGender(this.users, GendersEnum.MAN)
    },
    otherCount() {
      return countGender(this.users, GendersEnum.OTHER)
    },
  },
}
</script>

<style>
body {
  font-family: Lato, sans-serif;
}
</style>
