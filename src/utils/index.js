export const getDaysOfMonth=(month, year)=> {
  return new Date(year, month + 1, 0).getDate()
}

export const getFirstWeekday=(month, year)=> {
  return new Date(year, month, 1).getUTCDay()
}

export const getLastDay = (year, month) => {
  return new Date(year, month + 1, 0);
}

export const getLastDayIndex = (year, month, day) => {
  return new Date(year, month, day.getDate()).getUTCDay()
}

export const getPrevMonthLastDay = (year, month) => {
  return new Date(year, month, 0);
}

export const getNextDays = (idx) => {
  return (7 - idx - 1)
}

export const weekDayName=(i)=> {
  const d = new Date('2021-04-05')
      d.setDate(d.getDate() + i)
      return d.toLocaleDateString('ru-RU', {weekday: 'short'})
}

export const getMonthTitle = (month)=> {
  const verificationDate = new Date(2020, month, 1);
  const monthTitle = verificationDate.toLocaleDateString('ru-RU', {month: 'long'});
  return monthTitle.charAt(0).toUpperCase() + monthTitle.slice(1)
}

export const getISO = (data) => {
  const d = new Date(data)
        d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
        return d.toISOString().split('T')[0]
}

export const getWeekNumber = (date) => {
    const today = new Date();
    let firstDayYear = new Date(today.getFullYear(), 0, 1)
    const lastDayYear = new Date(today.getFullYear(), 11, 31)
    const currentDay = new Date(date);
    if((currentDay < firstDayYear) && (currentDay.getDay() === 0)) {

      const firstDayPrevYear = new Date(today.getFullYear() - 1, 0, 1)
      const pastDay = (currentDay - firstDayPrevYear) / 86400000;
      const pastWeek = Math.ceil((pastDay) / 7)
      
      return pastWeek   
    }
    if(lastDayYear < currentDay) {
      firstDayYear = new Date(today.getFullYear() + 1, 0, 1)
    }
    if (currentDay.getDay() === 0) {
      const pastDayYear = (currentDay - firstDayYear) / 86400000;
      const weekNumber = Math.ceil((pastDayYear + 1) / 7);
      return weekNumber
    }
}

export const getSunday = (date) => {
  console.log(date)
  const sunday = []
  date.forEach(element => {
    if(element.getDay() === 0) {
      sunday.push(element)
    }
  });
  return sunday
}

export const getPrevMonth = () => {
  let day = new Date();
  day.setMonth(day.getMonth() - 1);
  const date = new Date(day);
  console.log(date)
  return date;
}