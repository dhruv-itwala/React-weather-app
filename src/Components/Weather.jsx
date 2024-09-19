import style from "./Weather.module.css";
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import humidity_icon from "../assets/humidity.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";
import { useEffect, useRef, useState } from "react";

const Weather = () => {
  const inputRef = useRef();

  const [weatherData, setWeatherData] = useState(false);

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };
  const search = async (city) => {
    if (city === "") {
      alert("Enter City Name");
      return;
    }

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      console.log(data);
      const icon = allIcons[data.weather[0].icon] || clear_icon;
      setWeatherData({
        humidity: data.main.humidity,
        windspeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      setWeatherData(false);
      alert(
        "Error ! Weather data cannot be fetch right now , please try later"
      );
      return;
    }
  };

  useEffect(() => {
    search("Vadodara");
  }, []);

  return (
    <div className={style.weather}>
      <div className={style.searchBar}>
        <input ref={inputRef} type="text" placeholder="Search" />
        <img src={search_icon} onClick={() => search(inputRef.current.value)} />
      </div>

      {weatherData ? (
        <>
          <img src={weatherData.icon} className={style.weatherIcon} />
          <p className={style.temperature}>{weatherData.temperature} &deg; C</p>
          <p className={style.location}>{weatherData.location}</p>
          <div className={style.weatherData}>
            <div className={style.col}>
              <img src={humidity_icon} />
              <div>
                <p>{weatherData.humidity}%</p>
                <span>Humidity</span>
              </div>
            </div>

            <div className={style.col}>
              <img src={wind_icon} />
              <div>
                <p>{weatherData.windspeed}Km/h</p>
                <span>Windspeed</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Weather;
