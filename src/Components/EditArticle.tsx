import React, { useState, useEffect } from 'react';
import { RouteComponentProps, useParams } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Actions from '../actions/Actions'
import ShowModal from '../Components/ShowModal'

const EditArticle: React.FC<RouteComponentProps> = () => {
    const { id } = useParams<{ id: string }>();
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [url, setUrl] = useState<string>('');
    const [urlToImage, setUrlToImage] = useState<string>('');
    const [publishedAt, setPublishedAt] = useState<string>('');
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [resultModal, setResultModal] = useState<string>('');

    useEffect(() => {
        const loadArticle = async () => {
            const loadData = await Actions.LoadArticle(id);
            setTitle(loadData.title)
            setDescription(loadData.description)
            setUrl(loadData.url)
            setUrlToImage(loadData.urlToImage)
            setPublishedAt(loadData.publishedAt)
        }
        loadArticle();
    }, [setTitle, setDescription, setUrl, setUrlToImage, id]);

    const handleSubmit = async () => {
        const result = await Actions.UpdateArticle({ title, description, url, urlToImage, publishedAt }, id) || ''
        setIsOpen(!isOpen)
        setResultModal(result)
    }

    const closeModal =  () => {
        setIsOpen(!isOpen)
    }

    return (
        <Container style={{ padding: "15px" }}>
            <ShowModal isOpen={isOpen} resultModal={resultModal} closeModal={closeModal}/>
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
                            <Form.Label>Дата публикации</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="YYYY-MM-DDTHH-MM-SSZ"
                                onChange={e => setPublishedAt(e.target.value)}
                                value={publishedAt}

                            />
                        </Form.Group>
                        <Form.Group>
                            <Button
                                variant="outline-secondary"
                                onClick={handleSubmit}
                            >
                                Изменить
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default EditArticle;
