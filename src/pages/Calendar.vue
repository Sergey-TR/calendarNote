<script setup>
import CalendarMonth from "@/components/CalendarMonth.vue";
import { ref } from "vue";
import {
  getAllDaysMonth,
  getBeforeMonth,
  getAfterMonth,
} from "@/utils/setMonth";

let date = ref(new Date());

function getPrevMonth(data) {
  const day = getBeforeMonth(data);
  const month = getAllDaysMonth(day);
  return month;
}
function getCurrentMonth(data) {
  const day = new Date(data);
  const month = getAllDaysMonth(day);
  return month;
}
function getNextMonth(data) {
  const day = getAfterMonth(data);
  const month = getAllDaysMonth(day);
  return month;
}

function previous() {
  let newMonth = date.value.setMonth(date.value.getMonth() - 1);
  date.value = new Date(newMonth);
}
function next() {
  let newMonth = date.value.setMonth(date.value.getMonth() + 1);
  date.value = new Date(newMonth);
}
</script>

<template>
  <div class="box">
    <div class="box-switch">
      <button class="switcher" @click="previous()">previous</button>
      <button class="switcher" @click="next()">next</button>
    </div>
    <div class="box-month">
      <CalendarMonth
        :date="getPrevMonth(date)"
        :currentMonth="getBeforeMonth(date)"
        :changeDate="date"
      />
      <CalendarMonth
        :date="getCurrentMonth(date)"
        :currentMonth="new Date(date)"
        :changeDate="date"
      />
      <CalendarMonth
        :date="getNextMonth(date)"
        :currentMonth="getAfterMonth(date)"
        :changeDate="date"
      />
    </div>
  </div>
</template>

<style scoped>
@import "../assets/main.css";
</style>