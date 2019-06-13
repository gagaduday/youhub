import React from "react";
import { connect } from "react-redux";
import { selectVideo } from "../actions";

class VideoDetail extends React.Component {
  render() {
    if (!this.props.video) {
      return <div>Loading...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${
      this.props.video.id.videoId
    }`;

    return (
      <div>
        <div className="ui embed">
          <iframe title="video title" src={videoSrc} />
        </div>
        <div className="ui segment">
          <h4>{this.props.video.snippet.title}</h4>
          <p>{this.props.video.snippet.description}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    video: state.video
  };
};

export default connect(
  mapStateToProps,
  { selectVideo }
)(VideoDetail);
