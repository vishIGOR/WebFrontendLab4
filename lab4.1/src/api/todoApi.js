import * as axios from 'axios';

// const baseURL = "https://sas.front.kreosoft.space/api/";

const instance = axios.create({
    baseURL: "https://sas.front.kreosoft.space/api/"
});

function authorize() {
    return instance.post('auth', JSON.stringify({
        username: "admin_vish",
        password: "password_vish"
    }), {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => {
            return response.data;
        })
        .then((json) => {
            localStorage.setItem("todoToken", json.accessToken);
            console.log("successful authorization");
        })
        .catch(error => console.error(error))
}

function getTodoLists() {
    let token = 'Bearer ' + localStorage.getItem("todoToken");

    return instance.get('ToDoList',
        { headers: { 'Authorization': token } })
        .then(response => {
            if (response.status === 200) {
                return response.data;
            }
            else {
                return authorize()
                    .then(
                        getTodoLists()
                    )

            }
        })
        .catch(error => {
            console.log(error.response.data.error);
        })
}

function createNewTodoList(name) {
    let token = 'Bearer ' + localStorage.getItem("todoToken");

    return instance.post('todolist', JSON.stringify({
        name: name
    }), {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
        .then(response => {
            if (response.status === 200) {
                console.log("list created successfully")
            }
            else {
                return authorize()
                    .then(
                        createNewTodoList(name)
                    )

            }
        })
        .catch(error => console.error(error))
}

function updateTodoList(id, name) {
    let token = 'Bearer ' + localStorage.getItem("todoToken");

    return instance.post('todolist', JSON.stringify({
        id: id,
        name: name
    }), {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
        .then(response => {
            if (response.status === 200) {
                console.log("list updated successfully")
            }
            else {
                return authorize()
                    .then(
                        updateTodoList(id, name)
                    )

            }
        })
        .catch(error => console.error(error))
}

function deleteTodoList(id) {
    let token = 'Bearer ' + localStorage.getItem("todoToken");

    return instance.delete('todolist', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        data: {
            id: id
        }
    })
        .then(response => {
            if (response.status === 200) {
                console.log("list deleted successfully")
            }
            else {
                return authorize()
                    .then(
                        deleteTodoList(id)
                    )

            }
        })
        .catch(error => console.error(error))
}

function createNewTodoItem(name, description, priority, listId) {
    let token = 'Bearer ' + localStorage.getItem("todoToken");
    // console.log(priority)
    return instance.post('todoitem', JSON.stringify({
        name: name,
        description: description,
        priority: priority,
        listId: listId
    }), {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
        .then(response => {
            if (response.status === 200) {
                console.log("item created successfully")
            }
            else {
                return authorize()
                    .then(
                        createNewTodoItem(name, description, priority, listId)
                    )

            }
        })
        .catch(error => console.error(error))
}

function updateTodoItem(id, name, description, priority, listId) {
    let token = 'Bearer ' + localStorage.getItem("todoToken");

    return instance.post('todoitem', JSON.stringify({
        id: id,
        name: name,
        description: description,
        priority: priority,
        listId: listId
    }), {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
        .then(response => {
            if (response.status === 200) {
                console.log("item updated successfully")
            }
            else {
                return authorize()
                    .then(
                        updateTodoItem(id, name, description, priority, listId)
                    )

            }
        })
        .catch(error => console.error(error))
}

function deleteTodoItem(id, ownerId) {
    let token = 'Bearer ' + localStorage.getItem("todoToken");

    return instance.delete('todoitem', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        data: {
            ownerId: ownerId,
            id: id
        }
    })
        .then(response => {
            if (response.status === 200) {
                console.log("item deleted successfully")
            }
            else {
                return authorize()
                    .then(
                        deleteTodoItem(id, ownerId)
                    )

            }
        })
        .catch(error => console.error(error))
}

function setTodoItemAsChecked(id, ownerId) {
    let token = 'Bearer ' + localStorage.getItem("todoToken");

    return instance.post('todoitem/check', JSON.stringify({
        id: id,
        ownerId: ownerId
    }), {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
        .then(response => {
            if (response.status === 200) {
                console.log("item checked successfully")
            }
            else {
                return authorize()
                    .then(
                        setTodoItemAsChecked(id, ownerId)
                    )

            }
        })
        .catch(error => console.error(error))
}

export const todoApi = {
    getTodoLists: getTodoLists,
    authorize: authorize,
    createNewTodoList: createNewTodoList,
    updateTodoList: updateTodoList,
    deleteTodoList: deleteTodoList,
    createNewTodoItem: createNewTodoItem,
    updateTodoItem: updateTodoItem,
    deleteTodoItem: deleteTodoItem,
    setTodoItemAsChecked: setTodoItemAsChecked
}