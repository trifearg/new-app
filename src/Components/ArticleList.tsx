import React from 'react'
import { Row } from 'react-bootstrap'
import Article from './Article'
import { IArticlesArray } from '../interfaces/IArticles'

const ArticleList: React.FC<IArticlesArray> = ({ articles, handleClick }) => {
    return (
        <Row xs="1">
            {articles.map(articleItem => (
                <Article
                    key={articleItem.title}
                    id={articleItem.id}
                    description={articleItem.description}
                    title={articleItem.title}
                    url={articleItem.url}
                    urlToImage={articleItem.urlToImage}
                    author={articleItem.author}
                    publishedAt={articleItem.publishedAt}
                    handleClick={handleClick}
                />
            ))}
        </Row>
    )
}

export default ArticleList
