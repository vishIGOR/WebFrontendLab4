import React from "react";
import { Card, Row, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createNewTodoItemActionCreator, createNewTodoItemThunkCreator } from "../../reducers/todo-reducer";

function CreateTodoItem(props) {
    const nameRef = React.createRef();
    const descriptionRef = React.createRef();
    const priorityRef = React.createRef();
    const listIdRef = React.createRef();

    var state = useSelector((state) => state.todoPage.createTodoItem);
    const dispatch = useDispatch();

    const onFormChange = () => {
        dispatch(createNewTodoItemActionCreator(nameRef.current.value, descriptionRef.current.value, Number(priorityRef.current.value), Number(listIdRef.current.value)));
    }

    const clearFormListener = () => {
        dispatch(createNewTodoItemActionCreator("", "", 0, 0));
    }

    const createTodoItemListener = () => {
        if (!(state.name === "" || state.description === "")) {
            dispatch(createNewTodoItemThunkCreator(state.name, state.description, state.priority, state.listId));
        }

    }

    return (
        <Card className="mt-4">
            <Form>
                <Card.Header>
                    <h5 className="text-uppercase fw-normal">Создать элемент todo</h5>
                </Card.Header>
                <Card.Body className="container-fluid">
                    <Row>
                        <Form.Group className="col-12 mb-3" controlId="create-element-name">
                            <Form.Label>Заголовок</Form.Label>
                            <Form.Control required type="text" value={state.name} onChange={onFormChange} ref={nameRef} />
                        </Form.Group>
                        <Form.Group className="col-12 col-md-6 mb-3" controlId="create-element-list">
                            <Form.Label>Список</Form.Label>
                            <Form.Select value={state.listId} ref={listIdRef} onChange={onFormChange}>
                                {props.todoLists.map((value) => {
                                    return <option value={value.id} key={value.id}>{value.name}</option>
                                })}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="col-12 col-md-6 mb-3" controlId="create-element-priority">
                            <Form.Label>Приоритет</Form.Label>
                            <Form.Select value={state.priority} ref={priorityRef} onChange={onFormChange}>
                                <option value="0">Обычный</option>
                                <option value="1">Важный</option>
                                <option value="2">Критический</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="col-12 mb-3" controlId="create-element-desciption">
                            <Form.Label>Описание</Form.Label>
                            <Form.Control required as="textarea" rows={3} value={state.description} onChange={onFormChange} ref={descriptionRef} />
                        </Form.Group>
                    </Row>
                </Card.Body>
                <Card.Footer>
                    <Button variant="secondary" onClick={clearFormListener}>Очистить</Button>{" "}
                    <Button variant="success" onClick={createTodoItemListener}>Создать</Button>
                </Card.Footer>
            </Form>
        </Card>
    )
}

export default CreateTodoItem;