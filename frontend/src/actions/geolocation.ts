import { ApiResponse } from "../types/generic";

export const searchLocations = async (query :string) => {
    try {
        let response = await fetch(`${import.meta.env.VITE_BACKEND_URL}geolocation?query=${query}`, {
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

