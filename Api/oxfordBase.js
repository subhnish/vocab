let getFromOxford = async (path, filters) => {
    let baseUrl = "https://od-api.oxforddictionaries.com/api/v2"
    let response = await fetch(`${baseUrl}${path}`, {
        headers: {
            Accept: "application/json",
            app_id: process.env.OXFORD_APP_ID,
            app_key: process.env.OXFORD_APP_KEY
        }
    }
    )
    return response.json()
}

module.exports = getFromOxford