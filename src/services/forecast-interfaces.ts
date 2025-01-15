
export interface ForecastData {
    list: ForecastItem[];
}

export interface ForecastItem {
    main: {
        temp_min: number;
        temp_max: number;
    }
    weather: WeatherDescription[];
    dt_txt: string;
}

export interface WeatherDescription {
    id: number;
    main: string;
    icon: string;
    description: string;
}

export type Weather = {
    currentDay: number,
    date: string,
    temp_min: number,
    temp_max: Number,
    weatherId: number,
    weatherIcon: string,
    weatherHours: WeatherHours[]
}

export type WeatherHours = {
    date: string,
    temp_min: number,
    temp_max: number,
    weather: string,
    weatherId: number,
}
