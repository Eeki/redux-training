import React, { Component } from "react";
import { connect } from 'react-redux';

class VideoDetail extends Component {

    render() {
        const {video} = this.props;
        console.log('video', video)
        if (!video) {
            return <div>Loading...</div>;
        }

        const videoId = video.id.videoId;
        const url = `https://www.youtube.com/embed/${videoId}`;

        return (
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={url} />
                </div>
                <div className="details">
                    <div>{video.snippet.title}</div>
                    <div>{video.snippet.description}</div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ selectedVideo }) {
    return { video: selectedVideo };
}


export default connect(mapStateToProps)(VideoDetail);
