<script setup>
import TaskDetails from './components/TaskDetails.vue';
import { useTaskStore } from './stores/TaskStore';

const taskStore = useTaskStore();

// console.log(taskStore);
</script>

<template>
  <h1>Tasks store</h1>

  <p>App Author Name: {{ taskStore.TaskAppAuthorName }}</p>

  <hr />
  <div class="task-list">
    <p>All Tasks</p>
    <div v-for="task in taskStore.tasks">
      <TaskDetails :task="task" />
    </div>
  </div>

  <!-- for only the favourites -->
  <div class="task-list mb-5">
    <p>Favourite Tasks</p>
    <div v-for="task in taskStore.favs">
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
