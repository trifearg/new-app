import {useMemo} from 'react'
import {IArticles} from '../interfaces/IArticles'

export const useSortedAscArticles = (articles: IArticles[]) => {
    const sortByDate = useMemo(() => {
        const tempArticles = [...articles]
        const sortArticles = tempArticles.sort((a, b) => new Date(b.publishedAt).valueOf() - new Date(a.publishedAt).valueOf())
        return sortArticles
    }, [articles])

    return sortByDate
}

export const useSortedDescArticles = (articles: IArticles[]) => {
    const reverseSortByDate = useMemo(() => {
        const tempArticles = [...articles]
        const sortArticles = tempArticles.sort((a, b) => new Date(a.publishedAt).valueOf() - new Date(b.publishedAt).valueOf())
        return sortArticles
    }, [articles])

    return reverseSortByDate
}