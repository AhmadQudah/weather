import "./cssFile.css";
import React from "react";

class SearchBar extends React.Component {
  state = { weather: "" };

  onInputChange = event => {
    this.setState({ weather: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.weather);
  };

  render() {
    return (
      <div className="search-bar ui segment searchSegment">
        <form className="ui form searchForm">
          <label
            style={{
              marginLeft: "30px",
              backgroundColor: "rgb(175, 133, 133)"
            }}
            className="ui label"
          >
            Search weather
          </label>
          <input
            style={{ width: "50%", marginLeft: "10px", marginTop: "5px" }}
            className="prompt inputSubmit"
            type="text"
            onChange={this.onInputChange}
          />
          <button
            type="submit"
            className="ui button btnSubmit"
            onClick={this.onFormSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
