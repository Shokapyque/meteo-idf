import Image from "next/image";
import Link from 'next/link';
import WeatherCity from "./WeatherCity";

async function Container  () {
    return (
        <div className="container">
            <div className="row">
                <WeatherCity city="Paris"/>
                <WeatherCity city="Valenton"/>
                <WeatherCity city="Juvisy-sur-Orge"/>
                <WeatherCity city="Sartrouville"/>
                <WeatherCity city="Montreuil"/>
                <WeatherCity city="Meaux"/>
                {/* Carte météo 7 */}
<div className="card-longues">
        <div className="header">
            <h2>Météo du jour - Paris</h2>
            <p>Mardi 17 Septembre 2024</p>
        </div>
        <div className="body">
            <div className="temp">25°C</div>
            <div className="icon">
                <Image src={"/svg/Ensoleille.svg"} alt="Weather Icon" width={50} height={50} />
            </div>
            <div className="description">
                <p>Ensoleillé</p>
            </div>
        </div>
        <div className="footer">
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

            <div className="map iframe">
                <iframe
                    src="https://earth.nullschool.net/#current/wind/surface/level/orthographic=2.06,24.44,241"
                    frameBorder="0"></iframe>
            </div>
            <div className="mobile-map iframe">
                <iframe
                    src="https://earth.nullschool.net/#current/wind/surface/level/orthographic=2.06,24.44,177"
                    frameBorder="0"></iframe>
            </div>
        </div>
    );
};

export default Container;
