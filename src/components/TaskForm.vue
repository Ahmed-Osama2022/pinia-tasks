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
  <div>
    <form @submit.prevent="handleSubmit">
      <input type="text" placeholder="Add a new task..." v-model="newTask" />
      <button class="btn btn-outline-success" type="submit">Add Task</button>
    </form>
  </div>
</template>

<style scoped>
/* Component scoped styles */
</style>
