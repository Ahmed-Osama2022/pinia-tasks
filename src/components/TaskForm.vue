<script setup>
import { useTaskStore } from '@/stores/TaskStore';
import { ref } from 'vue';

// JavaScript / TypeScript code here

const taskStore = useTaskStore();

const newTask = ref('');

const handleSubmit = () => {
  if (newTask.value.length > 0) {
    taskStore.addTask({
      title: newTask.value,
      isFav: false,
      id: Math.floor(Math.random() * 1000),
    });
  }

  newTask.value = '';
};
</script>

<template>
  <div class="form d-flex justify-content-center my-4">
    <form @submit.prevent="handleSubmit" class="d-flex gap-2">
      <input type="text" placeholder="Add a new task..." v-model="newTask" class="form-control" />
      <button class="btn btn-outline-success" type="submit">Add Task</button>
    </form>
  </div>
</template>

<style scoped>
/* Component scoped styles */
</style>
