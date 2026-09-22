<script setup>
import { ref } from 'vue';
import TaskDetails from './components/TaskDetails.vue';
import { useTaskStore } from './stores/TaskStore';

const taskStore = useTaskStore();

const favShow = ref(false);

// console.log(taskStore);
</script>

<template>
  <h1>Tasks store</h1>

  <p>App Author Name: {{ taskStore.TaskAppAuthorName }}</p>

  <hr />
  <!-- Button toggler -->
  <div class="d-flex justify-content-center align-items-center gap-2 my-3">
    <span>All Tasks</span>
    <label class="switch">
      <input type="checkbox" v-model="favShow" />
      <span class="slider"></span>
    </label>
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
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 28px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  inset: 0;
  background-color: #ccc;
  border-radius: 28px;
  transition: 0.3s;
}
.slider::before {
  content: '';
  position: absolute;
  height: 22px;
  width: 22px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  border-radius: 50%;
  transition: 0.3s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.switch input:checked + .slider {
  background-color: #0d6efd;
}
.switch input:checked + .slider::before {
  transform: translateX(22px);
}
</style>
