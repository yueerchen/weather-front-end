import React from "react";
import umberella from "../images/icon-umberella.png";
import wind from "../images/icon-wind.png";
import compass from "../images/icon-compass.png";

const CityCondition = props => {
  const { cityData, currentData, unit } = props;
  if (unit === "C") {
    return (
      <section className="weather-condition">
        <div className="weather-condition__location">{cityData.name}</div>
        <div style={{ textAlign: "center", fontSize: "14px" }}>Clear</div>
        <div className="weather-condition__temp">
          {currentData.minCelsius} <sup>&deg;</sup>
          {unit}
        </div>
        <div className="weather-condition__desc">
          <div>
            <img src={umberella} alt="umberella" />
            <span className="citem">{`${currentData.humidity} %`}</span>
          </div>
          <div>
            <img src={wind} alt="wind" />{" "}
            <span className="citem">{`${currentData.windSpeed} km/h`}</span>
          </div>
          <div>
            <img src={compass} alt="compass" />{" "}
            <span className="citem">{currentData.windDirection}</span>
          </div>
        </div>
      </section>
    );
  } else if (unit === "F") {
    return (
      <section className="weather-condition">
        <div className="weather-condition__location">{cityData.name}</div>
        <div style={{ textAlign: "center", fontSize: "14px" }}>Clear</div>
        <div className="weather-condition__temp">
          {currentData.minFahrenheit} <sup>&deg;</sup>
          {unit}
        </div>
        <div className="weather-condition__desc">
          <div>
            <img src={umberella} alt="umberella" />
            <span className="citem">{`${currentData.humidity} %`}</span>
          </div>
          <div>
            <img src={wind} alt="wind" />{" "}
            <span className="citem">{`${currentData.windSpeed} km/h`}</span>
          </div>
          <div>
            <img src={compass} alt="compass" />{" "}
            <span className="citem">{currentData.windDirection}</span>
          </div>
        </div>
      </section>
    );
  }
};

export default CityCondition;
