import React from "react";
import VideoItem from "./VideoItem";
import { fetchVideos, selectVideo } from "../actions";
import { connect } from "react-redux";

class VideoList extends React.Component {
  render() {
    const renderedList = () => {
      if (!this.props.videos) return null;
      return this.props.videos.map((video, index) => {
        return (
          <VideoItem key={index} onVideoSelect={selectVideo} video={video} />
        );
      });
    };

    return (
      <div className="ui container relaxed divided list">{renderedList()}</div>
    );
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
