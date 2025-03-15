
const {responseGenerator} = require("../utils/generic");
const {apiCall} = require("../utils/apiHelper");

const getGeoLocation = async (req, res) => {
    try {
        const {query} = req.query;

        if(!query) {
            return responseGenerator(res, 400, false, "Invalid input", null);
        }

        //Generate url to make API call
        let url = `${process.env.WEATHER_API_URL}v1/search?name=${query}&count=10&language=en&format=json`;
        let searchResult = await apiCall(url, "GET", null, null);
        return responseGenerator(res, 200, true, "Success", searchResult);

    } catch(error) {
        return responseGenerator(res, 500, false, "Failed to fetch locations", null);
    }
}

module.exports = {
    getGeoLocation
}