<script setup lang="ts">
import { useNow } from '@vueuse/core';

// Destructuring useNow to get `now`, `pause`, and `resume`
const { now, pause, resume } = useNow({ controls: true });
</script>

<template>
  <div>
    <h1>This is the About page</h1>
    <p>Best class in NP</p>
  </div>
  <div>
    <p>Current time: {{ now }}</p>
    <button @click="pause">Pause</button>
    <button @click="resume">Resume</button>
  </div>
</template>

<style scoped>
</style>

