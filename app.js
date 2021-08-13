const locationForm = document.querySelector('.locationForm')
const weatherList = document.querySelector('.weather-list')

const allDetails = async (location) =>{
    const cityDets = await getCity(location)
    const weatherDets = await getWeather(cityDets.Key)
    return{
        cityDets: cityDets,
        weatherDets: weatherDets,
    }
}

const addLocation = (data) =>{
    const temperature = data.weatherDets.Temperature.Metric.Value;
    const location = data.cityDets.EnglishName;
    if(data.weatherDets.IsDayTime){
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
    allDetails(e.target.location.value)
    .then(data => addLocation(data))
    .catch(err => console.log(err))

    locationForm.reset()
})



