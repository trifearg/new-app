import axios from 'axios';
const BASE_BACKEND_URL = 'http://localhost:3000';

const service = {
    getAllArticles: () => axios.get(`${BASE_BACKEND_URL}/articles`),
    addArticle: (article: object) => axios.post(`${BASE_BACKEND_URL}/articles`, article),
    editArticle: (articleId: number) => axios.get(`${BASE_BACKEND_URL}/articles/${articleId}`),
    updateArticle: (article: object, articleId: number) => axios.put(`${BASE_BACKEND_URL}/articles/${articleId}`, article),
    deleteArticle: (articleId: number) => axios.delete(`${BASE_BACKEND_URL}/articles/${articleId}`),
}

export default service;

