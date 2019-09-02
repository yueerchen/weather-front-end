import React from "react";
import Toolbar from "./Toolbar";
import CityCondition from "./CityCondition";
import Forecast from "./Forecast";
import axios from "axios";

class WeatherChannel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      celsius: true,
      quantity: 5,
      input: null,
      city: {
        name: "Shanghai",
        coord: {
          lat: 31.2253,
          lon: 121.4889
        },
        country: "CN",
        population: 14608512
      },
      current: {
        minCelsius: 22,
        maxCelsius: 25.56,
        minFahrenheit: 72,
        maxFahrenheit: 78.01,
        humidity: 100,
        windSpeed: 4,
        windDirection: "E"
      },
      forecast: [
        {
          minCelsius: 21.85,
          maxCelsius: 23.27,
          minFahrenheit: 71.33,
          maxFahrenheit: 73.89,
          humidity: 92,
          windSpeed: 3.48,
          windDirection: "NE",
          time: 1567360800
        },
        {
          minCelsius: 21.87,
          maxCelsius: 22.94,
          minFahrenheit: 71.37,
          maxFahrenheit: 73.29,
          humidity: 92,
          windSpeed: 3.98,
          windDirection: "NE",
          time: 1567371600
        },
        {
          minCelsius: 22.66,
          maxCelsius: 23.37,
          minFahrenheit: 72.79,
          maxFahrenheit: 74.07,
          humidity: 92,
          windSpeed: 4.46,
          windDirection: "NE",
          time: 1567382400
        },
        {
          minCelsius: 23.66,
          maxCelsius: 24.02,
          minFahrenheit: 74.59,
          maxFahrenheit: 75.24,
          humidity: 89,
          windSpeed: 4.56,
          windDirection: "NE",
          time: 1567393200
        },
        {
          minCelsius: 23.26,
          maxCelsius: 23.26,
          minFahrenheit: 73.87,
          maxFahrenheit: 73.87,
          humidity: 95,
          windSpeed: 3.82,
          windDirection: "E",
          time: 1567404000
        },
        {
          minCelsius: 24.04,
          maxCelsius: 24.04,
          minFahrenheit: 75.27,
          maxFahrenheit: 75.27,
          humidity: 93,
          windSpeed: 2.49,
          windDirection: "E",
          time: 1567414800
        },
        {
          minCelsius: 23.3,
          maxCelsius: 23.3,
          minFahrenheit: 73.94,
          maxFahrenheit: 73.94,
          humidity: 93,
          windSpeed: 4.39,
          windDirection: "NE",
          time: 1567425600
        },
        {
          minCelsius: 21.95,
          maxCelsius: 21.95,
          minFahrenheit: 71.51,
          maxFahrenheit: 71.51,
          humidity: 89,
          windSpeed: 4.67,
          windDirection: "NE",
          time: 1567436400
        },
        {
          minCelsius: 22.15,
          maxCelsius: 22.15,
          minFahrenheit: 71.87,
          maxFahrenheit: 71.87,
          humidity: 90,
          windSpeed: 1.95,
          windDirection: "E",
          time: 1567447200
        },
        {
          minCelsius: 21.85,
          maxCelsius: 21.85,
          minFahrenheit: 71.33,
          maxFahrenheit: 71.33,
          humidity: 93,
          windSpeed: 2.22,
          windDirection: "NW",
          time: 1567458000
        }
      ]
    };
    // axios(
    //   `https://weather-api-project.herokuapp.com/api/weather/au/brisbane`
    // ).then(res =>
    //   this.setState({
    //     city: res.data.data.city,
    //     current: res.data.data.current,
    //     forecast: res.data.data.forecast
    //   })
    // );
  }

  handleTempClick = e => {
    if (this.state.celsius === false) {
      this.setState({ celsius: true });
    } else {
      this.setState({ celsius: false });
    }
  };

  onSubmit = e => {
    e.preventDefault();
    const cc = this.state.input.split(",")[0];
    const cityName = this.state.input.split(",")[1];
    axios(
      `https://weather-api-project.herokuapp.com/api/weather/${cc}/${cityName}`
    ).then(res =>
      this.setState({
        city: res.data.data.city,
        current: res.data.data.current,
        forecast: res.data.data.forecast
      })
    );
  };
  onInputChange = e => {
    this.setState({ input: e.target.value });
  };

  render() {
    if (this.state.celsius === true) {
      return (
        <main>
          <Toolbar
            handleTempClick={this.handleTempClick}
            unit="C"
            onInputChange={this.onInputChange}
            onSubmit={this.onSubmit}
          />
          <CityCondition
            cityData={this.state.city}
            currentData={this.state.current}
            unit="C"
          />
          <Forecast data={this.state.forecast} unit="C" />
        </main>
      );
    } else if (this.state.celsius === false) {
      return (
        <main>
          <Toolbar
            handleTempClick={this.handleTempClick}
            unit="F"
            onInputChange={this.onInputChange}
            onSubmit={this.onSubmit}
          />
          <CityCondition
            cityData={this.state.city}
            currentData={this.state.current}
            unit="F"
          />
          <Forecast data={this.state.forecast} unit="F" />
        </main>
      );
    }
  }
}

export default WeatherChannel;
