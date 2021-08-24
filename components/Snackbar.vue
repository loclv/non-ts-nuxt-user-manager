<template>
  <v-snackbar v-model="snackbar" :timeout="timeout">
    {{ updatedInfo }}

    <template #action="{ attrs }">
      <v-btn
        color="pink"
        text
        v-bind="attrs"
        @click="$store.commit('snackbar/hide')"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      timeout: 1600,
    }
  },
  computed: {
    snackbar: {
      get() {
        return this.$store.state.snackbar.isShowing
      },
      set(isShowing) {
        this.$store.commit('snackbar/hide')
        return isShowing
      },
    },
    updatedInfo() {
      return this.$store.state.snackbar.updatedInfo
    },
  },
}
</script>
