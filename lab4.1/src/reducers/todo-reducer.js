import { todoApi } from "../api/todoApi";


const LOAD_TODO = "LOAD_TODO";

const CREATE_TODO_LIST = "CREATE_TODO_LIST";

const CREATE_TODO_ITEM = "CREATE_TODO_ITEM";
const UPDATE_TODO_ITEM = "UPDATE_TODO_ITEM";

let initialState = {
    todoLists: "test",
    createTodoList: {
        name: ""
    },
    createTodoItem: {
        name: "",
        description: "",
        priority: 0,
        listId: 0
    },
    updateTodoItem: {
        id: 0,
        name: "",
        description: "",
        priority: 0,
        listId: 0
    }
}

const todoReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case LOAD_TODO:
            newState.todoLists = action.todoLists;
            return newState;

        case CREATE_TODO_LIST:
            newState.todoLists = [...state.todoLists];
            newState.createTodoList = { name: action.name };
            return newState;

        case CREATE_TODO_ITEM:
            newState.todoLists = [...state.todoLists];
            newState.createTodoItem = {
                name: action.name,
                description: action.description,
                priority: action.priority,
                listId: action.listId
            }

            return newState;

        case UPDATE_TODO_ITEM:
            newState.todoLists = [...state.todoLists];
            newState.updateTodoItem = {
                id: action.id,
                name: action.name,
                description: action.description,
                priority: action.priority,
                listId: action.listId
            }
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

export function createNewTodoListThunkCreator(name) {
    return async (dispatch) => {
        await todoApi.createNewTodoList(name);
        todoApi.getTodoLists().then(data => {
            dispatch(loadTodoListsActionCreator(data));
        })
    }
}

export function createNewTodoListActionCreator(name) {
    return { type: CREATE_TODO_LIST, name: name }
}


export function deleteTodoListThunkCreator(id) {
    return async (dispatch) => {
        await todoApi.deleteTodoList(id);
        todoApi.getTodoLists().then(data => {
            dispatch(loadTodoListsActionCreator(data));
        })
    }
}

export function createNewTodoItemActionCreator(name, description, priority, listId) {
    return { type: CREATE_TODO_ITEM, name: name, description: description, priority: priority, listId: listId }
}

export function createNewTodoItemThunkCreator(name, description, priority, listId) {
    return async (dispatch) => {
        console.log(priority);
        await todoApi.createNewTodoItem(name, description, priority, listId);
        todoApi.getTodoLists().then(data => {
            dispatch(loadTodoListsActionCreator(data));
        })
    }
}

export function updateTodoItemActionCreator(id, name, description, priority, listId) {
    return { type: UPDATE_TODO_ITEM, id: id, name: name, description: description, priority: priority, listId: listId }
}

export function updateTodoItemThunkCreator(id, name, description, priority, listId) {
    return async (dispatch) => {
        await todoApi.updateTodoItem(id, name, description, priority, listId);
        todoApi.getTodoLists().then(data => {
            dispatch(loadTodoListsActionCreator(data));
        })
    }
}

export function deleteTodoItemThunkCreator(id, ownerId) {
    return async (dispatch) => {
        await todoApi.deleteTodoItem(id, ownerId);
        todoApi.getTodoLists().then(data => {
            dispatch(loadTodoListsActionCreator(data));
        })
    }
}

export function setTodoItemAsCheckedThunkCreator(id, ownerId) {
    return async (dispatch) => {
        await todoApi.setTodoItemAsChecked(id, ownerId);
        todoApi.getTodoLists().then(data => {
            dispatch(loadTodoListsActionCreator(data));
        })
    }
}


export default todoReducer;