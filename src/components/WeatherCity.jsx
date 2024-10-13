import { getData } from '@/Utils/Weather';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { notFound } from 'next/navigation'; // Importez notFound pour la redirection

async function WeatherCity({ city, ishomepage }) {
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

    const formatDate = (timestamp, timezoneOffset) => {
        const date = new Date((timestamp + timezoneOffset) * 1000);
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
        const formattedDate = new Intl.DateTimeFormat('fr-FR', options).format(date);
        return formattedDate;
    };

    return (
        <div className="card">
            <div className="card2">
                <div className="header">
                    {ishomepage ? <h2>{city}</h2> : <h2>Météo actuelle</h2>}
                    <p>{formatDate(data.dt, data.timezone)}</p>
                </div>
                <div className="body">
                    <div className="temp">{data.main.temp}°</div>
                    <div className="icon">
                        <Image src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather Icon" width={50} height={50} />
                    </div>
                    <div className="description">
                        <p>{data.weather[0].description}</p>
                    </div>
                </div>
                <div className="footer-card">
                    <div className="Humidity">
                        <p><Image src="/svg/humidity.svg" alt="vent" width={20} height={20} /><span><br/>{data.main.humidity}%</span></p>
                    </div>
                    <div className="Wind">
                        <p><Image src="/svg/wind.svg" alt="vent" width={20} height={20} /><span><br/>{data.wind.speed}km/h</span></p>
                    </div>
                </div>
                {ishomepage ? <Link href={city} className="footer-card-button">En savoir plus</Link> : <Link href={"/"} className="footer-card-button">Revenir à l'accueuil</Link>}
            </div>
        </div>
    );
}

export default WeatherCity;
