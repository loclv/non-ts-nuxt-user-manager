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
              :is-disabled="!selectedItem"
              @click="onEdit"
              @edit="onAdd"
            ></MenuBtn>
            <MenuBtn
              title="delete"
              icon="mdi-delete"
              color="#F4511E"
              :is-disabled="!selectedItem"
              @click="onDelete"
              @delete="onAdd"
            ></MenuBtn>

            <h2 v-show="isFormShow" class="ma-4">
              {{ (mode === ModeEnum.ADD ? 'Add' : 'Edit') + ' user' }}
            </h2>
            <UserForm
              v-show="isFormShow"
              ref="userFormRef"
              @submitted="onSubmit"
              @form-cancel="onFormCancel"
            ></UserForm>
          </v-card>

          <UserTable :users="users" @selected="onSelect"></UserTable>
        </v-container>
      </v-main>

      <Footer></Footer>
    </v-app>
  </main>
</template>

<script>
import { GendersEnum } from '@/utilities/model'
import { countGender, ModeEnum } from '@/utilities'

export default {
  data() {
    return {
      isFormShow: true,
      mode: ModeEnum.ADD,
      ModeEnum,
      selectedItem: null,
    }
  },
  computed: {
    users() {
      return this.$store.state.users.users
    },
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
      if (this.mode === ModeEnum.ADD) {
        this.$store.commit('users/add', user)
      } else if (this.mode === ModeEnum.EDIT) {
        const { name, gender } = user
        const id = this.selectedItem.id
        this.$store.commit('users/edit', { id, name, gender })
      }
    },
    onFormCancel() {
      this.isFormShow = false
    },
    onAdd() {
      this.$refs.userFormRef.reset()
      this.isFormShow = true
      this.mode = ModeEnum.ADD
    },
    onEdit() {
      this.isFormShow = true
      this.mode = ModeEnum.EDIT
    },
    onDelete() {
      this.isFormShow = false
      const id = this.selectedItem.id
      this.$store.commit('users/delete', { id })
      this.mode = ModeEnum.DELETE
    },
    onSelect(e) {
      if (e.value === true) {
        // selected
        this.selectedItem = e.item
        this.$refs.userFormRef.set(e.item)
        if (this.mode === ModeEnum.ADD) {
          // turn form to edit mode
          this.mode = ModeEnum.EDIT
        }
      } else {
        // unselected
        this.selectedItem = null
      }
    },
  },
}
</script>

<style>
.menu {
  margin-bottom: 6px;
}

.total-info-container {
  width: 222px;
}
</style>
