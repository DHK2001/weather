const baseUrl = "/api-weather";

import { WeatherData } from "./weather-interfaces";

export const fetchWeatherByCity = async (city: string, country: string): Promise<WeatherData>  => { 
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    if (!apiKey) {
      throw new Error('API key not found');
    }
    const url = `${baseUrl}?q=${city},${country}&appid=${apiKey}&units=imperial`;
    console.log(url);
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
      const data: WeatherData = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching weather by city:', error);
    }
    return { list: [] };
};
  