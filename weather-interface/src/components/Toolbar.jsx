import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faThermometerEmpty } from "@fortawesome/free-solid-svg-icons";

class Toolbar extends React.Component {
  render() {
    return (
      <nav>
        <div style={{ flex: 1 }}>
          <input
            className="search-input"
            placeholder="cc, city"
            onChange={this.props.onInputChange}
          />
          <button className="search-btn" onClick={this.props.onSubmit}>
            <FontAwesomeIcon icon={faSearch} />
          </button>

          <button className="temp-switch" onClick={this.props.handleTempClick}>
            <FontAwesomeIcon
              icon={faThermometerEmpty}
              aria-hidden="true"
              style={{ paddingRight: "7px", fontSize: "28px" }}
            />
            <sup>&deg;</sup>
            {this.props.unit}
          </button>
        </div>
      </nav>
    );
  }
}
// const Toolbar = () => {
//   return (
//     <nav>
//       <div style={{ flex: 1 }}>
//         <input className="search-input" />
//         <button className="search-btn">
//           <FontAwesomeIcon icon={faSearch} />
//         </button>

//         <button className="temp-switch">
//           <FontAwesomeIcon
//             icon={faThermometerEmpty}
//             aria-hidden="true"
//             style={{ paddingRight: "7px", fontSize: "28px" }}
//           />
//           <sup>&deg;</sup>C
//         </button>
//       </div>
//     </nav>
//   );
// };

export default Toolbar;
