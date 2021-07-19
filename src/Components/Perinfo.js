import React, { useContext } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { authContext } from "../Contexts/AuthContext";

const Perinfo = () => {
    const { setAuthData, auth } = useContext(authContext);
    const onLogOut = () => {
        setAuthData(null);
    } //clearing the context
    return (
        <>
            <Card border="dark" style={{ width: "350px", height: "275px", margin: "25px auto", padding: "5px" }}>
                <Container>
                    <Row>
                        <Col><p>Почта: </p></Col>
                        <Col>{auth.data}</Col>
                    </Row>
                    <Row>
                        <Col><p>Имя: </p></Col>
                        <Col>Михаил</Col>
                    </Row>
                    <Row>
                        <Col><p>Фамилия: </p></Col>
                        <Col><p>Дубровский</p></Col>
                    </Row>
                    <Row>
                        <Col><p>Телефон: </p></Col>
                        <Col><p>+88004443332</p></Col>
                    </Row>
                    <Row>
                        <Col><p>Город: </p></Col>
                        <Col><p>Самара</p></Col>
                    </Row>
                    <Button variant="secondary" type="button" className="w-100 mt-3" onClick={onLogOut}>Выйти</Button>
                </Container>
            </Card>
        </>
    );
};

export default Perinfo;