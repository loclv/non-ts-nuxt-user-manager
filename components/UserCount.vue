<template>
  <p class="count-info">{{ title }} number: {{ count }}</p>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style scoped>
.count-info {
  font-size: 16px;
  margin-top: 6px;
  margin-bottom: 6px;
}
</style>
