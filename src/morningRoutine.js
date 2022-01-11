var today = new Date();
var time = today.getHours()

const begruessungen = ['Sunshine', 'Tiger', 'Darling', 'Honey', 'Bratan', 'Cutie'];
if(time <=9 && time >=5) {
    let begruessungenSatz = "Good Morning, " + begruessungen[Math.floor(Math.random() * begruessungen.length)] + "!";
    document.getElementById("begruessung").innerHTML = begruessungenSatz;
    document.getElementById("verbindungen-titel").style.display = "none";
    document.getElementById("quote").style.display = "block";
    document.getElementById("aemtli").style.display = "none";
    document.getElementById("einkauf").style.display = "none";
    document.getElementById("morningRoutine").style.display = "block";
    getQuote();
}

async function getQuote() {
    const url = 'https://type.fit/api/quotes';
    const response = await axios.get(url);
    const quote = response.data[Math.floor(Math.random() * response.data.length)];
    document.getElementById("quote").innerHTML = quote.text;
}
