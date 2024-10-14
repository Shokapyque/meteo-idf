import React from 'react';

const HourForecast = ({ dataforecast }) => {
    return (
        <div className="hourly-forecast">
            {dataforecast.list.map((hour, index) => {
                let time=hour.dt_txt.split(" ")[1].split(":")[0];
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
