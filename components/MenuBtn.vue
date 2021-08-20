<template>
  <v-btn
    class="menu-item"
    :style="{ backgroundColor: color }"
    dark
    @click="onClick"
  >
    {{ title }}
    <v-icon dark right>{{ icon }}</v-icon>
  </v-btn>
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
    color: {
      type: String,
      required: true,
    },
  },
  methods: {
    onClick() {
      this.$emit('click', 'test')
    },
  },
}
</script>

<style scoped>
.menu-item {
  width: 128px;
  margin: 16px;
}
</style>
