// API key received from accuweather website
const apiKey = 'X6emy93Gz3jfFPnvznjlVzKFcl9KD7hh'


// Function for getting the city key
const getCity = async (city) =>{
    let baseUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    let query   = `?apikey=${apiKey}&q=${city}`
    let response = await fetch(baseUrl + query);
    let data = await response.json();
    return data[0].Key
}


// Function using the city key to get the weather
const getWeather = async (locationKey) =>{
    let baseurl = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`
    let response = await fetch(baseurl);
    let data = await response.json();
    return data[0];
}

