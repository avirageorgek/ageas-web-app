import { ApiResponse } from "../types/generic";

export const getWeatherData = async (latitude :number, longitude: number, forecast_days: number) => {
    try {
        let response = await fetch(`${import.meta.env.VITE_BACKEND_URL}weather?latitude=${latitude}&longitude=${longitude}&forecast_days=${forecast_days}`, {
            method: "GET"
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data: ApiResponse = await response.json();
        if(data && data.success) {
            return data.data
        }
    } catch(error) {
        console.log(error);
        return [];
    }
    
}

