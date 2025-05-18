
(function() {
  const content = document.getElementById('content');
  if (!content) return;
  
  const weatherSection = document.createElement('section');
  weatherSection.innerHTML = `
    <h2>Погода в реальном времени</h2>
    <label for="cityInput">Введите город:</label>
    <input id="cityInput" type="text" placeholder="Например, Берлин" style="margin: 0 10px; padding: 5px;">
    <button id="getWeatherBtn" style="padding: 5px 10px;">Получить погоду</button>
    <p id="weatherOutput" style="margin-top: 15px; font-weight: bold;"></p>
  `;
  
  content.appendChild(weatherSection);
  
  document.getElementById('getWeatherBtn')?.addEventListener('click', () => {
    const city = document.getElementById('cityInput').value.trim();
    if (!city) {
      document.getElementById('weatherOutput').textContent = 'Пожалуйста, введите название города.';
      return;
    }

    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`)
      .then(response => response.json())
      .then(data => {
        if (!data.results || data.results.length === 0) {
          document.getElementById('weatherOutput').textContent = 'Город не найден.';
          return;
        }

        const { latitude, longitude, name, country } = data.results[0];

        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
          .then(response => response.json())
          .then(weatherData => {
            const weather = weatherData.current_weather;
            document.getElementById('weatherOutput').textContent =
              `Погода в ${name}, ${country}: ${weather.temperature}°C, ветер ${weather.windspeed} км/ч.`;
          })
          .catch(() => {
            document.getElementById('weatherOutput').textContent = 'Ошибка при получении данных о погоде.';
          });
      })
      .catch(() => {
        document.getElementById('weatherOutput').textContent = 'Ошибка при получении координат города.';
      });
  });
   document.getElementById('content').appendChild(section);
})();