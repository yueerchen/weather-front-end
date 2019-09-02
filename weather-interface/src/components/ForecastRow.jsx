import React from "react";

const ForecastRow = props => {
  let date = new Date(1000 * props.data.time);
  let weekday = date.toDateString().slice(0, 3);
  let time =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getMilliseconds();
  if (props.unit === "C") {
    return (
      <div className="weather-forecast__row">
        <span className="weather-forecast__day">{weekday}</span>
        <span className="weather-forecast__icon">
          <i className="fa fa-clock-o"></i>
          {time}
        </span>
        <span className="weather-forecast__high">
          {props.data.minCelsius} {props.unit}
        </span>
        <span className="weather-forecast__low">
          {props.data.maxCelsius} {props.unit}
        </span>
      </div>
    );
  } else if (props.unit === "F") {
    return (
      <div className="weather-forecast__row">
        <span className="weather-forecast__day">{weekday}</span>
        <span className="weather-forecast__icon">
          <i className="fa fa-clock-o"></i>
          {time}
        </span>
        <span className="weather-forecast__high">
          {props.data.minFahrenheit} {props.unit}
        </span>
        <span className="weather-forecast__low">
          {props.data.maxFahrenheit} {props.unit}
        </span>
      </div>
    );
  }
};

export default ForecastRow;
