import * as axios from 'axios';

// const baseURL = "https://sas.front.kreosoft.space/api/";

const instance = axios.create({
    baseURL: "https://sas.front.kreosoft.space/api/"
});

function getTodoLists() {
    let token = 'Bearer ' + localStorage.getItem("todoToken");

    return instance.get('ToDoList', 
    { headers: {"Authorization" : token} })
        .then(response => {
            if (response.status === 200) {
                return response.data;
            }
        })
        .catch(error => {
            console.log(error.response.data.error);
        })
}

function authorize() {
    return instance.post('auth', JSON.stringify({
        "username": "admin_vish",
        "password": "password_vish"
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
            console.log("successful authorization ",localStorage.getItem("todoToken"))
        })
        .catch(error => console.error(error))

    // return axios.create({
    //     method: 'post',
    //     url: baseURL + "auth",
    //     headers: {
    //         "Content-type": "application/json"
    //     },
    //     data: {
    //         username: "u123",
    //         password: "p123"
    //     }

    // })
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then((json) => {
    //         localStorage.setItem("todoToken", json.accessToken);
    //     })
    //     .catch(error => console.error(error))
}

export const todoApi = {
    getTodoLists: getTodoLists,
    authorize: authorize
}

export default authorize;