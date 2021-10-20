import React, { useEffect } from 'react';
import { Container, Spinner, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { useState } from 'react';
import ArticlesApi from '../API/ArticlesApi';
import ArticleList from './ArticleList';
import { useSortedAscArticles, useSortedDescArticles } from '../hooks/useSort';
import { IArticles } from '../interfaces/IArticles';
import ShowModal from './ShowModal';
import Actions from '../actions/Actions';

const spinnerStyle = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '75px'
}

const errorStyle = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '75px',
    fontSize: '24px'
}

const Styles = styled.div`
.container {
    margin: 15px auto;
}
`
const News: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [resultModal, setResultModal] = useState<string>('');
    const [articles, setArticles] = useState<IArticles[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<string>('');
    const sortByDate = useSortedAscArticles(articles);
    const reverseSortByDate = useSortedDescArticles(articles);

    useEffect(() => {
        (async () => {
            try {
                const resFake = await ArticlesApi.getArticlesFromFakeBack()
                const resApi = await ArticlesApi.getArticlesFromApiBack()
                const resArticles = [...resFake, ...resApi.articles.slice(0, 3)].map(article => {
                    return {
                        ...article,
                        publishedAt: article.publishedAt.slice(0, -1).split('T').join(', ')
                        //publishedAt: new Date(article.publishedAt).toLocaleString()
                    }
                })
                setIsLoading(false)
                setArticles(resArticles)
            } catch (error) {
                setIsError(error.message)
            }
        })()
    }, [])

    const handleClick = async (id: string) => {
        try {
            setArticles(prev => prev.filter(obj => obj.id !== id))
            const result = await Actions.DeleteArticle(id) || ''
            setIsOpen(!isOpen);
            setResultModal(result)
        } catch (error) {
            setIsError(error.message)
        }
    }

    const closeModal = () => {
        setIsOpen(!isOpen);
    }

    if (isError) {
        return <div style={errorStyle}>Error: {isError}</div>;
    } else if (isLoading) {
        return <div style={spinnerStyle}><Spinner style={spinnerStyle} animation="border" /></div>;
    } else {
        return (
            <>
                <ShowModal isOpen={isOpen} resultModal={resultModal} closeModal={closeModal} />
                <Styles>
                    <Container>
                        <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                            <Button variant="outline-secondary" style={{ marginRight: 10 }} onClick={() => setArticles(sortByDate)}>Сортировка по дате(ASC)</Button>
                            <Button variant="outline-secondary" onClick={() => setArticles(reverseSortByDate)}>Сортировка по дате(DESC)</Button>
                        </div>
                        <ArticleList articles={articles} handleClick={handleClick} />
                    </Container>
                </Styles>
            </>
        )
    }
}


export default News;