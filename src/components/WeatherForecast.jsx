import Image from 'next/image';
import React from 'react';
import { notFound } from 'next/navigation'; // Importez notFound pour la redirection


async function WeatherForecast({city}) {

    let data;
    
    try {
        data = await getData(city);
        if (!data || data.cod !== 200) {
            notFound();
            return;
        }
    } catch (error) {
        notFound();
        return;
    }

    let icon = data.weather[0].icon;
    return (
        <div>
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
    );
};

export default WeatherForecast;