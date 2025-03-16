export interface ApiResponse {
    success: boolean;
    message?: string;
    data?: any; 
}

export interface WeatherObject {
    date: string,
    weatherCode: number,
    weatherDescription: string,
    temperatureMin: number,
    temperatureMax: number,
    windSpeedMin: number,
    windSpeedMax: number
}