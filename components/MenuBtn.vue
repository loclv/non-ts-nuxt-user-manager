<template>
  <v-container>
    <v-btn class="ma-2 menu-item" color="primary" dark>
      {{ title }}
      <v-icon dark right>{{ icon }}</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.menu-item {
  width: 127px;
}
</style>
