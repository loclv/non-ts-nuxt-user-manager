<template>
  <main>
    <v-app>
      <v-app-bar app dark>
        <v-toolbar-title>User manager</v-toolbar-title>
      </v-app-bar>

      <v-main dark>
        <v-container dark>
          <div class="total-info-container">
            <UserCount title="🧑‍🤝‍🧑 Users total" :count="users.length"></UserCount>
            <UserCount title="💃 Woman users" :count="womanCount"></UserCount>
            <UserCount title="🍺 Man users" :count="manCount"></UserCount>
            <UserCount title="🏳️‍🌈 Other users" :count="otherCount"></UserCount>
          </div>

          <v-card class="menu" dark>
            <MenuBtn
              title="add"
              icon="mdi-account-plus"
              color="#6200EA"
              @click="onAdd"
              @add="onAdd"
            ></MenuBtn>
            <MenuBtn
              title="edit"
              icon="mdi-account-edit"
              color="#00ACC1"
              @click="onEdit"
              @edit="onAdd"
            ></MenuBtn>
            <MenuBtn
              title="delete"
              icon="mdi-delete"
              color="#F4511E"
              @click="onDelete"
              @delete="onAdd"
            ></MenuBtn>

            <UserForm v-show="isFormShow" @submitted="onSubmit"></UserForm>
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
  methods: {
    onSubmit(user) {
      users.unshift({ ...user, id: users.length })
    },
    onAdd() {
      this.isFormShow = true
    },
    onEdit() {
      this.isFormShow = true
    },
    onDelete() {
      this.isFormShow = false
    },
  },
}
</script>

<style>
.menu {
  margin-bottom: 6px;
}

.v-main {
  background-color: var(--bg) !important;
  color: var(--color) !important;
}

a {
  color: var(--color-primary) !important;
}

.total-info-container {
  width: 222px;
}
</style>
