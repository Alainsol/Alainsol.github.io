

/// b62f04b1ceca4f5ec863d97451c67d75

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Bangkok&units=metric&appid=8ce342ec0bef6453a2de8960f69f0afa';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    document.getElementById('temperature').innerHTML = jsObject.main.temp;
    document.getElementById('current-condition').innerHTML = jsObject.weather[0].description;
    document.getElementById('humidity').innerHTML = jsObject.main.humidity;

  });

const forecastApiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=13.746062235824148&lon=100.56406502312987&exclude=hourly&units=metric&appid=8ce342ec0bef6453a2de8960f69f0afa';


fetch(forecastApiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    var date1 = new Date(jsObject.daily[1].dt * 1000);
    var date2 = new Date(jsObject.daily[2].dt * 1000);
    var date3 = new Date(jsObject.daily[3].dt * 1000);

    var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

    document.getElementById('date-1').innerHTML = days[date1.getDay()] + ' ' + date1.getDate();
    document.getElementById('date-2').innerHTML = days[date2.getDay()] + ' ' + date2.getDate();
    document.getElementById('date-3').innerHTML = days[date3.getDay()] + ' ' + date3.getDate();

    document.getElementById('temp-1').innerHTML = jsObject.daily[1].temp.day;
    document.getElementById('temp-2').innerHTML = jsObject.daily[2].temp.day;
    document.getElementById('temp-3').innerHTML = jsObject.daily[3].temp.day;

  });
