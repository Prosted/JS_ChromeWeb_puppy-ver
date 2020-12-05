const API_KEY="9151f92f2e31c2d2d4455980304fa2c4";
const COORDS="coords"
const weather=document.querySelector(".js-weather");

function getWeather(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const temp=json.main.temp;
        const city=json.name;
        const humi=json.main.humidity;
        weather.innerHTML=`${city} ${temp} ${humi}`;
    });
}


function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleSuccessCallBack(position){
    const latitude=position.coords.latitude;
    const longitude=position.coords.longitude;
    const coordsObj={
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleErrrorCallBack(){
    console.log("We can't read your location");
}

function askCoords(){
    navigator.geolocation.getCurrentPosition(handleSuccessCallBack,handleErrrorCallBack )
}

function init(){
    const loadedCoords=localStorage.getItem(COORDS);
    if(loadedCoords===null){
        askCoords();
    }else{
       const parsedCoords=JSON.parse(loadedCoords);
       getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

init();