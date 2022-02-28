import React from 'react'

export const Weather = ({weather}) => {
    return (
        <div className="weather ">
            <h2 className="city">Weather in <span id="place">{weather.name}</span></h2>
            <div className="row my-3">
                <div className="col-6">
                    <h2 className="temp">{weather.main.temp}°C</h2>
                </div>
                <div className="col-6">
                    <div>
                        <h4 style={{ display: 'block' }} className='m-none' >Feels Like</h4>
                        <h4 id="feels">{weather.main.feels_like}°C</h4>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <p className='m-none' >Min Temp</p>
                    <span id='minTemp' style={{ fontWeight: 'bold' }}>{weather.main.temp_min}°C</span>
                </div>
                <div className="col-4">
                    <p className='m-none' >Max Temp</p>
                    <span id='maxTemp' style={{ fontWeight: 'bold' }}>{weather.main.temp_max}°C</span>
                </div>
                <div className="col-4">
                    <p className='m-none' >Visibility</p>
                    <span style={{ fontWeight: 'bold' }} id="vis">{weather.visibility}</span>
                </div>
            </div>
            <div className="flex">
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="no img found" className="weather-icon" />
                <div className="weather-description">{weather.weather[0].description}</div>
            </div>
            <div className="humidity my-1">Humidity : <span id="humid">{weather.main.humidity}%</span></div>
            <div className="wind my-1">Wind speed : <span id="wind">{weather.wind.speed}</span> m/s (<span id='direction'>{weather.wind.deg} °N</span>)</div>
            <div className="pressure my-1">Pressure : <span id="pressure">{weather.main.pressure} ATMs</span> </div>
        </div>
    )
}
