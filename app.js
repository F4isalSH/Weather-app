const locationForm = document.querySelector('.locationForm')
const weatherCard = document.querySelector('.container')
const forecast = new Forecast()


const clear  = (message) =>{
    console.log(message)
    localStorage.clear()
}

const updateCard = (location) =>{
        localStorage.setItem('location', location)
         forecast.allDetails(location)
        .then(data => addLocation(data))
        .catch(err => clear(err))
}



const addLocation = (data) =>{
    const temperature = data.weatherDets.Temperature.Metric.Value;
    const location = data.cityDets.EnglishName;
    if(data.weatherDets.IsDayTime){
        let html =
        `
        <div class = "weather-card">
        <div class="weather-header display-5 bg-light text-center"><span>${location}</span></div>
        <img src="img/day.svg" alt="">
        <div class="temperature display-3"><span>${temperature}°C</span></div>
        </div>
        `
        weatherCard.innerHTML += html;
    }else{

        let html = `
        <div class = "weather-card">
        <div class="weather-header display-5 text-center text-light"><span>${location}</span></div>
        <img src="img/night.svg" alt="">
        <div class="temperature display-3 text-light"><span>${temperature}°C</span></div>>
        </div>`  
        weatherCard.innerHTML += html;
    }
}


locationForm.addEventListener(('submit'), e =>{
    e.preventDefault()
    if(localStorage.getItem('location')){
        let card = document.querySelector('.weather-card')
        card.parentNode.removeChild(card)
        updateCard(e.target.location.value)
    }else{
        updateCard(e.target.location.value)
    }

    locationForm.reset()
})

if(localStorage.getItem('location')){
    updateCard(localStorage.getItem('location'))
}


