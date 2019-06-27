import React from "react";

const VideoDetail = props => {
  if (!props.video) {
    return <div>Loading...</div>;
  }
  console.log(props.video);

  const videoSrc = `https://www.youtube.com/embed/${props.video[0].id}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="video title" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4>{props.video[0].snippet.title}</h4>
        <p>{props.video[0].snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
