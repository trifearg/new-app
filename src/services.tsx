import axios from 'axios';
const BASE_BACKEND_URL: string = 'https://localhost:3000';

const service = {
    getAllArticles: () => axios.get(`${BASE_BACKEND_URL}/articles`),
    addArticle: (article: object) => axios.post(`${BASE_BACKEND_URL}/articles`, article),
    editArticle: (articleId: string) => axios.get(`${BASE_BACKEND_URL}/articles/${articleId}`),
    updateArticle: (article: object, articleId: string) => axios.put(`${BASE_BACKEND_URL}/articles/${articleId}`, article),
    deleteArticle: (articleId: string) => axios.delete(`${BASE_BACKEND_URL}/articles/${articleId}`),
    getAllArticleFromNewsApi: () => axios.get(`https://newsapi.org/v2/everything?language=ru&q=tesla&apiKey=a0d1bff76be44cb5b0f9716537d62bc3`)
}

export default service;

