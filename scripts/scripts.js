const API_KEY = `1bec62af56c779b905020da12fa7a4a8`;

document.getElementById("btn-search").addEventListener('click', function(){
    // console.log('btn clicked');
    const searchText = document.getElementById('input-field').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res=> res.json())
        .then(data=> showWeather(data))


})

const showWeather = (data) =>{
    console.log(data);
    document.getElementById('city').innerText= data.name;
    document.getElementById('weather').innerText = data.weather[0].main;
    document.getElementById("temperature").innerText = data.main.temp
}