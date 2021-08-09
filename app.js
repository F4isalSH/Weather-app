const search = document.querySelector('.search');



search.addEventListener('submit', e=>{
    e.preventDefault();
    const location = e.target.input.value;
    getCity(location)
    .then(data => getWeather(data))
    .then(data => console.log(data))
    .catch(err => console.log(err))
    search.reset()
})


