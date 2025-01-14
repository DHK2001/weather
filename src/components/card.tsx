import { Weather } from "@/services/weather-interfaces";
import { getDate, getIcons } from "@/utils/helpers";
import Image from "next/image";

interface Props {
  item: Weather;
  index: number;
  toggleDropdown?: (index: number) => void;
}

function Card({ item, index, toggleDropdown }: Props) {
  return (
    <div className="card-weather">
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

      {toggleDropdown && (
        <button
          key={index}
          onClick={() => toggleDropdown(index)}
          className="show-more-button"
        >
          Show More
        </button>
      )}
    </div>
  );
}

export default Card;
