import service from "../services";

export default class ArticlesApi {
    static getArticlesFromFakeBack = async () => {
        const result = await service.getAllArticles();
        return result.data;
    } 
    static getArticlesFromApiBack = async () => {
        const result = await service.getAllArticleFromNewsApi();
        return result.data;
    } 
}