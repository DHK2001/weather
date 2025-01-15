import { ForecastData, WeatherHours } from "@/services/forecast-interfaces";
import { Weather } from "@/services/forecast-interfaces";

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const cities = [
    { name: "New York", country: "US" },
    { name: "London", country: "GB" },
    { name: "Tokyo", country: "JP" },
    { name: "Paris", country: "FR" },
    { name: "Berlin", country: "DE" },
    { name: "Sydney", country: "AU" },
    { name: "Toronto", country: "CA" },
    { name: "Moscow", country: "RU" },
    { name: "Beijing", country: "CN" },
    { name: "Mumbai", country: "IN" }
];

export function getDate(dateString: string)
{
    const date = new Date(dateString);
    var day = days[date.getDay()] + ' - ' + date.getDate() + 'th';
    var ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    var minutes = date.getMinutes() <= 9 ? '0'+date.getMinutes() : date.getMinutes();
    var time = date.getHours() + ':' + minutes + " " + ampm;
    return {day, time};     
}

export function groupForecastData(data: ForecastData)
{
    var currentDate = -1;
    var weatherHours: WeatherHours[] = [];    
    var forecastData: Weather[] = [];
    var currentWeather = -1;
    
    for (var i = 0; i < data.list.length; i++) {
        
        if (currentDate != new Date(data.list[i].dt_txt).getDay() || i == data.list.length-1) {

            if (currentDate != -1) {

                if(i == data.list.length-1 && currentDate == new Date(data.list[i].dt_txt).getDay()) {
                    weatherHours.push({
                        date: data.list[i].dt_txt,
                        temp_min: data.list[i].main.temp_min,
                        temp_max: data.list[i].main.temp_max,
                        weatherId: data.list[i].weather[0].id,
                        weather: data.list[i].weather[0].icon,
                    });
                }

                var weather: Weather = {
                    currentDay: currentDate,
                    date: data.list[currentWeather].dt_txt,
                    temp_min: data.list[currentWeather].main.temp_min,
                    temp_max: data.list[currentWeather].main.temp_max,
                    weatherId: data.list[currentWeather].weather[0].id,
                    weatherIcon: data.list[currentWeather].weather[0].icon,
                    weatherHours: weatherHours
                }

                forecastData.push(weather);
                weatherHours = [];
            }

            currentDate = new Date(data.list[i].dt_txt).getDay();
            currentWeather = i;
        } else {
            weatherHours.push({
                date: data.list[i].dt_txt,
                temp_min: data.list[i].main.temp_min,
                temp_max: data.list[i].main.temp_max,
                weather: data.list[i].weather[0].icon,
                weatherId: data.list[i].weather[0].id,
            });
            
        }
    }
    return forecastData;     
}

export function getDateRoute(dateS: string) {
    const date = new Date(dateS);
    return (months[date.getMonth()]) + '-' + date.getDate() + '-' + date.getFullYear() ;
}

export function getIconUrl(icon: string) {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
}