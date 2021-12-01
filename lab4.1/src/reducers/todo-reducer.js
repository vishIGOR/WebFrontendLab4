import { todoApi } from "../api/todoApi";


const LOAD_TODO = "LOAD_TODO";
const AUTH_TODO = "AUTH_TODO";
const EDIT_TODO_LIST = "EDIT_TODO_LIST";
const EDIT_TODO_ITEM = "EDIT_TODO_ITEM";

let initialState = {
    todoLists: "test",
    editTodoList: {
        id: 0,
        name: "string"
    }
}

const todoReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case LOAD_TODO:
            newState.todoLists = action.todoLists;
            return newState;

        case EDIT_TODO_LIST:
            return newState;

        case EDIT_TODO_ITEM:
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

export function editTodoListsAcionCreator(id, name) {
    return { type: EDIT_TODO_LIST, id: id, name: name }
}

export default todoReducer;