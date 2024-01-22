<script setup>
import { getISO } from "@/utils";
import { isWeekEnd } from "@/utils/setMonth";
import { computed } from "vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const isCurrentDay = computed(() => getISO(new Date()) === getISO(props.data));
</script>

<template>
  <div
    :class="[
      'days-number-text',
      { 'current-day': isCurrentDay },
      { 'week-end': isWeekEnd(props.data) },
    ]"
  >
    {{ props.data.getDate() }}
  </div>
</template>

<style scoped>
@import "../assets/main.css";
</style>