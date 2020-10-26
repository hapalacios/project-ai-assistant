import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent,CardHeader,CardMedia,Divider,Typography,Grid} from "@material-ui/core";
import WeatherCardSubheader from "./WeatherCardSubheader";
import './AppLayout.scss';

const useStyles = makeStyles(theme => ({
  atmospheric: {
    fontSize: "1rem",
    padding: "5px"
  },
  buttons: {
    color: "black"
  },
  card: {
    padding: "0",
    margin: "0",
    width:  '109%',
    height: 273,
    border: '1px solid transparent',
    backgroundColor: 'transparent'
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    border: "1px solid transparent",
    backgroundColor: 'transparent'
  },
  error: {
    color: "red",
    padding: "10px"
  },
  fullList: {
    width: "auto"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  root: {
    flexiGrow: 1,
    color: "black"
  },
  search: {
    marginTop: "20px"
  },
  wi: {
    color: "#673ab7"
  }
}));

export default function AppLayout(props) {
  const classes = useStyles();
  const { currentWeather, forecast, icon, recommendation } = props;

  return (
    <div className= "app-layout">
          <WeatherCard style={{ padding: "0", margin: "0" }}
            currentWeather={currentWeather}
            forecast={forecast}
            icon={icon}
            recommendation={recommendation}
          />
    </div>
  );
}

const WeatherCard = props => {
  const classes = useStyles();
  const humidity = "wi wi-humidity";
  const strongWind = "wi wi-strong-wind";
  const { currentWeather, forecast, icon, recommendation } = props;

  return (
    <Card className={classes.card} style={{ margin: "0", padding: "0"}}>
      <CardHeader title={currentWeather.city + ", " + currentWeather.country}
        subheader={<WeatherCardSubheader currentWeather={currentWeather} />}
      />
      <CardContent>
        <CardMedia className={`${icon} ${classes.wi}`}
          src={icon} style={{ fontSize: "5rem", float: "right", margin: "0", padding: "0" }} />
        <h5 className="app-layout__temperature">{Math.round(currentWeather.temperature)}&deg;C</h5>
        <p className="atmospheric-conditions">
          <span className={`${strongWind} ${classes.wi} ${classes.atmospheric}`}></span>
          {currentWeather.wind_speed} km/h Winds{" "}
          <span className={`${humidity} ${classes.wi} ${classes.atmospheric}`}></span>
          {currentWeather.humidity}% Humidity
        </p>
        <p className="app-layout__recommendation">
          {recommendation}
        </p>
      </CardContent>
    </Card>
  );
};