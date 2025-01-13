"use client";
import { fetchWeatherByCity } from "@/services/api";
import { cities, groupWeatherData } from "@/utils/helpers";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Card from "@/components/card";
import AnimatedCard from "@/components/AnimatedCard";
import Loading from "@/components/Loading";
import SelectOptions from "@/components/SelectOptions";

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
        <SelectOptions items={cities} selectedCity={selectedCity} handleCityChange={handleCityChange}/>
      </div>

      {!isLoading ? (
        weatherData && weatherData.length === 0 ? (
          <h2 className="text-2xl text-center py-5">No items to display</h2>
        ) : null
      ) : (
        <Loading />
      )}
      <ul className="flex justify-center px-5 mb-5 max-w-7xl m-auto">
        {weatherData?.map((item, index) => (
          <li key={index} className="w-4/5 px-2">
            <Card item={item} index={index} toggleDropdown={() => setShowMore((prev) => (prev === index ? null : index))} />
            <AnimatePresence>
              {showMore === index ? (
                <AnimatedCard item={item}/>
              ) : null}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </>
  );
}
