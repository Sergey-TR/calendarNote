import { getDaysOfMonth, getFirstWeekday, getLastDay, getLastDayIndex, getPrevMonthLastDay, getNextDays } from "./index";

export const getAllDaysMonth = (day) => {

  const currentDay = new Date(day);
  const month = currentDay.getMonth();
  const year = currentDay.getFullYear();
  const daysInMonth = getDaysOfMonth(month, year);
  const firstDayIndex = getFirstWeekday(month, year);
  const lastDay = getLastDay(year, month);
  const lastDayIndex = getLastDayIndex(year, month, lastDay);
  const lastDayDate = lastDay.getDate();
  const preventMonthLastDay = getPrevMonthLastDay(year, month);
  const preventMonthLastDate = preventMonthLastDay.getDate();
  const nextMonthDays = getNextDays(lastDayIndex);

  const preventDays = [];
  const days = [];
  const nextDays = [];
  
  for (let i = firstDayIndex; i > 0; i--) {
    preventDays[i] = new Date(year, month - 1, preventMonthLastDate - i + 1);
  }

  for (let i = firstDayIndex; i < daysInMonth + firstDayIndex; i++) {
    days[i] = new Date(year, month, i + 1 - firstDayIndex);
  }

  for (let i = 0; i < nextMonthDays; i++) {
    nextDays[i] = new Date(year, month + 1, i + 1);
  }

  const fullMonth = preventDays.reverse().concat(days, nextDays);

  const filterMonth = fullMonth.filter(n => n)
  
  return filterMonth
  
}

export const getMonthTitle = (month)=> {
  const verificationDate = new Date(2020, month, 1);
  const monthTitle = verificationDate.toLocaleDateString('ru-RU', {month: 'long'});
  return monthTitle.charAt(0).toUpperCase() + monthTitle.slice(1)
}

export const isWeekEnd = (date) => {
  return (date.getDay() === 6 || date.getDay() === 0) ? true: false
 }

export const getBeforeMonth = (data) => {
  const day = new Date(data)
  day.setMonth(day.getMonth() - 1)
  return day
}

export const getAfterMonth = (data) => {
  const day = new Date(data)
  day.setMonth(day.getMonth(data) + 1)
  return day
}