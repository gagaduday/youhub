import React from "react";
import VideoItem from "./VideoItem";
import { selectVideo } from "../actions";
import { connect } from "react-redux";

const VideoRelated = props => {
  const fetchRelatedVideo = () => {
    return props.related.map((video, index) => {
      return (
        <VideoItem key={index} onVideoSelect={selectVideo} video={video} />
      );
    });
  };

  return <div className="ui relaxed divided list">{fetchRelatedVideo()}</div>;
};

// const mapStateToProps = state => {
//   return {
//     video: state.video
//   };
// };

export default connect(
  null,
  { selectVideo }
)(VideoRelated);
