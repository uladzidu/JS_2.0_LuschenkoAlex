

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
    document.getElementById('clouds').innerHTML = data.weather[0].main
    document.getElementById('country').innerHTML = data.sys.country

    if (data.weather[0].main === 'Clouds') {
        document.querySelector('img').src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw4rywwXRwFoqoHRBQmFLyRKWk5MOMFwzJFBfRqlHcqecOZQnsCRVdGdVIdageCYQc5Co&usqp=CAU'
    }
    if (data.weather[0].main === 'Clear') {
        document.querySelector('img').src = 'https://media.istockphoto.com/vectors/cute-flat-sun-icon-vector-id1124567572?k=20&m=1124567572&s=612x612&w=0&h=qA2-ugQviG9uGvpn5-K90sK9w5QZjd3TetULc_5VECc='
    }
}

getWeather();

document.querySelector('#city').onchange = getWeather;

