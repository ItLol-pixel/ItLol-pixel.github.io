fetch('http://api.openweathermap.org/data/2.5/weather?id=709930&appid=ecb0e6181686baa96649c5d3676d8d28')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.city-name').textContent = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.clouds').textContent = data.weather[0]['description'];
        //используем иконку с сайта openweather https://openweather.org/img/wn/02d@2x.png
        document.querySelector('.features').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;

    })
    .catch(function () {
    });