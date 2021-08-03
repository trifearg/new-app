import React from 'react'
import {Link} from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import services from '../services'

export default function Article({id, description, title, url, urlToImage }) {

    const deleteArticle = async () => {
        try {
            await services.deleteArticle(id);
            alert('Article deleted');
            window.location.reload();
        } catch(error) {
            console.log(error);
            alert('Delete article failed');
        }
    }
    return (
            <Card style={{marginTop: "10px", width: "300px"}}>
                <Card.Img variant="top" src={urlToImage} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Link to={`/edit/${id}`}><Button variant="outline-secondary">Изменить</Button></Link>
                    <Button variant="outline-danger" style={{marginLeft: "5px"}} onClick={deleteArticle}>Удалить</Button>
                </Card.Body>
                <Card.Footer>
                    <a rel="noopener noreferrer" href={url} target="_blank">{url}</a>
                </Card.Footer>
            </Card>
    )
}
