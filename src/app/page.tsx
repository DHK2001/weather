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
import { useStore } from "@/store";
import UnitsButton from "@/components/button-units";
import EmptyMessage from "@/components/no-data-message";

export default function Home() {
  const queryClient = useQueryClient();

  const { units, setUnits, city, setCity, countryCode, setCountryCode } =
    useStore();
  const [showMore, setShowMore] = useState<number | null>(null);

  const { data: forecastData, isLoading } = useQuery({
    queryKey: ["forecastData", city, countryCode, units],
    queryFn: async () => {
      const data = await fetchForecastByCity(city, countryCode, units);
      return groupForecastData(data);
    },
  });

  const buttonC = async () => {
    setUnits("metric");
  };

  const buttonF = async () => {
    setUnits("imperial");
  };

  const handleCityChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const [city, country] = event.target.value.split(", ");
    setCity(city);
    setCountryCode(country);
    await queryClient.invalidateQueries({
      queryKey: ["forecastData", city, country, units],
    });
  };

  React.useEffect(() => {
    queryClient.invalidateQueries({
      queryKey: ["forecastData", city, countryCode, units],
    });
  }, [units, city, countryCode, queryClient]);

  return (
    <>
      <div className="flex items-center justify-center ml-5 mr-5 mt-5">
        <SelectOptions
          items={cities}
          selectedCity={city + ", " + countryCode}
          handleCityChange={handleCityChange}
        />
        <UnitsButton units={units} buttonC={buttonC} buttonF={buttonF} />
      </div>

      {!isLoading ? (
        forecastData && forecastData.length === 0 ? (
          <EmptyMessage message="No items to display" />
        ) : null
      ) : (
        <Loading />
      )}
      <div className="overflow-y-auto max-h-[74vh]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 ml-5 mr-5">
          {forecastData?.map((item, index) => (
            <div key={index}>
              <Card
                item={item}
                cityCountry={city + ", " + countryCode}
                index={index}
                toggleDropdown={() =>
                  setShowMore((prev) => (prev === index ? null : index))
                }
              />
              <AnimatePresence>
                {showMore === index ? <AnimatedCard item={item} /> : null}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
