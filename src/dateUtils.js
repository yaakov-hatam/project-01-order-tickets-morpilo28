export function datePlusDays(date, plusDays) {
  let resultDate = new Date(date.valueOf());
  resultDate.setDate(resultDate.getDate() + plusDays);
  return resultDate;
}

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

export function getDayString(dateObj) {
  let day = dateObj.getDay();
  let date = dateObj.getDate();
  let month = dateObj.getMonth();

  return days[day] + ", " + months[month] + " " + date;
}

export function parseTime(timeString) {
  if (timeString === '') return null;

  let time = timeString.match(/(\d+)(:(\d\d))?\s*(p?)/i);
  if (time === null) return null;

  let hours = parseInt(time[1], 10);
  if (hours === 12 && !time[4]) {
    hours = 0;
  }
  else {
    hours += (hours < 12 && time[4])? 12 : 0;
  }
  let d = new Date();
  d.setHours(hours);
  d.setMinutes(parseInt(time[3],10) || 0);
  d.setSeconds(0, 0);
  return d;
}
