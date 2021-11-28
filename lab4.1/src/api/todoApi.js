import * as axios from 'axios';

const baseURL = "https://sas.front.kreosoft.space/api/";

const instance = axios.create({
    baseURL: baseURL
});

function getTodoLists(){
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

export const todoApi = {
    getTodoLists : getTodoLists
}