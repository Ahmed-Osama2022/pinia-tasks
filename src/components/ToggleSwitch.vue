<script setup>
const model = defineModel({ type: Boolean, default: false });
</script>

<template>
  <label class="switch">
    <input type="checkbox" v-model="model" />
    <span class="slider"></span>
  </label>
</template>

<style scoped>
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
  background-color: #16a34a;
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