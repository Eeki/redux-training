
/*
Actions are payloads of information that send data from your application to your store.
They are the only source of information for the store.
You send them to the store using store.dispatch().
*/

/*
Actions are plain JavaScript objects.
Actions must have a type property that indicates the type of action being performed.
*/


import YTSearch from "youtube-api-search";
const API_KEY = "AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss";

export const FETCH_VIDEOS = "FETCH_VIDEOS";
export const SELECT_VIDEO = "SELECT_VIDEO";


export const selectVideo = (video) =>
    ({
       type: SELECT_VIDEO,
       video
    });


export function videoSearch(term) {
    return dispatch => {
        YTSearch({ key: API_KEY, term: term }, videos => {
            dispatch({
                type: FETCH_VIDEOS,
                videos,
            });
            dispatch(selectVideo(videos[0]))
        });
    }
}
