import { createStore,combineReducers, applyMiddleware } from "redux";
import newsReducer from "../reducers/news-reducer";
import ThunkMiddleware from "redux-thunk";
import todoReducer from "../reducers/todo-reducer";

let reducers = combineReducers({
    todoPage: todoReducer,
    newsPage: newsReducer
    
});

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));
export default store;

