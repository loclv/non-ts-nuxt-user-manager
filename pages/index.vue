<template>
  <main>
    <v-app>
      <v-app-bar app dark>
        <v-toolbar-title>User manager</v-toolbar-title>
      </v-app-bar>

      <v-main dark>
        <v-container dark>
          <div class="ma-4">
            <v-row>
              <v-col cols="12" md="4">
                <UserCount title="🧑‍🤝‍🧑 Users total" :count="users.length" />
              </v-col>
              <v-col cols="12" md="4" style="border-left-style: solid">
                <UserCount title="💃 Woman users" :count="womanCount" />
                <UserCount title="🍺 Man users" :count="manCount" />
                <UserCount title="🏳️‍🌈 Other users" :count="otherCount" />
              </v-col>
            </v-row>
          </div>

          <v-card style="margin-bottom: 6px" dark>
            <v-card-actions>
              <MenuBtn
                title="add"
                icon="mdi-account-plus"
                color="#6200EA"
                @click="onAdd"
                @add="onAdd"
              />
              <MenuBtn
                title="edit"
                icon="mdi-account-edit"
                color="#00ACC1"
                :is-disabled="!selectedItem"
                @click="onEdit"
                @edit="onAdd"
              />
              <MenuBtn
                title="delete"
                icon="mdi-delete"
                color="#F4511E"
                :is-disabled="!selectedItem"
                @click="onDelete"
                @delete="onAdd"
              />

              <v-spacer></v-spacer>

              <v-btn icon @click="isFormShow = !isFormShow">
                <v-icon>{{
                  isFormShow ? 'mdi-chevron-up' : 'mdi-chevron-down'
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="isFormShow">
                <v-divider></v-divider>

                <h2 class="ma-4">
                  {{ (mode === ModeEnum.ADD ? 'Add' : 'Edit') + ' user' }}
                </h2>

                <UserForm
                  ref="userFormRef"
                  @submitted="onSubmit"
                  @form-cancel="onFormCancel"
                />
              </div>
            </v-expand-transition>
          </v-card>

          <UserTable :users="users" @selected="onSelect" />
        </v-container>
      </v-main>

      <Footer />
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
        const { name, gender, email } = user
        const id = this.selectedItem.id
        this.$store.commit('users/edit', { id, name, gender, email })
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
      if (this.selectedItem !== null && this.mode !== ModeEnum.DELETE) {
        this.$refs.userFormRef.set(this.selectedItem)
      }
      this.mode = ModeEnum.EDIT
    },
    onDelete() {
      this.isFormShow = false
      const id = this.selectedItem.id
      this.$store.commit('users/delete', { id })
      this.mode = ModeEnum.DELETE

      this.selectedItem = null
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
