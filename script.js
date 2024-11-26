const getWeatherBtn = document.getElementById('get-weather-btn');
const cityInput = document.getElementById('city-input');
const cityName = document.getElementById('city-name');
const weatherDescription = document.getElementById('weather-description');
const temperature = document.getElementById('temperature');

// Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
const apiKey = 'YOUR_API_KEY';

getWeatherBtn.addEventListener('click', async () => {
  const city = cityInput.value;

  if (city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === 200) {
        // Display weather data
        cityName.innerHTML = `Weather in ${data.name}`;
        weatherDescription.innerHTML = `${data.weather[0].description}`;
        temperature.innerHTML = `${data.main.temp}°C`;
      } else {
        alert('City not found');
      }
    } catch (error) {
      alert('Error fetching data. Please try again later.');
    }
  } else {
    alert('Please enter a city');
  }
});
