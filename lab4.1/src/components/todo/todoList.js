import { Card, Row, Col, Container } from "react-bootstrap";
import TodoElement from "./todoItem";
import React from "react";

class TodoList extends React.Component {
    render() {
        return (
            <Container>
                <Row >
                    <TodoElement />

                    <TodoElement />
                </Row>
            </Container>
        );
    }
}

export default TodoList;