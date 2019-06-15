import React from "react";
import VideoItem from "./VideoItem";
import { fetchPopular, selectVideo } from "../actions";
import { connect } from "react-redux";

class VideoList extends React.Component {
  componentDidMount() {
    this.renderedList();
  }

  renderedList = () => {
    if (!this.props.popular) return null;
    console.log(this.props.popular);
    return this.props.popular.map((video, index) => {
      return (
        <VideoItem key={index} onVideoSelect={selectVideo} video={video} />
      );
    });
  };

  render() {
    return (
      <div className="ui container relaxed divided list">
        {this.renderedList()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    popular: state.popular
  };
};

export default connect(
  mapStateToProps,
  { fetchPopular, selectVideo }
)(VideoList);
