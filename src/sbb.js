async function getSbbToSh() {
url = 'https://google.com';
const res = await axios.get(url);
let page = res.data;
console.log(page);
}

getSbbToSh();