const bitcoin = document.getElementById("bitcoin");
const ethereum = document.getElementById("ethereum");
const dogecoin = document.getElementById("dogecoin");
const apiUrl = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd";

const openIcon = document.getElementById("open-icon");
const navLinks = document.getElementById("nav-links");

async function fetchData(){
    const response = await fetch(apiUrl);
    const data = await response.json();

    bitcoin.innerHTML = data.bitcoin.usd;
    ethereum.innerHTML = data.ethereum.usd;
    dogecoin.innerHTML = data.dogecoin.usd;
}

fetchData();

openIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
})