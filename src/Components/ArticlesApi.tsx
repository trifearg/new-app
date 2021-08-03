import React from 'react';
import { useEffect } from 'react';
import { Card, Container, Spinner, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { useState } from 'react';

const Styles = styled.div`
.container {
    margin: 15px auto;
}
`

const spinnerStyle = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: "75px"
};

interface Props {
    id: number
    description: string
    title: string
    url: string
    urlToImage: string
}

const ArticlesApi: React.FC = () => {
    const [error, setError] = useState<any>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState<Props[]>([]);
    
    useEffect(() => {
        fetch("https://newsapi.org/v2/everything?language=ru&q=tesla&apiKey=a0d1bff76be44cb5b0f9716537d62bc3")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.articles.map(({ source, author, content, ...propertys }: any) => propertys)
                        .map((item: any, index: number) => ({ ...item, id: index }))
                        .splice(0, 5)
                        .sort(function (a: any, b: any) {
                            return new Date(b.publishedAt).valueOf() - new Date(a.publishedAt).valueOf();
                        }));
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div style={spinnerStyle}><Spinner style={spinnerStyle} animation="border" /></div>;
    } else {
        return (
            <>
                <Styles>
                    <Container>
                        <Row xs="1">
                            {items.map((item) => (
                                <Card style={{ marginTop: "10px", width: "300px" }} key={item.id}>
                                    <Card.Img variant="top" src={item.urlToImage} />
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>{item.description}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <a rel="noopener noreferrer" href={item.url} target="_blank">{item.url}</a>
                                    </Card.Footer>
                                </Card>
                            ))}
                        </Row>
                    </Container>
                </Styles>
            </>
        )
    }
}

export default ArticlesApi;
