<script setup>
import CalendarDays from "./CalendarDays.vue";
import { getMonthTitle, weekDayName, getWeekNumber, getSunday } from "@/utils";

const props = defineProps({
  date: {
    type: [Object, null],
    required: true,
  },
  currentMonth: {
    type: [Object, null],
    required: true,
  },
  changeDate: {
    type: [Object, null],
    required: true,
  },
});
</script>

<template>
  <div class="wrapper">
    <div class="month">
      <div class="title-year-month">
        <div class="title-year">{{ props.currentMonth.getFullYear() }}</div>
        <div class="title-month">
          {{ getMonthTitle(props.currentMonth.getMonth()) }}
        </div>
      </div>
      <div class="title-week">
        <div class="title-week-number">week</div>
        <div class="box-title-week-day">
          <div
            class="text title-week-day"
            v-for="(_, i, idx) in 7"
            :key="idx"
            :class="{ weekEnd: i === 5 || i === 6 }"
          >
            {{ weekDayName(i) }}
          </div>
        </div>
      </div>
      <div class="day-items">
        <div class="week-number">
          <div
            class="week-number-item"
            v-for="(w, idx) in getSunday(props.date)"
            :key="idx"
          >
            {{ getWeekNumber(w) }}
          </div>
        </div>
        <div class="days">
          <div
            class="day-item"
            v-for="(day, idx) in props.date"
            :key="idx"
            :class="{
              notInMonth: day.getMonth() != props.currentMonth.getMonth(),
            }"
          >
            <CalendarDays :data="day" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../assets/main.css";
</style>
