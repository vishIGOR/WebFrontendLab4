import * as axios from 'axios';

const baseURL = "https://sas.front.kreosoft.space/api/";

const instance = axios.create({
    baseURL: baseURL
});

function getTodoLists() {
    return instance.get('ToDoList')
        .then(response => {
            if (response.status === 200) {
                return response.data;
            }
        })
        .catch(error => {
            console.lof(error.response.data.error);
        })
}

function authorize() {
    return instance.post('auth', JSON.stringify({
        username: "u123",
        password: "p123"
    }), {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => {
            return response.json();
        })
        .then((json) => {
            localStorage.setItem("todoToken", json.accessToken);
            console.log("successful authorization")
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