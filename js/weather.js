const weatherApiKey = "7da563c7a5c646a09d8182324242701";
const weatherApiUrl = `http://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=chennai`;
// console.log("Updated Currentlocation in other file:", window.Currentlocation);

fetch(weatherApiUrl).then((response)=>{
    return response.json()
}).then((result)=>{

    console.log(result.current.temp_c)
    const temperature = document.getElementById('actualTemp')
    const feelstemperature = document.getElementById('feelslike')
    const windSpeed = document.getElementById('wind-speed')
    const location = document.getElementById('location')
    const weatherIcon = document.getElementById('weather_icon')


    temperature.innerHTML = result.current.temp_c+"&deg;"
    feelstemperature.innerHTML ="Feels Like "+result.current.feelslike_c+"&deg;"
    windSpeed.innerHTML = "Wind Speed - "+result.current.wind_mph+" mph"
    location.innerHTML = result.location.name +", "+result.location.region
    weatherIcon.src = result.current.condition.icon

})