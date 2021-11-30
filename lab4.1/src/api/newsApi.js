import * as axios from 'axios';

// const baseURL = "https://sas.front.kreosoft.space/api/";

const instance = axios.create({
    baseURL: "https://sas.front.kreosoft.space/api/"
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
    
}

export const newsApi = {
    getNews: getNews,
    setLike: setLike
}
