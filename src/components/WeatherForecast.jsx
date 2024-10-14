import Image from 'next/image';
import React from 'react';

const WeatherForecast = ({city, data, WeatherIcon}) => {

    const formatDate = (timestamp, timezoneOffset) => {
        const date = new Date((timestamp + timezoneOffset) * 1000);
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',

        };
        const formattedDate = new Intl.DateTimeFormat('fr-FR', options).format(date);
        return formattedDate;
    }


    return (
            <div className="card-longues">
					<div className="header">
						<h2>Prévisions du jours - {city}</h2>
						<p>{formatDate(data.dt, data.timezone)}</p>
					</div>
					<div className="body">
						<div className="temp">25°C</div>
						<div className="icon">
							<Image
								src={WeatherIcon(data.weather[0].icon)}
								alt="Icône Ensoleillé"
								width={50}
								height={50}
								loading="lazy" // Chargement différé de l'image
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
									<p>{String(i).padStart(2, "0")}:00</p>
									<p>{25 - i}°C</p>
								</div>
							))}
						</div>
					</div>
				</div>
    );
};

export default WeatherForecast;