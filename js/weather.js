
//ключ
let apiKey = "131aaec3ea306573195e36e16a1d73e4";
//Город
let city = "Kamennomostskiy";
//url для запроса
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`;

var imgArray = ['0', 'url(./images/weatherImg/clearSky.webp)', 'url(./images/weatherImg/fewClouds.jpg)', 'url(./images/weatherImg/scateredClouds.jpg)', 
'url(./images/weatherImg/clouds.jpg)', '5', '6', '7', '8', 'url(./images/weatherImg/showeredRain.jpg)', 'url(./images/weatherImg/rain.jpg)', 'url(./images/weatherImg/molnii.jpg)',
'12', 'url(./images/weatherImg/snow.jpg)'];
imgArray[50] = 'url(./images/weatherImg/mist.jpg)';


fetch(url).then(function (resp) {return resp.json() }).then(function (data) {
    console.log(data);
    //добавляем название города
    document.querySelector('.weather__city').textContent = data.name;
    
    document.querySelector('.weather__forecast').innerHTML = 't: ' + data.main.temp + '&deg;';
    //Добавляем описание погоды
    document.querySelector('.weather__desc').textContent = data.weather[0]['description'];
    //Добавляем влажность
    document.querySelector('.weather__hum').innerHTML = 'влажность: ' + data.main.humidity + '%';
    //получим номер иконки погоды
    let imgNum = data.weather[0]['icon'].slice(0, -1);
    console.log(imgNum);
    
    var block = document.getElementById('weather');
    block.style.backgroundImage = imgArray[parseInt(imgNum, 10)];
    
    })
    .catch(function () {
        //Обрабатываем ошибки
    });