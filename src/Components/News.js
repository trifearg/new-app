import React, { useEffect } from 'react';
import { Card, Container, Spinner } from 'react-bootstrap';
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

export function News() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://newsapi.org/v2/everything?language=ru&q=tesla&sortBy=popularity&apiKey=a0d1bff76be44cb5b0f9716537d62bc3")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.articles);
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
                        {items.map((item) => (
                            <Card border="dark" style={{ margin: "10px auto", width: "800px" }}>
                                <Card.Img variant="top" src={item.urlToImage} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.description}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted"><a href={item.url} target="_blank"> {item.url}</a></small>
                                </Card.Footer>
                            </Card>
                        ))}
                    </Container>
                </Styles>
            </>
        )
    }
}