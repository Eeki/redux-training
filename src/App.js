import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { videoSearch } from "./actions/index"
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        props.videoSearch("cats");
    }

    render() {
        const videoSearch = _.debounce(term => {
            this.props.videoSearch(term);
        }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail />
                <VideoList videos={this.props.videos} />
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ videoSearch }, dispatch);
}

function mapStateToProps({ videos }) {
    return { videos };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
