import React from "react";
import VideoRelated from "./VideoRelated";
import VideoDetail from "./VideoDetail";
import { fetchVideoDetail, fetchRelated } from "../actions";
import { connect } from "react-redux";

class VideoSelected extends React.Component {
  componentDidMount() {
    // fetch video detail
    this.props.fetchVideoDetail(this.props.match.params.id);
    //fetch related video
    this.props.fetchRelated(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchVideoDetail(this.props.match.params.id);
      this.props.fetchRelated(this.props.match.params.id);
    }
  }

  render() {
    return (
      <div className="video_selected ui container">
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.props.videoDetail} />
            </div>
            <div className="five wide column">
              <VideoRelated related={this.props.related} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    videoDetail: state.videoDetail,
    related: state.related
  };
};

export default connect(
  mapStateToProps,
  { fetchVideoDetail, fetchRelated }
)(VideoSelected);
