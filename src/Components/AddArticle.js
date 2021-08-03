import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import services from '../services';
import { useHistory } from 'react-router';

export default function AddArticle() {
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [urlToImage, setUrlToImage] = useState('');

    const handleSubmit = async () => {
        try {
            if (!title || !description || !url || !urlToImage) {
                alert('Data is required!');
                return;
            }
            const article = {
                title,
                description,
                url,
                urlToImage
            };
            await services.addArticle(article);
            alert('Article added successefully!');
            history.replace('/news');
        } catch(error) {
            console.log(error);
            alert('Add article failed!')
        }
    }

    return (
        <Container style={{ padding: "15px" }}>
            <Row>
                <Col>
                    <Form>
                        <Form.Group>
                            <Form.Label>Оглавление</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter title"
                                onChange={e => setTitle(e.target.value)}
                                value={title}
                                
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Описание</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter description"
                                onChange={e => setDescription(e.target.value)}
                                value={description}
                                
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>URL Новости</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter url"
                                onChange={e => setUrl(e.target.value)}
                                value={url}
                                
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>URL Картинки</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter urlToImage"
                                onChange={e => setUrlToImage(e.target.value)}
                                value={urlToImage}
                                
                            />
                        </Form.Group>
                        <Form.Group>
                            <Button
                                variant="outline-secondary"
                                onClick={handleSubmit}
                            >
                                Добавить
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
