<script setup>
import { useTaskStore } from './stores/TaskStore';

const taskStore = useTaskStore();

console.log(taskStore);

// return { taskStore };
</script>

<template>
  <h1>Tasks store</h1>

  <p>{{ taskStore.TaskAppAuthorName }}</p>
</template>

<style scoped>
* {
  text-align: center;
}
p {
  font-size: 22px;
}
</style>
