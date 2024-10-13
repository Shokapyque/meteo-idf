import { getData } from '@/Utils/Weather';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

async function WeatherDetails  ({city}) {
    let data = await getData(city)
    let icon = data.weather[0].icon
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
                            <Link href={"/"} className="footer-card-button">Revenir à l'accueuil</Link>
                    </div> 
                </div>
        
    );
};

export default WeatherDetails;