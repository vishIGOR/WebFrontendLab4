import { createStore,combineReducers, applyMiddleware } from "redux";
import newsReducer from "../reducers/news-reducer";
import ThunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    newsPage: newsReducer
});

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));
export default store;

