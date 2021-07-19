import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ns from '../Pictures/ns.jpg'
import gazeta from '../Pictures/gazeta.jpg'

export const Home = () => (
    <>
        <Container style={{ marginRight: '0', marginTop: '15px' }}>
            <Row>
                <Col md={5}>
                    <img src={gazeta} width={450} />
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