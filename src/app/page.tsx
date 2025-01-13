"use client";
import { fetchWeatherByCity } from "@/services/api";
import { Weather } from "@/services/weather-interfaces";
import { cities, getDate, getIcons, groupWeatherData } from "@/utils/helpers";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function Home() {
  const queryClient = useQueryClient();

  const [showMore, setShowMore] = useState<number | null>(null);
  const [selectedCity, setSelectedCity] = useState<string>(
    cities[0].name + ", " + cities[0].country
  );

  const { data: weatherData, isLoading } = useQuery({
    queryKey: ["weatherData", selectedCity],
    queryFn: async () => {
      const [city, country] = selectedCity.split(", ");
      const data = await fetchWeatherByCity(city, country);
      return groupWeatherData(data);
    },
  });

  const toggleDropdown = (index: number) => {
    setShowMore((prev) => (prev === index ? null : index));
  };

  const handleCityChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCity(event.target.value);

    const [city, country] = event.target.value.split(", ");
    await queryClient.invalidateQueries({ queryKey: ["weatherData", city, country] });
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

      {!isLoading ? (
        weatherData && weatherData.length === 0 ? (
          <h2 className="text-2xl text-center py-5">No items to display</h2>
        ) : null
      ) : (
        <Image
          className="m-auto"
          src="/loading.svg"
          alt="loading"
          width={500}
          height={500}
        />
      )}
      <ul className="flex justify-center px-5 mb-5 max-w-7xl m-auto">
        {weatherData?.map((item, index) => (
          <li key={index} className="w-4/5 px-2">
            <div className="border-2 border-gray-300 rounded-lg p-5 flex flex-col items-center text-center my-5">
              <p className="font-bold">{getDate(item.date).day}</p>
              <Image
                className="max-w-60"
                src={getIcons(item.weatherId, item.date)}
                alt="weather"
                width={100}
                height={100}
              />
              <p>
                {getDate(item.date).time +
                  " " +
                  item.temp_min +
                  "°" +
                  " " +
                  item.temp_max +
                  "°"}
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
                        <div className="flex flex-row text-center items-center justify-center p-0 mt-2">
                          <Image
                            className="w-10 m-0 p-0"
                            src={getIcons(item2.weather, item2.date)}
                            alt="weather"
                            width={100}
                            height={100}
                          />
                          <p>{getDate(item2.date).time}</p>
                        </div>
                        <p>{item2.temp_min + "° " + item2.temp_max + "°"}</p>
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
