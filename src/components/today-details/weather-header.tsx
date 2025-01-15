import { WeatherData } from "@/services/weather-interface";
import { getIconUrl } from "@/utils/helpers";
import Image from "next/image";

interface Props {
  weatherData?: WeatherData;
  getUnitSymbol: () => string;
}

function WeatherHeader({ weatherData, getUnitSymbol }: Props) {
  return (
    <div className="text-center mb-8">
      <h2 className="text-5xl font-bold">{weatherData?.name}</h2>
      <p className="text-2xl mt-2">
        {weatherData?.main.temp}
        {getUnitSymbol()}
      </p>
      <p className="text-lg mt-1">
        Feels like {weatherData?.main.feels_like}
        {getUnitSymbol()}
      </p>
      <Image
        className="inline-block mt-4"
        src={getIconUrl(weatherData?.weather[0].icon ?? "11d")}
        alt="weather"
        width={100}
        height={100}
      />
    </div>
  );
}

export default WeatherHeader;
