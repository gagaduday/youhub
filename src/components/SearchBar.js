import React from "react";
import { connect } from "react-redux";
import { fetchVideos, searchVideo } from "../actions";

class SearchBar extends React.Component {
  onFormSubmit = e => {
    e.preventDefault();
    this.props.fetchVideos(this.props.input);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="ui fluid action input focus">
            <input
              type="text"
              value={this.props.input}
              onChange={event => this.props.searchVideo(event.target.value)}
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

const mapStateToProps = state => {
  return { input: state.input };
};

export default connect(
  mapStateToProps,
  { fetchVideos, searchVideo }
)(SearchBar);
