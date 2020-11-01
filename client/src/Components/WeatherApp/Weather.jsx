import React from "react";
import WeatherCard from "./WeatherCard";
// import WeatherSearch from "./WeatherSearch"; This is going to enabled in sprint 3 to do search and show live Weather of any city
import * as weatherIcons from "../../JSON/icons";
import * as recommendations from "../../JSON/recommendations";

export default function Weather(props) {
  const { city, currentWeather, forecast, onCityChange, error } = props;
  if (currentWeather && forecast) {
    const prefix = "wi wi-";
    const icon = prefix + weatherIcons.default[currentWeather.icon_id].icon;
    const recommendation =
      recommendations.default[currentWeather.icon_id].recommendation;

    return (
      <div>
        {/* <WeatherSearch city={city} onCityChange={onCityChange} error={error} /> */}
        <WeatherCard
          currentWeather={currentWeather}
          forecast={forecast}
          icon={icon}
          recommendation={recommendation}
        />
      </div>
    );
  }
}
