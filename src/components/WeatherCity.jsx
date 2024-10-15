'use client'
import { getData } from "@/Utils/Weather";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { notFound, useRouter } from "next/navigation"; // Importez notFound pour la redirection
import { Capitalize } from "@/Utils/Capitalize";
import WeatherIcon from "@/Utils/svg";

async function WeatherCity({ city, ishomepage}) {
	const router = useRouter();
	let data;

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

	return (
			<div className="card">
				<div className="card2">
					<div className="header">
						<h2>{city}</h2>
						<p>
							{countryFlagUrl && (
								<img
									src={countryFlagUrl}
									alt={`Drapeau de ${data.sys.country}`}
									width={50}
									height={30}
								/>
							)}
						</p>
					</div>
					<div className="body">
						<div className="temp">{data.main.temp.toFixed(1)}°C</div>
						<div className="icon">
							<Image
								src={WeatherIcon(data.weather[0].icon)}
								alt="Weather Icon"
								width={120}
								height={120}
							/>
						</div>
						<div className="description">
							<p>{Capitalize(data.weather[0].description)}</p>
						</div>
					</div>
					<div className="footer-card">
						<div className="Humidity">
							<p>
								<Image
									src="/svg/humidity.svg"
									alt="vent"
									width={30}
									height={30}
								/>
								<span>
									<br />
									{data.main.humidity}%
								</span>
							</p>
						</div>
						<p>|</p>
						<div className="Wind">
							<p>
								<Image src="/svg/wind.svg" alt="vent" width={30} height={30} />
								<span>
									<br />
									{data.wind.speed.toFixed(1)}km/h
								</span>
							</p>
						</div>
					</div>
						<Link href={city} className="footer-card-button">
							En savoir plus
						</Link>
				</div>
			</div>
	);
}

export default WeatherCity;
