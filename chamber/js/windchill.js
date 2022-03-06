

/// b62f04b1ceca4f5ec863d97451c67d75

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Bangkok&units=metric&appid=8ce342ec0bef6453a2de8960f69f0afa'

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const wind = jsObject.wind.speed; //document.querySelector('#windspeed').innerHTML;
    const currenttemp = jsObject.main.temp; //document.querySelector('#currenttemp').innerHTML;
    document.querySelector('#windspeed').innerHTML = wind;

    if(wind >3 && currenttemp <= 50) {
        const chill = ((35.74 + (0.6215 * currenttemp)) - (35.75 * (Math.pow(wind,0.16))) + (0.4275 * currenttemp * (Math.pow(wind, 0.16)))).toFixed(0);
    
        document.querySelector('#windchill').innerHTML = chill;
    }
    else{
        document.querySelector('#windchill').innerHTML = "N/A";
    }
  });

