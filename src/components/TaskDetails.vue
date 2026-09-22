<script setup>
defineProps({
  task: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="card shadow-sm mb-3">
    <div class="card-body">
      <span class="badge bg-secondary me-2">#{{ task.id }}</span>
      <h5 class="card-title d-inline">{{ task.title }}</h5>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 0.75rem;
}
</style>