import React from "react";
import VideoItemMain from "./VideoItemMain";
import { fetchPopular, selectVideo } from "../actions";
import { connect } from "react-redux";
import "./index.css";

class VideoList extends React.Component {
  renderedList = () => {
    if (!this.props.popular) return null;
    this.props.fetchPopular();
    return this.props.popular.map((video, index) => {
      return (
        <div className="three wide column">
          <VideoItemMain
            key={index}
            onVideoSelect={selectVideo}
            video={video}
          />
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
    video: state.video,
    popular: state.popular
  };
};

export default connect(
  mapStateToProps,
  { fetchPopular, selectVideo }
)(VideoList);
