/*
Actions describe the fact that something happened,
but don't specify how the application's state changes in response.
This is the job of reducers.
*/


import { combineReducers } from "redux";
import videosReducer from "./videosReducer";
import selectedVideoReducer from './selectedVideoReducer';

const rootReducer = combineReducers({
    videos: videosReducer,
    selectedVideo: selectedVideoReducer
});

export default rootReducer;