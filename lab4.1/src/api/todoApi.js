import * as axios from 'axios';

// const baseURL = "https://sas.front.kreosoft.space/api/";

const instance = axios.create({
    baseURL: "https://sas.front.kreosoft.space/api/"
});

function getTodoLists() {
    let token = 'Bearer ' + localStorage.getItem("todoToken");

    return instance.get('ToDoList',
        { headers: { 'Authorization': token } })
        .then(response => {
            if (response.status === 200) {
                return response.data;
            }
        })
        .catch(error => {
            console.log(error.response.data.error);
        })
}

function createNewTodoList(name) {
    let token = 'Bearer ' + localStorage.getItem("todoToken");

    return instance.post('todolists', JSON.stringify({
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
        })
        .catch(error => console.error(error))
}

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
            console.log("successful authorization ", localStorage.getItem("todoToken"))
        })
        .catch(error => console.error(error))
}

export const todoApi = {
    getTodoLists: getTodoLists,
    authorize: authorize
}