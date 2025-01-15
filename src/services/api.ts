const forecastUrl = "/openweathermap-forecast";
const weathertUrl = "/openweathermap-weather";

import { ForecastData } from "./forecast-interfaces";
import { WeatherData } from "./weather-interface";

export const fetchForecastByCity = async (city: string, country: string, units:string): Promise<ForecastData>  => { 
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    if (!apiKey) {
      throw new Error('API key not found');
    }
    const url = `${forecastUrl}?q=${city},${country}&appid=${apiKey}&units=${units}`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': apiKey,
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      return response.json();
    } catch (error) {
      console.error('Error fetching weather by city:', error);
    }
    return { list: [] };
};
  
export const fetchWeatherByCity = async (city: string, country: string, units:string): Promise<WeatherData | null>  => { 
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  if (!apiKey) {
    throw new Error('API key not found');
  }
  const url = `${weathertUrl}?q=${city},${country}&appid=${apiKey}&units=${units}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': apiKey,
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather by city:', error);
    return null;
  }
};
