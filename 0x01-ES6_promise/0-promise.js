function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // Simulate API request using setTimeout
        setTimeout(() => {
            // Simulate successful response
            const response = {
                status: 200,
                data: {
                    message: "Success",
                    // Other data received from API
                }
            };
            resolve(response);
            
            // Simulate error response
            // const error = new Error("API request failed");
            // reject(error);
        }, 1000); // Simulating 1 second delay
    });
}

export default getResponseFromAPI;