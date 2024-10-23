document.getElementById('getWeather').addEventListener('click', () => {
    const cityName = 'Kyoto'; // Назва міста
    const apiKey = 'da1e59f9467e3d98d82c597732e69398'; // Вставте свій API ключ тут
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Мережевий запит не вдався');
            }
            return response.json();
        })
        .then(data => {
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;
            const weatherDescription = data.weather[0].description; // Опис погоди

            const weatherInfo = `
                <h2>Погода в ${data.name}</h2>
                <p>Температура: ${temperature.toFixed(2)} °C</p>
                <p>Вологість: ${humidity}%</p>
                <p>Швидкість вітру: ${windSpeed} м/с</p>
                <p>Опис погоди: ${weatherDescription}</p>
            `;

            document.getElementById('weatherData').innerHTML = weatherInfo;
        })
        .catch(error => {
            document.getElementById('weatherData').innerHTML = `<p>Помилка: ${error.message}</p>`;
        });
});
