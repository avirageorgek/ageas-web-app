import React from "react";
import moment from "moment";
import { WiDaySunny } from "weather-icons-react";

interface WeatherDetailsItemProps {
    date: string,
    weatherIcon: React.ReactNode,
    description: string,
    temperatureMin: number,
    temperatureMax: number
    windSpeedMin: number,
    windSpeedMax: number
}


const WeatherDetailsItem: React.FC<WeatherDetailsItemProps> = ({
    date,
    weatherIcon,
    description,
    temperatureMin,
    temperatureMax,
    windSpeedMin,
    windSpeedMax
}) => {
    return (
        <div className="flex flex-col bg-gray-100">
            <div className="flex flex-row justify-center my-10">
                <h3>{moment(date).format("DD-MM-YYYY")}</h3>
            </div>
            <div className="flex flex-row justify-center">
                {weatherIcon}
            </div>
            <div className="flex flex-row justify-center items-center p-8 text-center">
                <p className="block font-medium text-gray-900">{description}</p>
            </div>
            <div className="flex flex-col justify-center items-center my-3">
                <h5 className="block font-semibold text-gray-900">Temperature (min/max)</h5>
                <p>{temperatureMin} / {temperatureMax}</p>
            </div>
            <div className="flex flex-col justify-center items-center my-3">
                <h5 className="block font-semibold text-gray-900">Wind speed (min/max)</h5>
                <p>{windSpeedMin}/{windSpeedMax}</p>
            </div>
        </div>
    )
}


export default WeatherDetailsItem;