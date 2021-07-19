import React, { useState, useContext } from "react";
import { Form, Button, Card } from "react-bootstrap";
import "../Styles/Login.css";
import { authContext } from "../Contexts/AuthContext";

export default function Login({ history }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const { setAuthData } = useContext(authContext);

    const handleSubmit = e => {
        e.preventDefault();
        setAuthData(email);
        history.replace('/perinfo');
    }

    return (
        <>
            <Card style={{ width: "400px", margin: "25px auto" }} border="dark">
                <div className="Login">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group size="sm" controlId="user">
                            <Form.Label>Почта</Form.Label>
                            <Form.Control
                                autoFocus
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="sm" controlId="password">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Button block size="sm" type="submit" variant="outline-secondary">Войти</Button>
                    </Form>
                </div>
            </Card>
        </>
    );
}

