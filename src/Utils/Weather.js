// api.js or a similar file

// Get coords from city
async function getCoords(city) {
    try {
        let res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},&limit=1&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`);

        if (!res.ok) {
            throw new Error("Erreur : " + res.status);
        }

        let data = await res.json();
        console.log("API Response Data:", data); // Log the API response

        // Check if data is valid
        if (data.length === 0) {
            return null; // Return null if no data found
        }

        return [data[0].lat, data[0].lon];

    } catch (error) {
        console.error(error.message);
        return null; // Return null in case of an error
    }
}

// Get weather from coords
async function getWeather(lat, lon) {
    try {
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=fr&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}&units=metric`);

        if (!res.ok) {
            throw new Error("Erreur : " + res.status);
        }

        let data = await res.json();
        return data;

    } catch (error) {
        console.error(error.message);
        return null; // Ensure null is returned in case of an error
    }
}

// EXPORTED MAIN FUNCTION
export async function getData(city) {
    let coords = await getCoords(city);

    // Log the coords for debugging
    console.log("Coords:", coords); // Debugging line

    // Check if coords is null or contains invalid values
    if (!Array.isArray(coords) || coords.length < 2 || coords[0] === 0 || coords[1] === 0) {
        console.error("Invalid coordinates or failed to fetch coords."); // Log an error message
        // Redirect to the 404 page
        return { redirect: { destination: '/404', permanent: false } };
    }

    let data = await getWeather(coords[0], coords[1]);
    return data;
}
