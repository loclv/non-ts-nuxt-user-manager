<template>
  <div>
    <h1>About this application</h1>
    <p>This is a simple user manager website</p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'About The App',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'This is a simple user manager website'
        }
      ]
    }
  }
}
</script>
