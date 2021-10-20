import service from '../services'
import { validateURL, validateDate } from '../regexp/Regexp'
import {IArticlesActions} from '../interfaces/IArticles'

export default class Actions {
    static DeleteArticle = async (id: string) => {
        try {
            await service.deleteArticle(id);
            return 'Новость удалена';
        } catch (error) {
            return 'Удаление новости произошло с ошибкой';
        }
    }

    static AddArticle = async ({ title, description, url, urlToImage, publishedAt }: IArticlesActions) => {
        try {
            if (!title || !description || !url || !urlToImage || !publishedAt) {
                return 'Данные не заполнены!';
            }
            if (!(validateURL.test(url))) {
                return 'Ошибка в URL!';
            }
            if (!(validateURL.test(urlToImage))) {
                return 'Ошибка в URL картинки!';
            }
            if (!(validateDate).test(publishedAt)) {
                return 'Ошибка в дате!';
            }
            const article: IArticlesActions = {
                title,
                description,
                url,
                urlToImage,
                publishedAt
            };
            await service.addArticle(article);
            return 'Новость успешно создана!';
        } catch (error) {
            return 'Создание новости произошло с ошибкой!';
        }
    }

    static LoadArticle = async (id: string) => {
        try {
            const resp = await service.editArticle(id);
            const article = resp.data;
            return article;
        } catch (error) {
            return "Получение новости произошло с ошибкой";
        }
    }

    static UpdateArticle = async ({ title, description, url, urlToImage, publishedAt }: IArticlesActions, id: string) => {
        try {
            if (!title || !description || !url || !urlToImage || !publishedAt) {
                return 'Данные не заполнены!';
            }
            if (!(validateURL.test(url))) {
                return 'Ошибка в URL!';
            }
            if (!(validateURL.test(urlToImage))) {
                return 'Ошибка в URL картинки!';
            }
            if (!(validateDate).test(publishedAt)) {
                return 'Ошибка в дате!';
            }
            const article: IArticlesActions = {
                title,
                description,
                url,
                urlToImage,
                publishedAt
            };
            await service.updateArticle(article, id);
            return 'Новость успешно обнавлена!';
        } catch (error) {
            return 'Обновление новости произошло с ошибкой!'
        }
    }
}