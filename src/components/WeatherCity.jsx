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

function WeatherIcon (svg) {

    switch (svg) {
        case "01d" : // Clear
            return "/svg/clear-day.svg"
        case "01n" :
            return "/svg/clear-night.svg"

        case "02d" : // Partly Cloudy
            return "/svg/partly-cloudly-day.svg"
        case "02n" :
            return "/svg/partly-cloudly-night.svg"

        case "03d" : // Cloud
            return "/svg/cloud-day.svg"
        case "03n" :
            return "/svg/cloud-night.svg"

        case "04d" : // Full Cloud
            return "/svg/full-cloud.svg"
        case "04n" :
            return "/svg/full-cloud.svg"

        case "09d" : // Full rain
            return "/svg/full-rain.svg"
        case "09n" :
            return "/svg/full-rain.svg"

        case "10d" : // Rain
            return "/svg/rain.svg"
        case "10n" :
            return "/svg/rain.svg"

        case "11d" : // Thunderstorm
            return "/svg/thunderstorm.svg"
        case "11n" :
            return "/svg/thunderstorm.svg"

        case "13d" : // Snow
            return "/svg/snow-day.svg"
        case "13n" :
            return "/svg/snow-night.svg"

        case "50d" : // Mist
            return "/svg/mist.png"
        case "50n" :
            return "/svg/mist.png"
        default :
            return <p>Error</p>
    }
}


    
    return (
        <div className="card">
            <div className="card2">
                <div className="header">
                    {ishomepage ? <h2>{city}</h2> : <h2>Météo actuelle</h2>}
                    <p>{formatDate(data.dt, data.timezone)}</p>
                </div>
                <div className="body">
                    <div className="temp">{data.main.temp.toFixed(1)}°</div>
                    <div className="icon">
                        <Image src={WeatherIcon(data.weather[0].icon)} alt="Weather Icon" width={50} height={50} />
                    </div>
                    <div className="description">
                        <p>{data.weather[0].description}</p>
                    </div>
                </div>
                <div className="footer-card">
                    <div className="Humidity">
                        <p><Image src="/svg/humidity.svg" alt="vent" width={30} height={30} /><span><br/>{data.main.humidity}%</span></p>
                    </div>
                    <p>|</p>
                    <div className="Wind">
                        <p><Image src="/svg/wind.svg" alt="vent" width={30} height={30} /><span><br/>{data.wind.speed}km/h</span></p>
                    </div>
                </div>
                <Link href={city} className="footer-card-button">En savoir plus</Link>
            </div>
        </div>
    );
}

export default WeatherCity;
