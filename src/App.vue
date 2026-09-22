<script setup>
import { ref } from 'vue';
import TaskDetails from './components/TaskDetails.vue';
import ToggleSwitch from './components/ToggleSwitch.vue';
import { useTaskStore } from './stores/TaskStore';

const taskStore = useTaskStore();

const favShow = ref(false);

// console.log(taskStore);
</script>

<template>
  <header class="text-center">
    <h1>Tasks store</h1>

    <p>App Author Name: {{ taskStore.TaskAppAuthorName }}</p>
  </header>
  <hr />
  <!-- Button toggler -->
  <div class="d-flex justify-content-center align-items-center gap-2 my-3 text-center">
    <span>All Tasks</span>
    <ToggleSwitch v-model="favShow" />
    <span>Favorites</span>
  </div>

  <!-- All Tasks -->
  <div class="task-list" v-if="!favShow">
    <p>
      All Tasks:
      <span class="bg-success px-3 py-2 ms-2 text-white rounded-3">{{ taskStore.totalCount }}</span>
    </p>

    <div v-for="task in taskStore.tasks">
      <TaskDetails :task="task" />
    </div>
  </div>

  <!-- The favourite tasks -->
  <div class="task-list mb-5" v-if="favShow">
    <p>Favourite Tasks</p>
    <div v-for="task in taskStore.favs">
      <TaskDetails :task="task" />
    </div>
  </div>
</template>

<style scoped>
/* * { */
/* text-align: center; */
/* } */
p {
  font-size: 22px;
}
</style>
