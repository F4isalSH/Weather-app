class Forecast{

    constructor(){
        this.apiKey = API_KEY
        this.cityUrl = 'https://dataservice.accuweather.com/locations/v1/cities/search'
        this.weatherUrl = 'https://dataservice.accuweather.com/currentconditions/v1/'
    }

    async getCity (city){
        const query   = `?apikey=${this.apiKey}&q=${city}`
        const response = await fetch(this.cityUrl + query);
        const data = await response.json();
     return data[0]
    }

    async getWeather(key){
        const query = `${key}?apikey=${this.apiKey}`
        const response = await fetch(this.weatherUrl + query)
        const data = await response.json()
    return data[0]
    }

    async allDetails (data) {
        const cityDets = await this.getCity(data)
        const weatherDets = await this.getWeather(cityDets.Key)
    return{cityDets, weatherDets}
    }

    
}
