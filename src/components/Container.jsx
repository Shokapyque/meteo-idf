import Image from "next/image";

const Container = () => {
    return (
        <div className="container">
            <div className="row">
                {/* Carte météo 1 */}
                <div className="card">
                    <div className="card1">
                        <div className="header">
                            <h2>Paris, FR</h2>
                            <p>Lundi 16 Septembre 2024</p>
                        </div>
                        <div className="body">
                            <div className="temp">18°C</div>
                            <div className="icon">
                                <Image src={"/svg/Nuageux.svg"} alt="Weather Icon" width={50} height={50} />
                            </div>
                            <div className="description">
                                <p>Partiellement nuageux</p>
                            </div>
                        </div>
                        <div className="footer">
                            <p>Humidité: <span>60%</span></p>
                            <p>Vent: <span>15 km/h</span></p>
                        </div>
                    </div>
                </div>

                {/* Carte météo 2 */}
                <div className="card">
                    <div className="card1">
                        <div className="header">
                            <h2>New York, US</h2>
                            <p>Lundi 16 Septembre 2024</p>
                        </div>
                        <div className="body">
                            <div className="temp">22°C</div>
                            <div className="icon">
                                <Image src={"/svg/Soleil.svg"} alt="Weather Icon" width={50} height={50} />
                            </div>
                            <div className="description">
                                <p>Soleil éclatant</p>
                            </div>
                        </div>
                        <div className="footer">
                            <p>Humidité: <span>40%</span></p>
                            <p>Vent: <span>10 km/h</span></p>
                        </div>
                    </div>
                </div>

                {/* Carte météo 3 */}
                <div className="card">
                    <div className="card1">
                        <div className="header">
                            <h2>Tokyo, JP</h2>
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
                            <p>Humidité: <span>50%</span></p>
                            <p>Vent: <span>5 km/h</span></p>
                        </div>
                    </div>
                </div>

                {/* Carte météo 4 */}
                <div className="card">
                    <div className="card2">
                        <div className="header">
                            <h2>Tokyo, JP</h2>
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
                            <p>Humidité: <span>50%</span></p>
                            <p>Vent: <span>5 km/h</span></p>
                        </div>
                    </div>
                </div>

                {/* Carte météo 5 */}
                <div className="card">
                    <div className="card2">
                        <div className="header">
                            <h2>Tokyo, JP</h2>
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
                            <p>Humidité: <span>50%</span></p>
                            <p>Vent: <span>5 km/h</span></p>
                        </div>
                    </div>
                </div>

                {/* Carte météo 6 */}
                <div className="card">
                    <div className="card2">
                        <div className="header">
                            <h2>Tokyo, JP</h2>
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
                            <p>Humidité: <span>50%</span></p>
                            <p>Vent: <span>5 km/h</span></p>
                        </div>
                    </div>
                </div>

                {/* Carte météo 7 */}
                <div className="card">
                    <div className="card2">
                        <div className="header">
                            <h2>Tokyo, JP</h2>
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
                            <p>Humidité: <span>50%</span></p>
                            <p>Vent: <span>5 km/h</span></p>
                        </div>
                    </div>
                </div>
                {/* Carte météo 7 */}
                <div className="card-longues">
                    <div className="card3">
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
            </div>

            <div className="map iframe">
                <iframe
                    src="https://earth.nullschool.net/#current/wind/surface/level/orthographic=2.06,24.44,241"frameBorder="0"></iframe>
            </div>
            <div className="mobile-map iframe">
                <iframe
                    src="https://earth.nullschool.net/#current/wind/surface/level/orthographic=2.06,24.44,177"frameBorder="0"></iframe>
            </div>
        </div>
    );
};

export default Container;
