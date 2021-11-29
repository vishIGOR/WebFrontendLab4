import { todoApi } from "../api/todoApi";


const LOAD_TODO = "LOAD_TODO";
const AUTH_TODO = "AUTH_TODO";

let initialState = {
    todoLists: []
}

const todoReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case LOAD_TODO:
            newState.todoLists = action.todoLists;
            return newState;
        default:
            return newState;
    }
}

export function loadTodoListsActionCreator(todoLists) {
    return { type: LOAD_TODO, todoLists: todoLists }
}

export function loadTodoListsThunkCreator() {
    return (dispatch) => {
        todoApi.getTodoLists().then(data => {
            dispatch(loadTodoListsActionCreator(data));
        })
    }
}

export
    export default todoReducer;