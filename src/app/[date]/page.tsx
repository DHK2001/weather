"use client";

import CardWeather from "@/components/card-weather";
import GoBackButton from "@/components/go-back-buttons";
import Loading from "@/components/loading";
import { fetchWeatherByCity } from "@/services/api";
import {
  localStorageGetCity,
  localStorageGetCountryCode,
} from "@/utils/local-storage-helpers";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Image from "next/image";
import { getIconUrl } from "@/utils/helpers";
import EmptyMessage from "@/components/no-data-message";
import { useStore } from "@/store";

const page = () => {
  const { units, city, countryCode } = useStore();
  const { data: weatherData, isLoading } = useQuery({
    queryKey: ["weatherData"],
    queryFn: async () => {
      const data = await fetchWeatherByCity(city, countryCode, units);
      return data;
    },
  });

  const getUnitSymbol = () => {
    if (units === "metric") {
      return "°C";
    } else if (units === "imperial") {
      return "°F";
    } else {
      return "K";
    }
  }

  return (
    <>
      <GoBackButton text="Go Back" />
      {!isLoading ? (
        weatherData === null ? (
          <EmptyMessage message="No items to display" />
        ) : (
          <div className="p-6 text-white min-h-screen">
            <div className="text-center mb-8">
              <h1 className="text-5xl font-bold">{weatherData?.name}</h1>
              <p className="text-2xl mt-2">
                {weatherData?.main.temp.toFixed(1)}{getUnitSymbol()}
              </p>
              <p className="text-lg mt-1">
                Feels like {weatherData?.main.feels_like.toFixed(1)}{getUnitSymbol()}
              </p>
              <Image
                className="inline-block mt-4"
                src={getIconUrl(weatherData?.weather[0].icon ?? "11d")}
                alt="weather"
                width={100}
                height={100}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CardWeather>
                <h2 className="text-xl font-semibold mb-2">Temperature</h2>
                <p>Min: {weatherData?.main.temp_min}{getUnitSymbol()}</p>
                <p>Max: {weatherData?.main.temp_max}{getUnitSymbol()}</p>
                <p>Pressure: {weatherData?.main.pressure} hPa</p>
                <p>Humidity: {weatherData?.main.humidity}%</p>
              </CardWeather>

              <CardWeather>
                <h2 className="text-xl font-semibold mb-2">Visibility</h2>
                <p>{(weatherData?.visibility ?? 0 / 1000).toFixed(1)} km</p>
              </CardWeather>

              <CardWeather>
                <h2 className="text-xl font-semibold mb-2">Wind</h2>
                <p>Speed: {weatherData?.wind.speed} m/s</p>
                <p>Direction: {weatherData?.wind.deg}°</p>
                {weatherData?.wind.gust && (
                  <p>Gust: {weatherData?.wind.gust} m/s</p>
                )}
              </CardWeather>

              <CardWeather>
                <h2 className="text-xl font-semibold mb-2">Cloudiness</h2>
                <p>{weatherData?.clouds.all}%</p>
              </CardWeather>

              <CardWeather>
                <h2 className="text-xl font-semibold mb-2">Sun</h2>
                <p>
                  Sunrise:{" "}
                  {new Date(
                    weatherData?.sys.sunrise ?? 0 * 1000
                  ).toLocaleTimeString()}
                </p>
                <p>
                  Sunset:{" "}
                  {new Date(
                    weatherData?.sys.sunset ?? 0 * 1000
                  ).toLocaleTimeString()}
                </p>
              </CardWeather>
            </div>
          </div>
        )
      ) : (
        <Loading />
      )}
    </>
  );
};

export default page;
