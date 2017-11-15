import YTSearch from 'youtube-api-search';
const API_KEY = "AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss";

export const FETCH_VIDEOS = "FETCH_VIDEOS";
export const SELECT_VIDEO = "SELECT_VIDEO";

// action creator
export const selectVideo = video =>
    //Action
    ({
        type: SELECT_VIDEO,
        video
    })

export const videoSearch = term =>
    dispatch => {
        YTSearch({key: API_KEY, term}, videos => {
            if (term !== 'boobs'){
                dispatch({
                    type: FETCH_VIDEOS,
                    videos
                });
            dispatch(selectVideo(videos[0]));
            } else {
                console.warn('no boobs');
            }

        })
    };
