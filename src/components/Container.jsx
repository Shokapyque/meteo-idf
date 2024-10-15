import Image from "next/image";
import WeatherCity from "./WeatherCity";

const cities = ["Paris", "London", "Berlin", "Tokyo", "Las Vegas", "Shanghai", "São Paulo", "Mumbai", "Cairo", "Beijing"];

function Container() {


    return (
        <div className="container">
            <div className="row">
                {cities.map((city, index) => (
                    <WeatherCity key={index} city={city} ishomepage={true}/>
                ))}

            </div>

            {/* Desktop Map */}
            <div className="map">
                <iframe
                    src="https://earth.nullschool.net/#current/wind/surface/level/orthographic=2.06,24.44,241"
                    frameBorder="0"
                    title="Wind Map"
                    loading="lazy" // Lazy load the iframe
                ></iframe>
            </div>

            {/* Mobile Map */}
            <div className="mobile-map">
                <iframe
                    src="https://earth.nullschool.net/#current/wind/surface/level/orthographic=2.06,24.44,177"
                    frameBorder="0"
                    title="Mobile Wind Map"
                    loading="lazy" // Lazy load the iframe
                ></iframe>
            </div>
        </div>
    );
}

export default Container;
