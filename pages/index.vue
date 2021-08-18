<template>
  <main>
    <v-app-bar app dark></v-app-bar>

    <v-main>
      <v-container>
        <h1>User manager</h1>

        <SimpleTable></SimpleTable>
        <NuxtLink to="/about">About</NuxtLink>
      </v-container>
    </v-main>
  </main>
</template>

<script>
</script>

<style>
body {
  font-family: Lato, sans-serif;
}
</style>
