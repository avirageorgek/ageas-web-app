const apiCall = async (url, method, headers, body) => {
    try {
        //let formattedHeaders = new Headers(headers); 
        if(!headers) {
            headers = {
                "Content-Type": "application/json"
            }
        }
        let options = {
            method,
            headers: headers
        };
    
        if(body) {
            let formattedBody = JSON.stringify(body);
            options["body"] = formattedBody
        }
    
        let data = await fetch(url, options);

        return data.json();

    } catch(error) {
        throw new Error("Failed to make api call");
    }
    
}

module.exports = {
    apiCall
}