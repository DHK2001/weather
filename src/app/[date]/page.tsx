"use client";

import GoBackButton from "@/components/go-back-buttons";
import { fetchWeatherByCity } from "@/services/api";
import {
  localStorageGetCity,
  localStorageGetCountryCode,
} from "@/utils/local-storage-helpers";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  var city = localStorageGetCity() ?? "London";
  var country = localStorageGetCountryCode() ?? "GB";

  const { data: forecastData, isLoading } = useQuery({
    queryKey: ["weatherData"],
    queryFn: async () => {
      const data = await fetchWeatherByCity(city, country);

      console.log(data);
      return data;
    },
  });

  const { date } = useParams();
  return <>
    <GoBackButton text="Go Back" />
  </>;
};

export default page;
