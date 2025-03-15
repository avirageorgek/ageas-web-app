const WEATHER_VARIABLE_CODES = require("../constants/weather");

const responseGenerator = (res, statusCode, success, message, data = null) => {
    return res.status(statusCode).json({
        success,
        message,
        data
    })
}

const formatWeatherData = (weatherData) => {
    let obj = {
        latitude: weatherData.latitude,
        longitude: weatherData.longitude,

    }

    let mappedData = weatherData.daily.time.map((item, index) => {
        return {
            date: item,
            weatherCode: weatherData.daily.weather_code[index],
            weatherDescription: WEATHER_VARIABLE_CODES[weatherData.daily.weather_code[index]],
            temperatureMin: weatherData.daily.temperature_2m_min[index],
            temperatureMax: weatherData.daily.temperature_2m_max[index],
            windSpeedMin: weatherData.daily.wind_speed_10m_min,
            windSpeedMax: weatherData.daily.wind_speed_10m_max
        }
    })
    obj["formattedData"] = mappedData
    return obj;
}

module.exports = {
    responseGenerator,
    formatWeatherData,
}