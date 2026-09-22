<script setup>
import { useTaskStore } from '@/stores/TaskStore';

defineProps({
  task: {
    type: Object,
    required: true,
  },
});

const taskStore = useTaskStore();
</script>

<template>
  <div :class="`card shadow-sm mb-3 ${task.isFav ? 'border-primary border-2' : ''}`">
    <div class="card-body d-flex justify-content-between align-items-center">
      <div>
        <span class="badge bg-secondary me-2">#{{ task.id }}</span>
        <h5 class="card-title d-inline">{{ task.title }}</h5>
      </div>
      <div class="ms-auto d-flex flex-row gap-2 align-items-center">
        <span v-if="task.isFav" class="badge text-bg-primary">Favorite</span>
        <span @click="taskStore.deleteTask(task.id)" class="delete-btn"
          ><i class="pi pi-trash text-danger fs-5"></i
        ></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 0.75rem;
}
.delete-btn {
  cursor: pointer;
  transition: 0.2s;
}
.delete-btn:active {
  transform: scale(0.8);
}
</style>
