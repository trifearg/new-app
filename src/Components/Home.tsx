import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import gazeta from '../Pictures/gazeta.jpg';

const Home: React.FC = () => (
    <>
        <Container>
            <Row style={{ margin: "15px auto" }}>
                <Col md={5}>
                    <img src={gazeta} alt="gazeta" width={450} />
                </Col>
                <Col md={6}>
                    <h2>Добро пожаловать!</h2>
                    <p>
                        Данный проект является тестовым. Сайт написан с использованием библиотеки React. Для стилизации компонентов использовался фреймворк Boostrap. Чувствуйте себя как дома!:)
                    </p>
                </Col>
            </Row>
        </Container>
    </>
)

export default Home;