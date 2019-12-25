require('./styles/style.css')

function createCalendar(elem, year, month, day) {
  let mon = month;
  let d = new Date(year, mon);
  let table = '<table><tr><th>mon</th><th>thu</th><th>wed</th><th>tue</th><th>fri</th><th>sat</th><th>sun</th></tr><tr>';
  for (let i = 0; i < getDay(d); i++) {
    table += '<td></td>';
  }
  while (d.getMonth() == mon) {
    console.log(d);
    console.log(new Date(year, month, day));
    if (d.getTime() == new Date(year, month, day).getTime()) {
      table += '<td class="now">' + d.getDate() + '</td>';
    } else {
      table += '<td>' + d.getDate() + '</td>';
    }
    if (getDay(d) % 7 == 6) {
      table += '</tr><tr>';
    }
    d.setDate(d.getDate() + 1);
  }
  if (getDay(d) != 0) {
    for (let i = getDay(d); i < 7; i++) {
      table += '<td></td>';
    }
  }
  table += '</tr></table>';
  elem.innerHTML = table;
}

function getDay(date) {
  let day = date.getDay();
  if (day == 0) day = 7;
  return day + 1;
}

function submit() {
  elem = document.getElementById("date").value;
  date = new Date(elem);
  calendar = document.getElementById("calendar");
  createCalendar(calendar, date.getYear(), date.getMonth(), date.getDate());
}

window.submit = submit