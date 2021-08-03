import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { useState } from 'react';
import services from '../services';
import Article from './Article';
import ArticlesApi from './ArticlesApi';

const Styles = styled.div`
.container {
    margin: 15px auto;
}
`

interface articleArr {
    id: number
    description: string
    title: string
    url: string
    urlToImage: string
}

const News: React.FC = () => {

    const [articles, setArticles] = useState<articleArr[]>([]);

    const fetchArticles = async () => { 
        try {
            const result = await services.getAllArticles();
            // console.log(result.data);
            setArticles(result.data)
        } catch (error) {
            alert('Failed to fetch articles.');
        }
    }

    useEffect(() => {
        fetchArticles();
    }, [])

    if (!articles) {
        <>
            <Styles>
                <Container>
                    <Row xs="4">
                        <p>Loading articles...</p>
                    </Row>
                </Container>
            </Styles>
        </>
    }
    return (
        <>
            <Styles>
                <Container>
                    <Row xs="1">
                    <ArticlesApi/>
                        {articles.map(articleItem => (
                            <Article
                            key={articleItem.id}
                            id={articleItem.id}
                                description={articleItem.description}
                                title={articleItem.title}
                                url={articleItem.url}
                                urlToImage={articleItem.urlToImage}
                            />
                        ))}
                    </Row>
                </Container>
            </Styles>
        </>
    )
}

export default News;