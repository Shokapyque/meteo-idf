import Image from "next/image";
import WeatherCity from "./WeatherCity";

const cities = ["Paris", "London", "Berlin", "Tokyo", "Delhi", "Shanghai", "São Paulo", "Mumbai", "Cairo", "Beijing"];

function Container() {
    return (
        <div className="container">
            <div className="row">
                {cities.map((city, index) => (
                    <WeatherCity key={index} city={city} ishomepage={true}/>
                ))}

                {/* Carte météo 7 */}
                <div className="card">
                    <div className="header">
                        <h2>Météo du jour - Paris</h2>
                        <p>Mardi 17 Septembre 2024</p>
                    </div>
                    <div className="body">
                        <div className="temp">25°C</div>
                        <div className="icon">
                            <Image
                                src={"/svg/Ensoleille.svg"}
                                alt="Ensoleillé icon"
                                width={50}
                                height={50}
                                loading="lazy" // Lazy load the image
                            />
                        </div>
                        <div className="description">
                            <p>Ensoleillé</p>
                        </div>
                    </div>
                    <div className="footer-card">
                        <div className="hourly-forecast">
                            {Array.from({ length: 24 }, (_, i) => (
                                <div className="hour" key={i}>
                                    <p>{String(i).padStart(2, '0')}:00</p>
                                    <p>{25 - i}°C</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
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
