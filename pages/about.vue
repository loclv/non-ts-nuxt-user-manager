<template>
  <v-main>
    <v-container>
      <h1>About this application</h1>

      <p>This is a simple user manager website</p>
    </v-container>
  </v-main>
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
          content: 'This is a simple user manager website',
        },
      ],
    }
  },
}
</script>
