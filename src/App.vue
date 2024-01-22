<script setup>
import CalendarVue from "./pages/Calendar.vue";
</script>

<template>
  <div class="center">
    <CalendarVue></CalendarVue>
  </div>
</template>

<style scoped>
@import "./assets/main.css";
.center {
  padding: 0 calc(50% - 800px);
}
</style>
