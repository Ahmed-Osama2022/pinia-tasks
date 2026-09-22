<script setup>
import TaskDetails from './components/TaskDetails.vue';
import { useTaskStore } from './stores/TaskStore';

const taskStore = useTaskStore();

console.log(taskStore);

// return { taskStore };
</script>

<template>
  <h1>Tasks store</h1>

  <p>{{ taskStore.TaskAppAuthorName }}</p>

  <hr />
  <div class="task-list">
    <div v-for="task in taskStore.tasks">
      <TaskDetails :task="task" />
    </div>
  </div>
</template>

<style scoped>
* {
  text-align: center;
}
p {
  font-size: 22px;
}
</style>
