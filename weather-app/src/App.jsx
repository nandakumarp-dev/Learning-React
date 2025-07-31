import { useState } from 'react';
import './App.css';

const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your key

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    if (!city) return;
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await res.json();
    if (data.cod === 200) {
      setWeather(data);
    } else {
      alert('City not found!');
      setWeather(null);
    }
  };

  return (
    <div className="app">
      <h1 className="title">🌈 Weatherly</h1>

      <div className="search-box glass">
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>🔍</button>
      </div>

      {weather && (
        <div className="weather-box glass">
          <h2>{weather.name}, {weather.sys.country}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
            alt="icon"
          />
          <h1>{Math.round(weather.main.temp)}°C</h1>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
