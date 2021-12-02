import * as axios from 'axios';

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
            console.log(error.response.data.error);
        })
}

function setLike(id) {
    return instance.post('news/like', JSON.stringify({
        id: id
    }), {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => {
            if (response.status === 200) {
                console.log("liked ", id)
            }
        })
        .catch(error => console.error(error))
}

export const newsApi = {
    getNews: getNews,
    setLike: setLike
}
