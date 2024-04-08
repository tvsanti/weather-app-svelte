import { writable } from "svelte/store";
type WeatherData = {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    current_units: {
        time: string;
        interval: string;
        temperature_2m: string;
    };
    current: {
        time: string;
        interval: number;
        temperature_2m: number;
    };
    hourly_units: {
        time: string;
        apparent_temperature: string;
    };
    hourly: {
        time: string[];
        apparent_temperature: number[];
    };
    daily_units: {
        time: string;
        weather_code: string;
        temperature_2m_max: string;
        temperature_2m_min: string;
        sunrise: string;
        sunset: string;
    };
    daily: {
        time: string[];
        weather_code: number[];
        temperature_2m_max: number[];
        temperature_2m_min: number[];
        sunrise: string[];
        sunset: string[];
    };
};

export const apiData = writable<WeatherData>({
    latitude: 0,
    longitude: 0,
    generationtime_ms: 0,
    utc_offset_seconds: 0,
    timezone: '',
    timezone_abbreviation: '',
    elevation: 0,
    current_units: {
        time: '',
        interval: '',
        temperature_2m: ''
    },
    current: {
        time: '',
        interval: 0,
        temperature_2m: 0
    },
    hourly_units: {
        time: '',
        apparent_temperature: ''
    },
    hourly: {
        time: [],
        apparent_temperature: []
    },
    daily_units: {
        time: '',
        weather_code: '',
        temperature_2m_max: '',
        temperature_2m_min: '',
        sunrise: '',
        sunset: ''
    },
    daily: {
        time: [],
        weather_code: [],
        temperature_2m_max: [],
        temperature_2m_min: [],
        sunrise: [],
        sunset: []
    }
});


