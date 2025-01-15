"use client";

import GoBackButton from "@/components/go-back-buttons";
import Loading from "@/components/loading";
import { fetchWeatherByCity } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import EmptyMessage from "@/components/no-data-message";
import { useStore } from "@/store";
import WeatherGrid from "@/components/today-details/weather-details-grid";
import WeatherHeader from "@/components/today-details/weather-header";

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
  };

  return (
    <>
      <GoBackButton text="Go Back" />
      {!isLoading ? (
        weatherData === null ? (
          <EmptyMessage message="No items to display" />
        ) : (
          <div className="p-6 mt-5 text-white overflow-y-auto max-h-[75vh]">
            <WeatherHeader
              weatherData={weatherData}
              getUnitSymbol={getUnitSymbol}
            />
            <WeatherGrid
              weatherData={weatherData}
              getUnitSymbol={() => getUnitSymbol()}
            />
          </div>
        )
      ) : (
        <Loading />
      )}
    </>
  );
};

export default page;
