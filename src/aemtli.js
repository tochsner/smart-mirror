function getAemtli() {
  const currentdate = new Date();

  const daysSinceStart = Math.floor(currentdate / (24 * 60 * 60 * 1000));
  const weeksSinceStart = Math.floor((daysSinceStart - 4) / 7);

  const currentMode = (weeksSinceStart - 1) % 3;

  if (currentMode === 0) {
    document.getElementById("name_staubsaugen").innerHTML = "Jonathan/Nadina";
    document.getElementById("name_badezimmer").innerHTML = "Annik";
    document.getElementById("name_chillen").innerHTML = "Tobias";
  }

  if (currentMode === 1) {
    document.getElementById("name_staubsaugen").innerHTML = "Annik";
    document.getElementById("name_badezimmer").innerHTML = "Tobias";
    document.getElementById("name_chillen").innerHTML = "Jonathan/Nadina";
  }

  if (currentMode === 2) {
    document.getElementById("name_staubsaugen").innerHTML = "Tobias";
    document.getElementById("name_badezimmer").innerHTML = "Jonathan/Nadina";
    document.getElementById("name_chillen").innerHTML = "Annik";
  }
}

getAemtli();
let oneDay = 24 * 60 * 60 * 1000;
setInterval(getAemtli(), oneDay);
