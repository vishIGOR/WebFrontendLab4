import * as axios from 'axios';

const baseURL = "https://sas.front.kreosoft.space/api/";

const instance = axios.create({
    baseURL: baseURL
});

function getNews() {
    return instance.get('News')
        .then(response => {
            if (response.status === 200) {
                return response.data;
            }
        })
        .catch(error => {
            console.lof(error.response.data.error);
        })
}

function setLike(id) {
    return axios.create({
        method: 'post',
        url: baseURL + "News/like",
        headers:{
            "Content-type": "application/json"
        },
        data:{
            id: id
        }

    })
    .then(response =>{
        if(response.status === 200){
            console.log("success");
        }
    })
    .catch(error => {
        console.lof(error.response.data.error);
    })
}

export const newsApi = {
    getNews: getNews,
    setLike: setLike
}
