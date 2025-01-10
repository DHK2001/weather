"use client";
import { fetchWeatherByCity } from "@/services/api";
import { Weather, WeatherData } from "@/services/weather-interfaces";
import { cities, getDate, getIcons, groupWeatherData } from "@/utils/helpers";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [showMore, setShowMore] = useState<number | null>(null);
  const [selectedCity, setSelectedCity] = useState<string>(
    cities[0].name + ", " + cities[0].country
  );
  const [weatherData, setWeatherData] = useState<Weather[]>([]);

  useEffect(() => {
    const loadWeather = async () => {
      try {
        const data = await getDataWeather();
        setWeatherData(groupWeatherData(data));
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
      }
    };
    loadWeather();
  }, []);

  const toggleDropdown = (index: number) => {
    setShowMore((prev) => (prev === index ? null : index));
  };

  const getDataWeather = async () => {
    var city = selectedCity.split(",")[0];
    var countrySpace = selectedCity.split(",")[1];
    var country = countrySpace.trim();
    return await fetchWeatherByCity(city, country);
  };

  const updateDataWeather = async (city: string, country: string) => {
    const data = await fetchWeatherByCity(city, country);
    setWeatherData(groupWeatherData(data));
  };

  const handleCityChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCity(event.target.value);

    var city = event.target.value.split(",")[0];
    var countrySpace = event.target.value.split(",")[1];
    var country = countrySpace.trim();

    await updateDataWeather(city, country);
  };

  return (
    <>
      <div className="flex justify-center my-4">
        <select
          value={selectedCity}
          onChange={handleCityChange}
          className="border-2 border-gray-300 rounded-lg p-2 bg-transparent"
        >
          {cities.map((city, index) => (
            <option key={index} value={city.name + ", " + city.country}>
              {city.name}, {city.country}
            </option>
          ))}
        </select>
      </div>

      {weatherData.length === 0 && (
        <h2 className="text-2xl text-center py-5">No items to display</h2>
      )}
      <ul className="flex justify-center px-5 mb-5 max-w-7xl m-auto">
        {weatherData.map((item, index) => (
          <li key={index} className="w-4/5 px-2">
            <div className="border-2 border-gray-300 rounded-lg p-5 flex flex-col items-center text-center my-5">
              <p className="font-bold">{getDate(item.date).day}</p>
              <img
                className="max-w-60"
                src={getIcons(item.weatherId, item.date)}
                alt="weather"
              />
              <p>
                {getDate(item.date).time +
                  " °" +
                  item.temp_min +
                  " °" +
                  item.temp_max}
              </p>

              <button
                key={index}
                onClick={() => toggleDropdown(index)}
                className="bg-blue-400 text-white px-4 py-2 rounded-lg mt-4"
              >
                Show More
              </button>
            </div>
            <AnimatePresence>
              {showMore === index ? (
                item.weatherHours.length > 0 ? (
                  <motion.ul
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="weatherHour"
                  >
                    {item.weatherHours.map((item2, index) => (
                      <li
                        key={index}
                        className={
                          item.weatherHours.length - 1 === index
                            ? "temperatureRowEnd"
                            : "temperatureRow"
                        }
                      >
                        <div className="flex flex-row text-center items-center justify-start w-4/5">
                          <img
                            src={getIcons(item2.weather, item2.date)}
                            className="w-16"
                          />
                          <p>{getDate(item2.date).time}</p>
                        </div>
                        <p>{"°" + item2.temp_min + " °" + item2.temp_max}</p>
                      </li>
                    ))}
                  </motion.ul>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="weatherHour"
                  >
                    <h3 className="text-center py-5">No items to display</h3>
                  </motion.div>
                )
              ) : null}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </>
  );
}
