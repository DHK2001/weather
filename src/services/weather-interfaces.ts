
export interface WeatherData {
    list: WeatherItem[];
}

export interface WeatherItem {
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
    description: string;
}

export type Weather = {
    currentDay: number,
    date: string,
    temp_min: number,
    temp_max: Number,
    weatherId: number,
    weatherHours: WeatherHours[]
}

export type WeatherHours = {
    date: string,
    temp_min: number,
    temp_max: number,
    weather: number,
}
