import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { IArticles } from '../interfaces/IArticles'

const Article: React.FC<IArticles> = ({ id, description, title, url, urlToImage, author, publishedAt, handleClick}) => {
    return (
        <>
            <Card style={{ marginTop: "10px", width: "300px" }}>
                <Card.Img variant="top" src={urlToImage} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Link to={`/edit/${id}`}><Button style={author ? { display: 'none' } : {}} variant="outline-secondary">Изменить</Button></Link>
                    <Button variant="outline-danger" style={author ? { display: 'none' } : { marginLeft: "5px" }} onClick={() => handleClick(id)}>Удалить</Button>
                </Card.Body>
                <Card.Footer>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <a rel="noopener noreferrer" href={url} target="_blank">{url}</a>
                        Дата публикации: {publishedAt}
                    </div>
                </Card.Footer>
            </Card>
        </>
    )
}

export default Article;
