import { newsApi } from "../api/newsApi";

const LOAD_NEWS = "LOAD_NEWS";
const SET_LIKE = "SET_LIKE";

let initialState = {
    news: []
}

const newsReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case LOAD_NEWS:
            newState.news = action.news;
            return newState;
        case SET_LIKE:
            newState.news = action.news;
            return newState;
        default:
            return newState;
    }
}

export function loadNewsActionCreator(news) {
    return { type: LOAD_NEWS, news: news }
}

export function loadNewsThunkCreator() {
    return (dispatch) => {
        newsApi.getNews().then(data => {
            dispatch(loadNewsActionCreator(data));
        })
    }
}

export function setLikeThunkCreator(id){
    return async (dispatch) =>{
        await newsApi.setLike(id);
        newsApi.getNews().then(data => {
            dispatch(loadNewsActionCreator(data));
        })
    }
}

export default newsReducer;