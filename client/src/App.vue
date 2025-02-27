<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>

<template>
  <header>
 
    <NavBar />

    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

  </header>
  <div class="container body-container">
  <RouterView />
  </div>
</template>

<style scoped>
body.container {
  background-color: aqua;
}
</style>
