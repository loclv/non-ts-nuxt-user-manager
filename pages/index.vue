<template>
  <main>
    <v-app-bar app dark>
      <v-toolbar-title>User manager</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <UserCount title="Users" :count="users.length"></UserCount>
        <UserCount title="Woman users" :count="womanCount"></UserCount>
        <UserCount title="Man users" :count="manCount"></UserCount>
        <UserCount title="Other users" :count="otherCount"></UserCount>

        <v-card class="menu" dark>
          <MenuBtn title="Add" icon="mdi-account-plus" color="indigo"></MenuBtn>
          <MenuBtn title="Edit" icon="mdi-account-edit" color="pink"></MenuBtn>
          <MenuBtn title="Delete" icon="mdi-delete" color="pink"></MenuBtn>
        </v-card>

        <SimpleTable :users="users"></SimpleTable>

        <v-container>
          <NuxtLink to="/about">About</NuxtLink>
        </v-container>
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
.menu {
  height: 64px;
  margin-bottom: 6px;
}
</style>
