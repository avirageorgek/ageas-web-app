import React from "react";
import { WiDaySunny } from "weather-icons-react";

interface WeatherDetailsItemProps {
    date: string,
    weatherIcon: React.ReactNode,
    description: string,
    temperature: string,
    windSpeed: string
}


const WeatherDetailsItem: React.FC<WeatherDetailsItemProps> = ({
    date,
    weatherIcon,
    description,
    temperature,
    windSpeed
}) => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-center my-10">
                <h3>{date}</h3>
            </div>
            <div className="flex flex-row justify-center">
                {weatherIcon}
            </div>
            <div className="flex flex-row justify-center">
                <p>{description}</p>
            </div>
            <div className="flex flex-row justify-center">
                <p>{temperature}</p>
            </div>
            <div className="flex flex-row justify-center">
                <p>{windSpeed}</p>
            </div>
        </div>
    )
}


export default WeatherDetailsItem;