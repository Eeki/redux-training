import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { selectVideo } from "../actions/index";

import VideoListItem from "./video_list_item";

const VideoList = props => {
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect={props.selectVideo}
        key={video.etag}
        video={video}
      />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectVideo }, dispatch);
}

export default connect(null, mapDispatchToProps)(VideoList);
