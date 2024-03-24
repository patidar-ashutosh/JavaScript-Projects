const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");
const apiErrorContainer = document.querySelector(".api-error-container");

// initially variables need
let oldTab = userTab;
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
oldTab.classList.add("current-tab");
getfromSessionStorage();

// Logic for switching tab is start
function switchTab(newTab) {
    if(newTab != oldTab) {
        oldTab.classList.remove("current-tab");
        oldTab = newTab;
        oldTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active")) {
            // means the searchForm tab is now open so make it visible
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            apiErrorContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else {
            // means the user weather tab is open now so make it visible
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            apiErrorContainer.classList.remove("active");
            // now for show the user location weather we first check the localStorage for coordinates
            getfromSessionStorage();
        }
    }
}

userTab.addEventListener("click", () => {
    // means the your weather is clicked
    switchTab(userTab);
});

searchTab.addEventListener("click", () => {
    // means the search weather tab is clicked
    switchTab(searchTab);
});
// Logic for switching tab is end


// check if cordinates are already present in session storage or not
function getfromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates) {
        // if the coordinates not present means we show the grant access section
        grantAccessContainer.classList.add("active");
    }
    else {
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }
}

// this function is find the weather using latitude and longitude
async function fetchUserWeatherInfo(coordinates) {
    const {lat, lon} = coordinates;
    // make grant container invisible
    grantAccessContainer.classList.remove("active");
    // make loader visible
    loadingScreen.classList.add("active");

    // API CALL
    try{
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        loadingScreen.classList.remove("active");
        apiErrorContainer.classList.remove("active");

        if(data.name != undefined){            
            userInfoContainer.classList.add("active");
            renderWeatherInfo(data);
        }
        else{
            throw new Error("Not getting location");
        }
    }
    catch(error){
        userInfoContainer.classList.remove("active");
        apiErrorContainer.classList.add("active");
    }
}


// Logic to get the user location latitude and longitude is start
const grantAccessButton = document.querySelector("[data-grantAccess]");
grantAccessButton.addEventListener("click", getLocation);

function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        alert("No gelolocation support available");
    }
}

function showPosition(position) {

    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    }

    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);
}
// Logic to get the user location latitude and longitude is end


// Logic to find searched city is start
const searchInput = document.querySelector("[data-searchInput]");
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const cityName = searchInput.value;
    searchInput.value = "";

    userInfoContainer.classList.remove("active");
    apiErrorContainer.classList.remove("active");

    if(cityName == ""){
        return;
    }
    else{
        fetchSearchWeatherInfo(cityName);
    }
})

// this function find weather with searched city
async function fetchSearchWeatherInfo(city) {
    loadingScreen.classList.add("active");

    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        loadingScreen.classList.remove("active");
        apiErrorContainer.classList.remove("active");

        if(data.name != undefined){            
            userInfoContainer.classList.add("active");
            renderWeatherInfo(data);
        }
        else{
            throw new Error("City not found");
        }
    }
    catch(error){
        userInfoContainer.classList.remove("active");
        loadingScreen.classList.remove("active");
        apiErrorContainer.classList.add("active");
    }
}
// Logic to find searched city is end


// this function is show the weather details in UI
function renderWeatherInfo(weatherInfo) {
    // fistly, we have to fetch the elements 
    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-cloudiness]");

    // fetch values from weatherInfo object and put it in UI elements
    cityName.innerText = weatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = `${weatherInfo?.main?.temp} °C`;
    windspeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
    humidity.innerText = `${weatherInfo?.main?.humidity}%`;
    cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;
}