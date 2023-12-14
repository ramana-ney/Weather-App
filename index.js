async function getWeather() {
    const apiKey = 'b9346a93c73d311eacca9560b213b22b';
    const cityElement = document.getElementById('city');
    const temperatureElement = document.getElementById('temperature');
    const conditionElement = document.getElementById('condition');

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityElement.value}&appid=b9346a93c73d311eacca9560b213b22b`);
        const data = await response.json();
        console.log(data);

 
        const city = data.name;
        const temperature = `${Math.round(data.main.temp - 273.15)}°C`; // Convert Kelvin to Celsius
        const condition = data.weather[0].description;

         
        cityElement.textContent = city;
        temperatureElement.textContent = temperature;
        conditionElement.textContent = condition;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}