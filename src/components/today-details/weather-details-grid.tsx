import CardWeather from "@/components/today-details/card-weather";
import { WeatherData } from "@/services/weather-interface";

interface Props {
  weatherData?: WeatherData;
  getUnitSymbol: () => string;
}

function WeatherGrid({ weatherData, getUnitSymbol }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <CardWeather>
        <h2 className="text-xl font-semibold mb-2">Temperature</h2>
        <p>
          Min: {weatherData?.main.temp_min}
          {getUnitSymbol()}
        </p>
        <p>
          Max: {weatherData?.main.temp_max}
          {getUnitSymbol()}
        </p>
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
        {weatherData?.wind.gust && <p>Gust: {weatherData?.wind.gust} m/s</p>}
      </CardWeather>

      <CardWeather>
        <h2 className="text-xl font-semibold mb-2">Cloudiness</h2>
        <p>{weatherData?.clouds.all}%</p>
      </CardWeather>

      <CardWeather>
        <h2 className="text-xl font-semibold mb-2">Sun</h2>
        <p>
          Sunrise:{" "}
          {new Date(weatherData?.sys.sunrise ?? 0 * 1000).toLocaleTimeString()}
        </p>
        <p>
          Sunset:{" "}
          {new Date(weatherData?.sys.sunset ?? 0 * 1000).toLocaleTimeString()}
        </p>
      </CardWeather>
    </div>
  );
}

export default WeatherGrid;
