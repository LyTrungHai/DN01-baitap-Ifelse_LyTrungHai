var dayEl = document.getElementById("inputDay");
var monthEl = document.getElementById("inputMonth");
var yearEl = document.getElementById("inputYear");

function dayOfMonth(m) {
  if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
    return 31;
  } else if (m == 2) {
    return 28;
  } else {
    return 30;
  }
}

function setDayOpts(n) {
  let opts = "";

  for (let i = 1; i <= n; i++) {
    opts += `<option value=${i}>${i}</option>`;
  }

  inputDay.innerHTML = opts;
}

monthEl.addEventListener("change", function (e) {
  setDayOpts(dayOfMonth(monthEl.value));
});
