const {responseGenerator, formatWeatherData} = require("../utils/generic");
const {apiCall} = require("../utils/apiHelper");


const getWeatherData = async (req, res) => {
    try {
        let formattedResult = [];
        const {latitude, longitude, forecast_days} = req.query;
        if((latitude === undefined || latitude === null) || (longitude === undefined || longitude === null)) {
            return responseGenerator(res, 400, false, "Invalid request", null);
        }

        //Generate url to make API call
        let url = `${process.env.WEATHER_API_BASE_URL}v1/forecast?latitude=${latitude}&longitude=${longitude}&forecast_days=${forecast_days}&daily=weather_code&daily=temperature_2m_min&daily=temperature_2m_max&daily=wind_speed_10m_min&daily=wind_speed_10m_max`;
        //let url = `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&forecast_days=2&daily=temperature_2m_max&daily=wind_speed_10m_max`
        console.log("Generated url: ", url);
        let searchResult = await apiCall(url, "GET", null, null);
        if(searchResult) {
            formattedResult = await formatWeatherData(searchResult)
        }

        return responseGenerator(res, 200, true, "Success", formattedResult);
    } catch(error) {
        console.log("Error in controller: ", error);
        return responseGenerator(res, 500, false, "Failed to fetch", null);
    }
}

module.exports = {
    getWeatherData
}

