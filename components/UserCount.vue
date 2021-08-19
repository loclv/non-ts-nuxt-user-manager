<template>
  <div class="count-info">
    <div class="d-flex justify-start align-center">{{ title }} number:</div>
    <div class="d-flex justify-end align-center">{{ count }}</div>
  </div>
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
  font-size: 14px;
}
</style>
