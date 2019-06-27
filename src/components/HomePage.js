import React from "react";
import VideoItem from "./VideoItem";
import { fetchPopular, selectVideo } from "../actions";
import { connect } from "react-redux";
import "./index.css";

class VideoList extends React.Component {
  componentDidMount() {
    this.props.fetchPopular();
  }
  renderedList = () => {
    if (!this.props.popular) return null;
    return this.props.popular.map((video, index) => {
      return (
        <div key={index} className="three wide column">
          <VideoItem video={video} isFromHome={true} />
        </div>
      );
    });
  };

  render() {
    return <div className="homepage ui grid">{this.renderedList()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    // video: state.video,
    popular: state.popular
  };
};

export default connect(
  mapStateToProps,
  { fetchPopular, selectVideo }
)(VideoList);
