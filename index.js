const APIKEY ="2997c2b3a0e0bdca76dae67ba3b77698";
const APIURL ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");
const weatherIcon = document.querySelector("#weather-icon");

async function checkWeather(weathercityname) {
    const response = await fetch(APIURL +weathercityname + `&appid=${APIKEY}`);

    if (response.status == 404) {
    alert("City not found. Please try again.");
    return;
    }else {
 var data = await response.json();

    document.querySelector(".weathercityname").innerHTML = data.name;
    document.querySelector(".tempweathermode").innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector("#texthumidity").innerHTML = data.main.humidity+"%";
    document.querySelector("#textwind").innerHTML = data.wind.speed+"km/hr";

    if(data.weather[0].main.toLowerCase() == "clouds"){
        weatherIcon.src = "clouds.png";
    } else if(data.weather[0].main.toLowerCase() =="clear"){
        weatherIcon.src = "clear.png";
    } else if(data.weather[0].main.toLowerCase() == "rain"){
        weatherIcon.src = "rain.png"; 
    } else if(data.weather[0].main.toLowerCase() == "snow"){
        weatherIcon.src = "snow.png";
    } else if(data.weather[0].main.toLowerCase() == "drizzle"){
        weatherIcon.src = "drizzle.png";
    } else if(data.weather[0].main.toLowerCase() == "mist"){
        weatherIcon.src = "mist.png";
    }

    document.querySelector("#weather-mode").style.display = "block";
    
    }
    }

searchButton.addEventListener("click",()=>{
   checkWeather(searchBox.value);
})

