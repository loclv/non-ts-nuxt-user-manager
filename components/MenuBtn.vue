<template>
  <v-btn
    class="ma-4 menu-item-w"
    :style="{ backgroundColor: color }"
    dark
    :disabled="isDisabled"
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
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick() {
      this.$emit('click', 'test')
    },
  },
}
</script>

<style>
.menu-item-w {
  width: 128px;
}
</style>
