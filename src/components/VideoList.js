import React from "react";
import VideoItem from "./VideoItem";
import { fetchVideos, selectVideo } from "../actions";
import { connect } from "react-redux";

class VideoList extends React.Component {
  renderedList() {
    if (!this.props.videos) return null;
    return this.props.videos.map((video, index) => {
      return (
        <VideoItem key={index} onVideoSelect={selectVideo} video={video} />
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderedList()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    videos: state.videos
  };
};

export default connect(
  mapStateToProps,
  { fetchVideos, selectVideo }
)(VideoList);
