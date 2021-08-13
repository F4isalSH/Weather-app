const locationForm = document.querySelector('.locationForm')
const weatherList = document.querySelector('.weather-list')
const addLocation = (location , data) =>{
    const temperature = data.Temperature.Metric.Value;
    if(data.IsDayTime){
        let html =
        `<li class="m-2 weather-item">
        <div class="weather-header display-5 bg-light text-center "><span>${location}</span></div>
        <img src="../../img/day.svg" alt="">
        <div class="temperature display-3"><span>${temperature}°C</span></div>
        </li>`
        weatherList.innerHTML += html;
    }else{

        let html = `<li class="m-2 weather-item">
        <div class="weather-header display-5 text-center text-light"><span>${location}</span></div>
        <img src="../../img/night.svg" alt="">
        <div class="temperature display-3 text-light"><span>${temperature}°C</span></div>
    </li>`  
        weatherList.innerHTML += html;
    }
}


locationForm.addEventListener(('submit'), e =>{
    e.preventDefault()
    const location = e.target.location.value;
    getCity(e.target.location.value)
    .then(data => getWeather(data.Key))
    .then(data => addLocation(location, data))
    .catch(error => console.log(error))
    locationForm.reset()
})



