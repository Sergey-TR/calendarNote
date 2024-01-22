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
@import "../assets/main.css"; /* .box {
  width: 100%;
  display: flex;
  padding: 10px;
}

.box-month {
  width: 100%;
}

.box-switch {
  margin: 0 20px;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 150px;
}

.switcher {
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  width: 100px;
  height: 40px;
  border: 2px solid #fff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #141414;
}

.switcher:hover {
  cursor: pointer;
  opacity: 0.5;
}

.switcher:active {
  width: 95px;
  height: 35px;
} */
</style>