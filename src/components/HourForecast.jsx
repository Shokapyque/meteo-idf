import React from 'react';

const HourForecast = async ({ dataforecast }) => {
    // Vérifiez si dataforecast est valide et contient une liste

    return (
        <div className="hourly-forecast">
            {dataforecast.list.map((hour, index) => {
                const time = hour.dt_txt.split(" ")[1].split(":")[0]; // Extraire l'heure
                return (
                    <div key={index} className="hour">
                        <p>{time}:00</p>
                        <p>{hour.main.temp.toFixed(1)}°C</p>
                    </div>
                );
            })}
        </div>
    );
};

export default HourForecast;
