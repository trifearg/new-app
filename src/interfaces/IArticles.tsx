export interface IArticles {
    id: string
    description: string
    title: string
    url: string
    urlToImage: string
    publishedAt: string
    author?: string
    handleClick: (id: string) => Promise<void>
}

export interface IArticlesActions {
    title: string
    description: string
    url: string
    urlToImage: string
    publishedAt: string
}

export interface IArticlesArray {
    articles: IArticles[]
    handleClick: (id: string) => Promise<void>
}

export interface IModal {
    isOpen: boolean
    resultModal: string
    closeModal: () => void
}