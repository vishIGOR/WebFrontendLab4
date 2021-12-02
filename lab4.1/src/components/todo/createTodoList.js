import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewTodoListActionCreator, createNewTodoListThunkCreator } from "../../reducers/todo-reducer";
import { Card, Form, Button } from "react-bootstrap";

function CreateTodoList() {
    const nameRef = React.createRef();

    var state = useSelector((state) => state.todoPage.createTodoList);
    const dispatch = useDispatch();

    const onFormChange = () => {
        dispatch(createNewTodoListActionCreator(nameRef.current.value));
    }

    const clearFormListener = () => {
        dispatch(createNewTodoListActionCreator(""));
    }

    const createListListener = () => {
        dispatch(createNewTodoListThunkCreator(state.name));
    }

    return (

        <Card className="mt-4">
            <Form>
                <Card.Header>
                    <h5 className="text-uppercase fw-normal">Создать список todo</h5>
                </Card.Header>
                <Card.Body>
                    <Form.Group className="mb-3" controlId="create-list-name">
                        <Form.Label>Название:</Form.Label>
                        <Form.Control required type="text" value={state.name} onChange={onFormChange} ref={nameRef} />
                    </Form.Group>
                </Card.Body>
                <Card.Footer>
                    <Button variant="secondary" onClick={clearFormListener}>Очистить</Button>{" "}
                    <Button variant="success" type="submit" onClick={createListListener} >Создать</Button>
                </Card.Footer>
            </Form>
        </Card>

    )
}

export default CreateTodoList;