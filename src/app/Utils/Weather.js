// Get coords from city
async function getCoords(city) {

    try {
        let res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},&limit=1&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`)

        if (!res.ok) {
            throw new Error("Erreur : " + res.status)
        }

        let data = await res.json();
        return [data[0].lat, data[0].lon]

    } catch (error) {
        console.error(error.message)
    }
}

// Get weather from coords
async function getWeather(lat, lon) {

    try {
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=fr&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}&units=metric`)

        if (!res.ok) {
            throw new Error("Erreur : " + res.status)
        }

        let data = await res.json();
        return data

    } catch (error) {
        console.error(error.message)
    }
}


// EXPORTED MAIN FUNCTION
export async function getData(city) {
    let coords = await getCoords(city)
    let data = await getWeather(coords[0], coords[1])

    return data
}