import { getData } from '@/app/Utils/Weather';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

async function WeatherCity  ({city}) {
    let data = await getData(city)
    return (
        <div className="card">
                    <div className="card2">
                        <div className="header">
                            <h2>{city}</h2>
                            <p>Mardi 17 Septembre 2024</p>
                        </div>
                        <div className="body">
                            <div className="temp">{data.main.temp}°</div>
                            <div className="icon">
                                <Image src={"/svg/Ensoleille.svg"} alt="Weather Icon" width={50} height={50} />
                            </div>
                            <div className="description">
                                <p>{data.weather[0].description}</p>
                            </div>
                        </div>
                        <div className="footer">
                            <p>Humidité: <span>50%</span></p>
                            <p>Vent: <span>5 km/h</span></p>
                        </div>
                        <div className="footer-button-container">
                            <Link href={city} className="footer-button"> Voir la météo de {city}</Link>
                        </div>
                    </div>
                </div>
    );
};

export default WeatherCity;