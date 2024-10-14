import Image from "next/image";
import React from "react";
import { Capitalize } from "@/Utils/Capitalize";
import { getDataForecast } from "@/Utils/Weather";
import HourForecast from "./HourForecast";

const WeatherForecast = async ({ city, data, WeatherIcon}) => {
	const formatDate = (timestamp, timezoneOffset) => {
		const date = new Date((timestamp + timezoneOffset) * 1000);
		const options = {
			year: "numeric",
			month: "long",
			day: "numeric",
		};
		const formattedDate = new Intl.DateTimeFormat("fr-FR", options).format(
			date
		);
		return formattedDate;
	};
	let icon = data.weather[0].icon;

	const CountryFlag = async (Flag) => {
		const response = await fetch(
			`https://restcountries.com/v3.1/alpha/${Flag}`
		);
		const data = await response.json();
		return data[0].flags.png; // Retourne l'URL du drapeau en format PNG
	};

	const countryFlagUrl = await CountryFlag(data.sys.country);


	let dataforecast = await getDataForecast(city);

	return (
		<div className="card-longues">
			<div className="header">
				<h2>Prévision du jour - {city}</h2>
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
						alt="Icône Ensoleillé"
						width={50}
						height={50}
						loading="lazy" // Lazy loading of image
					/>
				</div>
				<div className="description">
					<p>{Capitalize(data.weather[0].description)}</p>
				</div>
			</div>
			<div className="footer-card">
				<HourForecast dataforecast={dataforecast} />
			</div>
		</div>
	);
};

export default WeatherForecast;
