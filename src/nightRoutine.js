var today = new Date();
var time = today.getHours()

const nightNames = ['Sunshine', 'Tiger', 'Darling', 'Honey', 'Bratan', 'Cutie'];
if(time >=22) {
    let nightSatz = "Time to sleep, " + nightNames[Math.floor(Math.random() * nightNames.length)] + "!";
    document.getElementById("begruessung").innerHTML = nightSatz;
    document.getElementById("verbindungen-titel").style.display = "none";
    document.getElementById("quote").style.display = "block";
    document.getElementById("aemtli").style.display = "none";
    document.getElementById("einkauf").style.display = "none";
    document.getElementById("morningRoutine").style.display = "block";
    document.getElementById("quotePreambel").innerHTML = "Quote for the night: ";
    getQuote();
}

async function getQuote() {
    const url = 'https://type.fit/api/quotes';
    const response = await axios.get(url);
    const quote = response.data[Math.floor(Math.random() * response.data.length)];
    document.getElementById("quote").innerHTML = quote.text;
}
