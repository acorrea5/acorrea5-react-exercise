import { useState, useEffect } from "react";

function WeatherApp() {
  const [city, setCity] = useState("San Francisco");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (city) {
      fetchWeather(city);
    }
  }, [city]);

  const fetchWeather = async (cityName) => {
    try {
      // Search for city location ID
      const locationResponse = await fetch(
          `https://www.metaweather.com/api/location/search/?query=${cityName}`
      );
      const locationData = await locationResponse.json();

      if (locationData.length === 0) {
        alert("City not found!");
        setWeather(null);
        return;
      }

      const woeid = locationData[0].woeid;

      // Fetch weather using the location ID
      const weatherResponse = await fetch(
          `https://www.metaweather.com/api/location/${woeid}/`
      );
      const weatherData = await weatherResponse.json();

      setWeather(weatherData.consolidated_weather[0]);
    } catch (error) {
      alert("Error fetching weather data.");
    }
  };

  return (
      <div>
        <h1>Weather App</h1>
        <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city"
        />
        {weather ? (
            <div>
              <h2>{city}</h2>
              <p>{weather.weather_state_name}</p>
              <p>Temperature: {Math.round(weather.the_temp)}°C</p>
            </div>
        ) : (
            <p>No weather data available.</p>
        )}
      </div>
  );
}

export default WeatherApp;
