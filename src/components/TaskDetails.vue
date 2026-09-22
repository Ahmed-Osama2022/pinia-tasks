<script setup>
// JavaScript / TypeScript code here

defineProps({
  task: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="">
    <p>{{ task.id }}</p>
    <h2>{{ task.title }}</h2>
  </div>
</template>

<style scoped>
/* Component scoped styles */
</style>
