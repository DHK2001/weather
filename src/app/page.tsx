"use client";
import { fetchForecastByCity } from "@/services/api";
import { cities, groupForecastData } from "@/utils/helpers";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Card from "@/components/card";
import AnimatedCard from "@/components/animated-card";
import Loading from "@/components/loading";
import SelectOptions from "@/components/select-options";
import React from "react";

export default function Home() {
  const queryClient = useQueryClient();

  const [temperature, setTemperature] = useState("metric");
  const [showMore, setShowMore] = useState<number | null>(null);
  const [selectedCity, setSelectedCity] = useState<string>(
    cities[0].name + ", " + cities[0].country
  );

  const { data: forecastData, isLoading } = useQuery({
    queryKey: ["forecastData", selectedCity, temperature],
    queryFn: async () => {
      const [city, country] = selectedCity.split(", ");
      const data = await fetchForecastByCity(city, country, temperature);
      return groupForecastData(data);
    },
  });

  const buttonC = async () => {
    setTemperature("metric");
  };

  const buttonF = async () => {
    setTemperature("imperial");
  };

  const handleCityChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCity(event.target.value);

    const [city, country] = event.target.value.split(", ");
    await queryClient.invalidateQueries({
      queryKey: ["forecastData", city, country, temperature],
    });
  };

  React.useEffect(() => {
    const [city, country] = selectedCity.split(", ");
    queryClient.invalidateQueries({
      queryKey: ["forecastData", city, country, temperature],
    });
  }, [temperature, selectedCity, queryClient]);

  return (
    <>
      <div className="flex-row justify-center text-center m-0 p-0">
        <button className="temperature-button mr-2" onClick={buttonC}>
          <p>°C</p>
        </button>
        <button className="temperature-button ml-2" onClick={buttonF}>
          <p>°F</p>
        </button>
      </div>
      <div className="flex justify-center my-4">
        <SelectOptions
          items={cities}
          selectedCity={selectedCity}
          handleCityChange={handleCityChange}
        />
      </div>

      {!isLoading ? (
        forecastData && forecastData.length === 0 ? (
          <h2 className="text-2xl text-center py-5 text-white">No items to display</h2>
        ) : null
      ) : (
        <Loading />
      )}
      <ul className="flex justify-center px-5 mb-5 max-w-7xl m-auto">
        {forecastData?.map((item, index) => (
          <li key={index} className="w-4/5 px-2">
            <Card
              item={item}
              cityCountry={selectedCity}
              index={index}
              toggleDropdown={() =>
                setShowMore((prev) => (prev === index ? null : index))
              }
            />
            <AnimatePresence>
              {showMore === index ? <AnimatedCard item={item} /> : null}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </>
  );
}
