import React from "react";
import { connect } from "react-redux";
import { fetchVideos } from "../actions";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.fetchVideos(this.state.term);
  };

  onInputChange = e => {
    this.setState({ term: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="ui fluid action input focus">
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              placeholder="Search"
            />
            <button
              className="ui white basic button"
              onClick={this.onFormSubmit}
            >
              <i className="search link icon" />
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchVideos }
)(SearchBar);
