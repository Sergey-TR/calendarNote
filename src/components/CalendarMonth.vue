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

/* .wrapper {
  width: 50%;
  height: calc((100vh / 3) - 50px);
  background-color: #515151;
  box-shadow: 0px 5px 5px 5px rgba(234, 232, 232, 0.17);
  margin: 20px 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.title-year-month {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.title-year,
.title-month {
  color: #fff;
  font-size: 20px;
  font-weight: bold;
}
.title-week,
.day-items {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.title-week-number,
.week-number {
  color: #fff;
  font-size: 18px;
  width: 50px;
}

.week-number-item {
  color: #fff;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  min-height: 20px;
}
.box-title-week-day {
  min-width: calc(100% - 50px);
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.week-number {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
}
.text {
  color: #fff;
}
.weekEnd {
  font-size: 20px;
  font-weight: bold;
  color: rgb(189, 2, 2);
}
.title-week-day {
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
}
.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  min-width: calc(100% - 50px);
}

.day-item {
  color: #fff;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
}

.notInMonth {
  color: #888888;
} */
</style>
