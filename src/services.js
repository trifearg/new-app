import axios from 'axios';
const BASE_BACKEND_URL = 'http://localhost:3000';

const service = {
    getAllArticles: () => axios.get(`${BASE_BACKEND_URL}/articles`),
    addArticle: (article) => axios.post(`${BASE_BACKEND_URL}/articles`,article),
    editArticle: (articleId) => axios.get(`${BASE_BACKEND_URL}/articles/${articleId}`),
    updateArticle: (article, articleId) => axios.put(`${BASE_BACKEND_URL}/articles/${articleId}`, article),
    deleteArticle: (articleId) => axios.delete(`${BASE_BACKEND_URL}/    articles/${articleId}`),
}

export default service;

