import React from "react";
import VideoItem from "./VideoItem";
import { fetchRelated, selectVideo } from "../actions";
import { connect } from "react-redux";

class VideoRelated extends React.Component {
  componentDidMount() {
    if (!this.props.video) return null;
    this.props.fetchRelated(this.props.video.id.videoId);
  }

  fetchRelatedVideo = () => {
    return this.props.related.map((video, index) => {
      return (
        <VideoItem key={index} onVideoSelect={selectVideo} video={video} />
      );
    });
  };

  render() {
    return (
      <div className="ui relaxed divided list">{this.fetchRelatedVideo()}</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    video: state.video,
    related: state.related
  };
};

export default connect(
  mapStateToProps,
  { fetchRelated, selectVideo }
)(VideoRelated);
