import React from "react";
import VideoItem from "./VideoItem";

const VideoRelated = props => {
  const fetchRelatedVideo = () => {
    return props.related.map((video, index) => {
      return <VideoItem key={index} video={video} />;
    });
  };

  return <div className="ui relaxed divided list">{fetchRelatedVideo()}</div>;
};

export default VideoRelated;
