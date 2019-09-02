import React from "react";
import ForecastRow from "./ForecastRow";

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: 5,
      itemsToggled: false,
      fiveClass: "forecast__switch_0 switch-active",
      tenClass: "forecast__switch_1"
    };
  }
  toggleItem = e => {
    if (this.state.itemsToggled === false) {
      this.setState({
        items: 10,
        itemsToggled: true,
        fiveClass: "forecast__switch_0",
        tenClass: "forecast__switch_1 switch-active"
      });
    } else {
      this.setState({
        items: 5,
        itemsToggled: false,
        fiveClass: "forecast__switch_0 switch-active",
        tenClass: "forecast__switch_1"
      });
    }
  };
  render() {
    const data = this.props.data.slice(0, this.state.items);
    if (this.props.unit === "C") {
      return (
        <section className="weather-forecast">
          <div className="forecast__switch">
            <button className={this.state.fiveClass} onClick={this.toggleItem}>
              5 items
            </button>
            <button className={this.state.tenClass} onClick={this.toggleItem}>
              10 items
            </button>
          </div>

          {data.map((data, index) => (
            <ForecastRow key={index} data={data} unit="C" />
          ))}
        </section>
      );
    } else if (this.props.unit === "F") {
      return (
        <section className="weather-forecast">
          <div className="forecast__switch">
            <button className={this.state.fiveClass} onClick={this.toggleItem}>
              5 items
            </button>
            <button className={this.state.tenClass} onClick={this.toggleItem}>
              10 items
            </button>
          </div>

          {data.map((data, index) => (
            <ForecastRow key={index} data={data} unit="F" />
          ))}
        </section>
      );
    }
  }
}

export default Forecast;
