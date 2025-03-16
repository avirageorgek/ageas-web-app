
const {responseGenerator} = require("../utils/generic");
const {apiCall} = require("../utils/apiHelper");

const getGeoLocation = async (req, res) => {
    try {
        const {query} = req.query;
        let finalResult = [];
        if(!query) {    
            return responseGenerator(res, 400, false, "Invalid input", null);
        }

        //Generate url to make API call
        let url = `${process.env.GEOLOCATION_API_BASE_URL}v1/search?name=${query}&count=1&language=en&format=json`;
        let searchResult = await apiCall(url, "GET", null, null);
        
        if(searchResult && searchResult.results) {
            finalResult = searchResult.results;
        }
        return responseGenerator(res, 200, true, "Success", finalResult);

    } catch(error) {
        return responseGenerator(res, 500, false, "Failed to fetch locations", null);
    }
}

module.exports = {
    getGeoLocation
}