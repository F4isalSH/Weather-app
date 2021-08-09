// API key received from accuweather website
const apiKey = 'X6emy93Gz3jfFPnvznjlVzKFcl9KD7hh'


// Function for getting the city key
const getCity = async (city) =>{
    const baseUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query   = `?apikey=${apiKey}&q=${city}`
    const response = await fetch(baseUrl + query);
    const data = await response.json();
    return data[0].Key
}


// Function using the city key to get the weather
const getWeather = async (locationKey) =>{
    const baseurl = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`
    const response = await fetch(baseurl);
    const data = await response.json();
    return data[0];
}

