

const param = {
    "url" : "https://api.openweathermap.org/data/2.5/",
    "appid" : '0e61b4979d9b78367263c5c4a815b3e9'
}

function getWeather() {

    const cityId = document.querySelector('#city').value;

    console.log(cityId)

    fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
        .then(weather => {
            return weather.json();
        }).then(showWeather);


}

function showWeather(data) {
    console.log(data);
    document.getElementById('city-name').innerHTML = data.name
    document.getElementById('degrees').innerHTML = Math.floor(data.main.temp) + '°'
}

getWeather();

document.querySelector('#city').onchange = getWeather;

