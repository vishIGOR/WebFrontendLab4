import React from "react";
import { Card, Row, Badge, Button, Form } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { createTodoListActionCreator } from "../../reducers/todo-reducer";

class TodoLegend extends React.Component {
    createListListener() {
        // useDispatch(createTodoListActionCreator(this.props.createTodoList.name));
    }
    render() {
        if (this.props.todoPage.todoLists === "test") {
            return (<div>Легенда ToDo подгружается</div>)
        }
        return (
            <div className="col-sm-12 mt-4">
                <Card>
                    <Card.Body className="justify-content-start ">
                        <h5>Приоритеты элементов ToDo:</h5>
                        <div className="justify-content-start flex-row d-flex ">
                            <Badge bg="light" text="dark"><h6>обычный</h6></Badge>
                            <Badge bg="warning" text="dark"><h6>важный</h6></Badge>
                            <Badge bg="danger" text="dark"><h6>критический</h6></Badge>
                        </div>
                    </Card.Body>
                </Card>

                <Card className="mt-4">
                    <Card.Header>
                        <h5 className="text-uppercase fw-normal">Создать список todo</h5>
                    </Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="create-list-name">
                                <Form.Label>Название:</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Form>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="secondary">Очистить</Button>{" "}
                        <Button variant="success" onClick={this.createListListener}>Создать</Button>
                    </Card.Footer>
                </Card>

                <Card className="mt-4">
                    <Card.Header>
                        <h5 className="text-uppercase fw-normal">Создать элемент todo</h5>
                    </Card.Header>
                    <Card.Body className="container">
                        <Row>
                            <Form.Group className="col-12 mb-3" controlId="create-element-name">
                                <Form.Label>Заголовок</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group className="col-12 col-md-6 mb-3" controlId="create-element-list">
                                <Form.Label>Список</Form.Label>
                                <Form.Select>
                                    {this.props.todoPage.todoLists.map((value) => {
                                        return <option value={value.id} key={value.id}>{value.name}</option>
                                    })}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="col-12 col-md-6 mb-3" controlId="create-element-priority">
                                <Form.Label>Приоритет</Form.Label>
                                <Form.Select>
                                    <option value="simple">Обычный</option>
                                    <option value="important">Важный</option>
                                    <option value="critical">Критический</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="col-12 mb-3" controlId="create-element-desciption">
                                <Form.Label>Описание</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Row>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="secondary">Очистить</Button>{" "}
                        <Button variant="success">Создать</Button>
                    </Card.Footer>
                </Card>
            </div>
        )
    }

}

export default TodoLegend;