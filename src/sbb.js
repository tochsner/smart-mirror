function formatTimeString(timeString) {
  // convert datestring to make it compatible with safari
  alert("A");
  timeString = timeString.replaceAll("-", "/");
  alert("B");
  timeString = timeString.replaceAll("T", " ");
  alert("C");
  timeString = timeString.substring(0, timeString.length - 5);

  alert("D");
  alert(timeString);

  const date = new Date(Date.parse(timeString));

  alert("E");
  alert(date);

  var formatOptions = { hour: "2-digit", minute: "2-digit" };
  return date.toLocaleString("de-CH", formatOptions);
}

function getDelay(planned, predicted) {
  const msPlanned = Date.parse(planned);
  const msPredicted = Date.parse(predicted);

  const delay = Math.round((msPredicted - msPlanned) / 1000 / 60);

  if (delay > 0) return `+${delay}`;
  else return `${delay}`;
}

async function getSbbToSh(destination) {
  const url = `https://transport.opendata.ch/v1/connections?from=Dübendorf&to=${destination}`;
  const response = await axios.get(url);

  alert("0");

  const nextConnection = response.data.connections[0];

  alert("1");

  const plannedDeparture = nextConnection.from.departure;
  const predictedDeparture = nextConnection.from.prognosis.departure;

  const plannedArrival = nextConnection.to.arrival;

  alert("2");
  document.getElementById(`${destination}-dep`).innerHTML =
    formatTimeString(plannedDeparture);
  document.getElementById(`${destination}-arr`).innerHTML =
    formatTimeString(plannedArrival);
  alert("3");

  if (plannedDeparture === predictedDeparture || predictedDeparture === null) {
    document.getElementById(`${destination}-delay`).style.display = "none";
  } else {
    document.getElementById(`${destination}-delay`).style.display = "visible";
    document.getElementById(`${destination}-delay`).innerHTML = getDelay(
      plannedDeparture,
      predictedDeparture
    );
  }
  alert("4");
}

function refreshConnections() {
  getSbbToSh("schaffhausen");
  getSbbToSh("hb");
  getSbbToSh("eth");
}

refreshConnections();
setInterval(refreshConnections, 60 * 1000);
