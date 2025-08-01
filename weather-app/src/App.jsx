import { useState } from 'react';
import './App.css';

const API_KEY = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    if (!city) return;
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      if (data.cod === 200) {
        setWeather(data);
      } else {
        setWeather(null);
        alert('City not found!');
      }
    } catch (error) {
      alert('Error fetching data.');
    }
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = () => {
    return new Date().toLocaleDateString(undefined, {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="app">
      <h1 className="title">🌤 Weather Insight</h1>

      <div className="search-box glass">
        <input
          type="text"
          placeholder="Search City..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>Search</button>
      </div>

      {weather && (
        <div className="weather-box glass">
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p className="date">{formatDate()}</p>

          <img
            className="weather-icon"
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
            alt="weather"
          />

          <h1>{Math.round(weather.main.temp)}°C</h1>
          <p className="description">{weather.weather[0].description}</p>

          <div className="details">
            <div><strong>Feels Like:</strong> {Math.round(weather.main.feels_like)}°C</div>
            <div><strong>Humidity:</strong> {weather.main.humidity}%</div>
            <div><strong>Wind:</strong> {weather.wind.speed} m/s</div>
            <div><strong>Pressure:</strong> {weather.main.pressure} hPa</div>
            <div><strong>Sunrise:</strong> {formatTime(weather.sys.sunrise)}</div>
            <div><strong>Sunset:</strong> {formatTime(weather.sys.sunset)}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
