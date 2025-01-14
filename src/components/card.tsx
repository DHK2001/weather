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

      {toggleDropdown && (
        <button
          key={index}
          onClick={() => toggleDropdown(index)}
          className="bg-blue-400 text-white px-4 py-2 rounded-lg mt-4"
        >
          Show More
        </button>
      )}
    </div>
  );
}

export default Card;
