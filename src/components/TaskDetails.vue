<script setup>
defineProps({
  task: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="card shadow-sm mb-3 mx-2" :class="{ 'border-primary': task.isFav }">
    <div class="card-body d-flex justify-content-between align-items-center">
      <div>
        <span class="badge bg-secondary me-2">#{{ task.id }}</span>
        <h5 class="card-title d-inline">{{ task.title }}</h5>
      </div>
      <span v-if="task.isFav" class="badge text-bg-primary">Favorite</span>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 0.75rem;
}
</style>
