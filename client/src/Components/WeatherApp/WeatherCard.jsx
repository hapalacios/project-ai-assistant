import React from "react";
import Card from 'react-bootstrap/Card';
import WeatherCardSubheader from "./WeatherCardSubheader";
import './WeatherCard.scss';

export default function WeatherCard(props) {
  const { currentWeather, forecast, icon, recommendation } = props;

  return (
    <div>
      <WeatherCardComponent className="weather-card"
        currentWeather={currentWeather}
        forecast={forecast}
        icon={icon}
        recommendation={recommendation}
      />
    </div>
  );
}

const WeatherCardComponent = props => {
  const humidity = "wi wi-humidity";
  const strongWind = "wi wi-strong-wind";
  const { currentWeather, forecast, icon, recommendation } = props;

  return (
    <Card className="weather-card-component">
      <Card.Body>
        <Card.Title className="weather-card-component__title">
          {currentWeather.city + ", " + currentWeather.country}
        </Card.Title>
        <Card.Subtitle className="weather-card-component__sub-title">
          <WeatherCardSubheader currentWeather={currentWeather} />
        </Card.Subtitle>
        <span className={`${icon} weather-card-component__weather-icon color_theme`}></span> 
        <h5 className="weather-card-component__temperature">{Math.round(currentWeather.temperature)}&deg;C</h5>
        <div className="weather-card-component__atmospheric-conditions weather-card-component__atmospheric-conditions-winds">
          <span className={`${strongWind} color_theme weather-card-component__atmospheric-conditions-icon`}></span>
          {" "}{currentWeather.wind_speed} km/h Winds
        </div>
        <div className="weather-card-component__atmospheric-conditions weather-card-component__atmospheric-conditions-humidity">
          <span className={`${humidity} color_theme weather-card-component__atmospheric-conditions-icon`}></span>
          {" "}{currentWeather.humidity}% Humidity
        </div>
        <p className="weather-card-component__recommendation">
          {recommendation} 
        </p>
      </Card.Body>
    </Card>
  );
};