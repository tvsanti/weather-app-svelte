import { writable } from "svelte/store";
type CurrentUnits = {
    time: string;
    interval: string;
    temperature_2m: string;
}

type CurrentData = {
    time: string;
    interval: number;
    temperature_2m: number;
}

type HourlyUnits = {
    time: string;
    apparent_temperature: string;
}

type HourlyData = {
    time: string[];
    apparent_temperature: number[];
}

type WeatherData = {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    current_units: CurrentUnits;
    current: CurrentData;
    hourly_units: HourlyUnits;
    hourly: HourlyData;
}

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
    }
})


