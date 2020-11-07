import React, { useEffect, useState } from "react";
import { createMuiTheme, Container, ThemeProvider } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import CssBaseline from "@material-ui/core/CssBaseline";
import Weather from "./Weather.jsx";

const WeatherApp = (props) => {
  const [city, setCity] = useState(props.city);
  const [error, setError] = useState(null);
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    getWeather(props.city || 'Toronto')
      .then(weather => {
        setCurrentWeather(weather);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
      });
  }, [props.city, error]);
  
  const handleCityChange = city => {
    setCity(city);
  };

  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(","),
      fontSize: 14,
      h5: {
        fontWeight: 600
      }
    }
  });

  if (
    (currentWeather && Object.keys(currentWeather).length) ||
    (forecast && Object.keys(forecast).length)
  ) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm">
          <Weather
            city={city}
            currentWeather={currentWeather}
            forecast={forecast}
            onCityChange={handleCityChange}
            error={error}
          />
        </Container>
      </ThemeProvider>
    );
  } else {
    return (
      <div>
        <CircularProgress color={error ? "secondary" : "primary"} />
        {error ? <p>{error}</p> : ""}
      </div>
    );
  }
}

function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Error: Location " + (response.statusText).toLowerCase());
  }
}

function getWeather(city) {
  return fetch(
    `${process.env.REACT_APP_API_URL}/weather/?q=${city}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
  )
    .then(res => handleResponse(res))
    .then(weather => {
      if (Object.entries(weather).length) {
        const mappedData = mapDataToWeatherInterface(weather);
        return mappedData;
      }
    });
}

function mapDataToWeatherInterface(data) {
  const mapped = {
    city: data.name,
    country: data.sys.country,
    date: data.dt * 1000,
    humidity: data.main.humidity,
    icon_id: data.weather[0].id,
    temperature: data.main.temp, // HERE YOU CAN CONVERT FARENHEIT IF YOU WANT
    description: data.weather[0].description,
    wind_speed: Math.round(data.wind.speed * 3.6), // convert from m/s to km/h
    condition: data.cod
  };

  // remove undefined fields
  Object.keys(mapped).forEach(  
    key => mapped[key] === undefined && delete data[key]
  );

  return mapped;
}
export default  WeatherApp;