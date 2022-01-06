function getAemtli() {
  currentdate = new Date();
  let oneJan = new Date(currentdate.getFullYear(), 0, 1);
  let numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
  let result = Math.ceil((currentdate.getDay() + numberOfDays - 4) / 7);

  let currentMode = result % 3;

  if (currentMode === 0) {
    document.getElementById("name_staubsaugen").innerHTML = "Jonathan";
    document.getElementById("name_badezimmer").innerHTML = "Tobia";
    document.getElementById("name_chillen").innerHTML = "Tobias";
  }

  if (currentMode === 1) {
    document.getElementById("name_staubsaugen").innerHTML = "Tobia";
    document.getElementById("name_badezimmer").innerHTML = "Tobias";
    document.getElementById("name_chillen").innerHTML = "Jonathan";
  }

  if (currentMode === 2) {
    document.getElementById("name_staubsaugen").innerHTML = "Tobias";
    document.getElementById("name_badezimmer").innerHTML = "Jonathan";
    document.getElementById("name_chillen").innerHTML = "Tobia";
  }
}

getAemtli();
let oneDay = 24 * 60 * 60 * 1000;
setInterval(getAemtli(), oneDay);
