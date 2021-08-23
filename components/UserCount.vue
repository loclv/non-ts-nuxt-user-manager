<template>
  <div class="count-info ma-4 d-flex" style="justify-content: space-between">
    <div>{{ title }} number:</div>
    <div>{{ count }}</div>
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
