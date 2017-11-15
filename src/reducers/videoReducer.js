import { FETCH_VIDEOS } from "../actions/index";


export default (state=[], action) => {
    switch (action.type) {
        case FETCH_VIDEOS:
            return action.videos;
    }
    return state;
}
