"use client";

import { Weather } from "@/services/forecast-interfaces";
import { getDate, getIconUrl } from "@/utils/helpers";
import {
  localStorageSetCity,
  localStorageSetCountryCode,
} from "@/utils/local-storage-helpers";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  item: Weather;
  cityCountry: string;
  index: number;
  toggleDropdown?: (index: number) => void;
}

function Card({ item, cityCountry, index, toggleDropdown }: Props) {
  const router = useRouter();

  const handleCardClick = () => {
    if (!validateDate()) {
      return;
    }
    const [city, country] = cityCountry.split(", ");
    localStorageSetCity(city);
    localStorageSetCountryCode(country);
    router.push(`/today`);
  };

  const validateDate = () => {
    return index === 0;
  };

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    if (toggleDropdown) {
      toggleDropdown(index);
    }
  };

  return (
    <div
      className={validateDate() ? "card-weather-actual" : "card-weather"}
      onClick={handleCardClick}
    >
      <p className="font-bold">{getDate(item.date).day}</p>
      <Image
        className="max-w-60"
        src={getIconUrl(item.weatherIcon)}
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

      {toggleDropdown && (
        <button
          key={index}
          onClick={handleButtonClick}
          className="show-more-button"
        >
          Show More
        </button>
      )}
    </div>
  );
}

export default Card;
