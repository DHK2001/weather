import { WeatherData, WeatherHours } from "@/services/weather-interfaces";
import { Weather } from "@/services/weather-interfaces";

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

export const getIcons = (icon: number, date:string) => {

    switch (icon) {
        //Thunderstorm
        case 200:
            return getDayOrNight(date) === "Day" ? ` https://openweathermap.org/img/wn/11d@2x.png`  : `https://openweathermap.org/img/wn/11n@2x.png` ;
        case 201:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/11d@2x.png`  : `https://openweathermap.org/img/wn/11n@2x.png` ;
        case 202:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/11d@2x.png`  : `https://openweathermap.org/img/wn/11n@2x.png` ;
        case 210:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/11d@2x.png`  : `https://openweathermap.org/img/wn/11n@2x.png` ;
        case 211:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/11d@2x.png`  : `https://openweathermap.org/img/wn/11n@2x.png` ;
        case 212:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/11d@2x.png`  : `https://openweathermap.org/img/wn/11n@2x.png` ;
        case 221:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/11d@2x.png`  : `https://openweathermap.org/img/wn/11n@2x.png` ;
        case 230:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/11d@2x.png`  : `https://openweathermap.org/img/wn/11n@2x.png` ;
        case 231:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/11d@2x.png`  : `https://openweathermap.org/img/wn/11n@2x.png` ;
        case 232:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/11d@2x.png`  : `https://openweathermap.org/img/wn/11n@2x.png` ;
        //Drizzle
        case 300:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/09d@2x.png`  : `https://openweathermap.org/img/wn/09n@2x.png` ;
        case 301:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/09d@2x.png`  : `https://openweathermap.org/img/wn/09n@2x.png` ;
        case 302:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/09d@2x.png`  : `https://openweathermap.org/img/wn/09n@2x.png` ;
        case 310:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/09d@2x.png`  : `https://openweathermap.org/img/wn/09n@2x.png` ;
        case 311:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/09d@2x.png`  : `https://openweathermap.org/img/wn/09n@2x.png` ;
        case 312:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/09d@2x.png`  : `https://openweathermap.org/img/wn/09n@2x.png` ;
        case 313:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/09d@2x.png`  : `https://openweathermap.org/img/wn/09n@2x.png` ;
        case 314:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/09d@2x.png`  : `https://openweathermap.org/img/wn/09n@2x.png` ;
        case 321:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/09d@2x.png`  : `https://openweathermap.org/img/wn/09n@2x.png` ;
        //Rain
        case 500:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/10d@2x.png`  : `https://openweathermap.org/img/wn/10n@2x.png` ;
        case 501:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/10d@2x.png`  : `https://openweathermap.org/img/wn/10n@2x.png` ;
        case 502:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/10d@2x.png`  : `https://openweathermap.org/img/wn/10n@2x.png` ;
        case 503:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/10d@2x.png`  : `https://openweathermap.org/img/wn/10n@2x.png` ;
        case 504:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/10d@2x.png`  : `https://openweathermap.org/img/wn/10n@2x.png` ;
        case 511:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/10d@2x.png`  : `https://openweathermap.org/img/wn/10n@2x.png` ;
        case 520:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/10d@2x.png`  : `https://openweathermap.org/img/wn/10n@2x.png` ;
        case 521:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/10d@2x.png`  : `https://openweathermap.org/img/wn/10n@2x.png` ;
        case 522:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/10d@2x.png`  : `https://openweathermap.org/img/wn/10n@2x.png` ;
        case 531:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/10d@2x.png`  : `https://openweathermap.org/img/wn/10n@2x.png` ;
        //Snow
        case 600:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/13d@2x.png`  : `https://openweathermap.org/img/wn/13n@2x.png` ;
        case 601:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/13d@2x.png`  : `https://openweathermap.org/img/wn/13n@2x.png` ;
        case 602:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/13d@2x.png`  : `https://openweathermap.org/img/wn/13n@2x.png` ;
        case 611:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/13d@2x.png`  : `https://openweathermap.org/img/wn/13n@2x.png` ;
        case 612:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/13d@2x.png`  : `https://openweathermap.org/img/wn/13n@2x.png` ;
        case 613:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/13d@2x.png`  : `https://openweathermap.org/img/wn/13n@2x.png` ;
        case 615:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/13d@2x.png`  : `https://openweathermap.org/img/wn/13n@2x.png` ;
        case 616:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/13d@2x.png`  : `https://openweathermap.org/img/wn/13n@2x.png` ;
        case 620:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/13d@2x.png`  : `https://openweathermap.org/img/wn/13n@2x.png` ;
        case 621:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/13d@2x.png`  : `https://openweathermap.org/img/wn/13n@2x.png` ;
        case 622:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/13d@2x.png`  : `https://openweathermap.org/img/wn/13n@2x.png` ;
        //Atmosphere
        case 701:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/50d@2x.png`  : `https://openweathermap.org/img/wn/50n@2x.png` ;
        case 711:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/50d@2x.png`  : `https://openweathermap.org/img/wn/50n@2x.png` ;
        case 721:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/50d@2x.png`  : `https://openweathermap.org/img/wn/50n@2x.png` ;
        case 731:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/50d@2x.png`  : `https://openweathermap.org/img/wn/50n@2x.png` ;
        case 741:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/50d@2x.png`  : `https://openweathermap.org/img/wn/50n@2x.png` ;
        case 751:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/50d@2x.png`  : `https://openweathermap.org/img/wn/50n@2x.png` ;
        case 761:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/50d@2x.png`  : `https://openweathermap.org/img/wn/50n@2x.png` ;
        case 762:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/50d@2x.png`  : `https://openweathermap.org/img/wn/50n@2x.png` ;
        case 771:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/50d@2x.png`  : `https://openweathermap.org/img/wn/50n@2x.png` ;
        case 781:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/50d@2x.png`  : `https://openweathermap.org/img/wn/50n@2x.png` ;
        //Clear
        case 800:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/01d@2x.png`  : `https://openweathermap.org/img/wn/01n@2x.png` ;
        //Clouds
        case 801:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/02d@2x.png`  : `https://openweathermap.org/img/wn/02n@2x.png` ;
        case 802:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/02d@2x.png`  : `https://openweathermap.org/img/wn/02n@2x.png` ;
        case 803:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/02d@2x.png`  : `https://openweathermap.org/img/wn/02n@2x.png` ;
        case 804:
            return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/02d@2x.png`  : `https://openweathermap.org/img/wn/02n@2x.png` ;
    }
    
    return getDayOrNight(date) === "Day" ? `https://openweathermap.org/img/wn/01d@2x.png`  : `https://openweathermap.org/img/wn/01n@2x.png` ;
};

const getDayOrNight = (dateString: string): string => {
    const date = new Date(dateString);
    const hours = date.getHours();  
    if (hours >= 6 && hours < 18) {
      return "Day";
    } else {
      return "Night";
    }
};

export function getDate(dateString: string)
{
    const date = new Date(dateString);
    var day = days[date.getDay()] + ' - ' + date.getDate() + 'th';
    var ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    var minutes = date.getMinutes() <= 9 ? '0'+date.getMinutes() : date.getMinutes();
    var time = date.getHours() + ':' + minutes + " " + ampm;
    return {day, time};     
}

export function groupForecastData(data: WeatherData)
{
    var currentDate = -1;
    var weatherHours: WeatherHours[] = [];    
    var weatherData: Weather[] = [];
    var currentWeather = -1;
    
    for (var i = 0; i < data.list.length; i++) {
        
        if (currentDate != new Date(data.list[i].dt_txt).getDay() || i == data.list.length-1) {

            if (currentDate != -1) {

                if(i == data.list.length-1 && currentDate == new Date(data.list[i].dt_txt).getDay()) {
                    weatherHours.push({
                        date: data.list[i].dt_txt,
                        temp_min: data.list[i].main.temp_min,
                        temp_max: data.list[i].main.temp_max,
                        weather: data.list[i].weather[0].id,
                    });
                }

                var weather: Weather = {
                    currentDay: currentDate,
                    date: data.list[currentWeather].dt_txt,
                    temp_min: data.list[currentWeather].main.temp_min,
                    temp_max: data.list[currentWeather].main.temp_max,
                    weatherId: data.list[currentWeather].weather[0].id,
                    weatherHours: weatherHours
                }

                weatherData.push(weather);
                weatherHours = [];
            }

            currentDate = new Date(data.list[i].dt_txt).getDay();
            currentWeather = i;
        } else {
            weatherHours.push({
                date: data.list[i].dt_txt,
                temp_min: data.list[i].main.temp_min,
                temp_max: data.list[i].main.temp_max,
                weather: data.list[i].weather[0].id,
            });
            
        }
    }
    return weatherData;     
}

export function getDateRoute(dateS: string) {
    const date = new Date(dateS);
    return (months[date.getMonth()]) + '-' + date.getDate() + '-' + date.getFullYear() ;
}