<template>
  <main>
    <v-app>
      <v-app-bar app dark>
        <v-toolbar-title>User manager</v-toolbar-title>
      </v-app-bar>

      <v-main dark>
        <v-container dark>
          <UserCount title="Users" :count="users.length"></UserCount>
          <UserCount title="Woman users" :count="womanCount"></UserCount>
          <UserCount title="Man users" :count="manCount"></UserCount>
          <UserCount title="Other users" :count="otherCount"></UserCount>

          <v-card class="menu" dark>
            <MenuBtn
              title="Add"
              icon="mdi-account-plus"
              color="#6200EA"
            ></MenuBtn>
            <MenuBtn
              title="Edit"
              icon="mdi-account-edit"
              color="#00ACC1"
            ></MenuBtn>
            <MenuBtn title="Delete" icon="mdi-delete" color="#F4511E"></MenuBtn>

            <UserForm v-show="isFormShow"></UserForm>
          </v-card>

          <SimpleTable :users="users"></SimpleTable>
        </v-container>
      </v-main>

      <v-footer app dark>
        <v-container>
          <NuxtLink to="/about">About</NuxtLink>
        </v-container>
      </v-footer>
    </v-app>
  </main>
</template>

<script>
import { GendersEnum } from '@/utilities/model'
import { users } from '@/utilities/json'
import { countGender } from '@/utilities'

export default {
  data() {
    return {
      isFormShow: true,
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
  margin-bottom: 6px;
}

:root {
  --color: #ebf4f1;
  --color-primary: #8affd5;
  --color-secondary: #fdf9f3;
  --bg: #575757;
  --bg-secondary: #4a4a4a;
  --border-color: #707070;
}

.v-main {
  background-color: var(--bg) !important;
  color: var(--color) !important;
}

a {
  color: var(--color-primary) !important;
}
</style>
