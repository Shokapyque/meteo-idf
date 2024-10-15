import { getData } from "@/Utils/Weather";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { notFound } from "next/navigation"; // Importez notFound pour la redirection
import { Capitalize } from "@/Utils/Capitalize";

async function WeatherCity({ city, ishomepage, WeatherIcon}) {
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

	const CountryFlag = async (Flag) => {
		const response = await fetch(
			`https://restcountries.com/v3.1/alpha/${Flag}`
		);
		const data = await response.json();
		return data[0].flags.png; // Retourne l'URL du drapeau en format PNG
	};

	const countryFlagUrl = await CountryFlag(data.sys.country);

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
						<div className="temp">{data.main.temp.toFixed(1)}°</div>
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
					{ishomepage ? (
						<Link href={city} className="footer-card-button">
							En savoir plus
						</Link>
					) : (
						<Link href={"/"} className="footer-card-button">
							Revenir à l'accueuil
						</Link>
					)}
				</div>
			</div>
	);
}

export default WeatherCity;