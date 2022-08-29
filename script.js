let getData = {
    name: '.package-name',
    temp: '.price',
    description: '.disclaimer',
    icon: '.features li',
    country: '.country',
    feel: '.feel',
    humidity: '.humidity',
    pressure: '.pressure',
    sunrise: '.sunrise',
    sunset: '.sunset'
}
function time(unixTimestamp) {
    let date = new Date(unixTimestamp * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let formattedTime = hours + ':' + minutes.substr(-2);
    return formattedTime;
}

function timeConverter(UNIX_timestamp) {
    let a = new Date(UNIX_timestamp * 1000);
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let time = date + ' ' + month + ' ' + year;
    return time;
}

function f1(data) {
    document.querySelector(`${getData.name}`).innerHTML = data.name;
    document.querySelector(`${getData.temp}`).innerHTML = Math.round(data.main.temp) + '&deg;';
    document.querySelector(`${getData.description}`).textContent = data.weather[0]['description'];
    document.querySelector(`${getData.icon}`).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    document.querySelector(`${getData.country}`).textContent = data.sys.country;
    document.querySelector(`${getData.feel}`).innerHTML = Math.round(data.main.feels_like) + '&deg;';
    document.querySelector(`${getData.humidity}`).innerHTML = data.main.humidity + '%';
    document.querySelector(`${getData.pressure}`).innerHTML = data.main.pressure + ' atm';
    document.querySelector(`${getData.sunrise}`).innerHTML = time(data.sys.sunrise);
    document.querySelector(`${getData.sunset}`).innerHTML = time(data.sys.sunset);
}

let id = document.getElementById('s1');
id.addEventListener('change', () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${id.value}&appid=3612c8feb0a2a51cb89b7b38acf7b127&units=metric`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);
            f1(data);
        })
        .catch(err => console.error(err))
})
let fourData = {
    country: '.country-4',
    city: '.city-4',
    temp: '.temp-4',
    humidity: '.humidity-4',
    pressure: '.pressure-4',
    date: '.date',
    weather: '.weather-i',
    description: '.weather-4',
}
function input(forecast) {
    document.querySelector('.w-1').value = timeConverter(forecast.one.dt);
    document.querySelector('.w-2').value = timeConverter(forecast.two.dt);
    document.querySelector('.w-3').value = timeConverter(forecast.three.dt);
    document.querySelector('.w-4').value = timeConverter(forecast.four.dt);
}
function f6(forecast) {
    document.querySelector('.w-1').onclick = () => {
        document.querySelector(`${fourData.temp}`).innerHTML = Math.round(forecast.one.main.temp) + '&deg;';
        document.querySelector(`${fourData.humidity}`).textContent = forecast.one.main.humidity + '%';
        document.querySelector(`${fourData.pressure}`).textContent = forecast.one.main.pressure + ' atm';
        document.querySelector(`${fourData.date}`).innerHTML = timeConverter(forecast.one.dt);
        document.querySelector(`${fourData.weather}`).innerHTML = `<img src="https://openweathermap.org/img/wn/${forecast.one.weather[0]['icon']}@2x.png">`;
        document.querySelector(`${fourData.description}`).innerHTML = forecast.one.weather[0]['description'];
    }
}
function f7(forecast) {
    document.querySelector('.w-2').onclick = () => {
        document.querySelector(`${fourData.temp}`).innerHTML = Math.round(forecast.two.main.temp) + '&deg;';
        document.querySelector(`${fourData.humidity}`).textContent = forecast.two.main.humidity + '%';
        document.querySelector(`${fourData.pressure}`).textContent = forecast.two.main.pressure + ' atm';
        document.querySelector(`${fourData.date}`).innerHTML = timeConverter(forecast.two.dt);
        document.querySelector(`${fourData.weather}`).innerHTML = `<img src="https://openweathermap.org/img/wn/${forecast.two.weather[0]['icon']}@2x.png">`;
        document.querySelector(`${fourData.description}`).innerHTML = forecast.two.weather[0]['description'];
    }
}
function f8(forecast) {
    document.querySelector('.w-3').onclick = () => {
        document.querySelector(`${fourData.temp}`).innerHTML = Math.round(forecast.three.main.temp) + '&deg;';
        document.querySelector(`${fourData.humidity}`).textContent = forecast.three.main.humidity + '%';
        document.querySelector(`${fourData.pressure}`).textContent = forecast.three.main.pressure + ' atm';
        document.querySelector(`${fourData.date}`).innerHTML = timeConverter(forecast.three.dt);
        document.querySelector(`${fourData.weather}`).innerHTML = `<img src="https://openweathermap.org/img/wn/${forecast.three.weather[0]['icon']}@2x.png">`;
        document.querySelector(`${fourData.description}`).innerHTML = forecast.three.weather[0]['description'];
    }
}
function f9(forecast) {
    document.querySelector('.w-4').onclick = () => {
        document.querySelector(`${fourData.temp}`).innerHTML = Math.round(forecast.four.main.temp) + '&deg;';
        document.querySelector(`${fourData.humidity}`).textContent = forecast.four.main.humidity + '%';
        document.querySelector(`${fourData.pressure}`).textContent = forecast.four.main.pressure + ' atm';
        document.querySelector(`${fourData.date}`).innerHTML = timeConverter(forecast.four.dt);
        document.querySelector(`${fourData.weather}`).innerHTML = `<img src="https://openweathermap.org/img/wn/${forecast.three.weather[0]['icon']}@2x.png">`;
        document.querySelector(`${fourData.description}`).innerHTML = forecast.four.weather[0]['description'];
    }
}
let id4 = document.getElementById('s1');
id4.addEventListener('change', () => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${id4.value}&appid=3612c8feb0a2a51cb89b7b38acf7b127&units=metric`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            let forecast = {
                one: data.list[9],
                two: data.list[11],
                three: data.list[19],
                four: data.list[27]
            }
            document.querySelector(`${fourData.country}`).innerHTML = data.city.country;
            document.querySelector(`${fourData.city}`).innerHTML = data.city.name;
            document.querySelector(`${fourData.temp}`).innerHTML = Math.round(forecast.one.main.temp) + '&deg;';
            document.querySelector(`${fourData.humidity}`).textContent = forecast.one.main.humidity + '%';
            document.querySelector(`${fourData.pressure}`).textContent = forecast.one.main.pressure + ' atm';
            document.querySelector(`${fourData.date}`).innerHTML = timeConverter(forecast.one.dt);
            document.querySelector(`${fourData.weather}`).innerHTML = `<img src="https://openweathermap.org/img/wn/${forecast.one.weather[0]['icon']}@2x.png">`;
            document.querySelector(`${fourData.description}`).innerHTML = forecast.one.weather[0]['description'];
            console.log(data);
            input(forecast);
            f6(forecast);
            f7(forecast);
            f8(forecast);
            f9(forecast);
        })
        .catch(err => console.error(err))
})