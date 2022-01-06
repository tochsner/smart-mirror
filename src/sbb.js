function formatTimeString(timeString) {
  // convert datestring to make it compatible with safari
  timeString = timeString.replace(/-/g, "/");
  timeString = timeString.replace(/T/g, " ");
  timeString = timeString.substring(0, timeString.length - 5);

  const date = new Date(Date.parse(timeString));

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

async function displayConnection(destination) {
  const url = `https://transport.opendata.ch/v1/connections?from=Dübendorf&to=${destination}`;
  const response = await axios.get(url);

  const nextConnection = response.data.connections[0];

  const plannedDeparture = nextConnection.from.departure;
  const predictedDeparture = nextConnection.from.prognosis.departure;

  const plannedArrival = nextConnection.to.arrival;

  document.getElementById(`${destination}-dep`).innerHTML =
    formatTimeString(plannedDeparture);
  document.getElementById(`${destination}-arr`).innerHTML =
    formatTimeString(plannedArrival);

  if (plannedDeparture === predictedDeparture || predictedDeparture === null) {
    document.getElementById(`${destination}-delay`).style.display = "none";
  } else {
    document.getElementById(`${destination}-delay`).style.display = "visible";
    document.getElementById(`${destination}-delay`).innerHTML = getDelay(
      plannedDeparture,
      predictedDeparture
    );
  }
}

function refreshConnections() {
  displayConnection("schaffhausen");
  displayConnection("hb");
  displayConnection("eth");
}

refreshConnections();
setInterval(refreshConnections, 60 * 1000);
