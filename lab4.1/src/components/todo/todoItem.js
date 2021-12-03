import { Row, Col, Button, ButtonGroup, Modal, Container, Form } from "react-bootstrap";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./../../App.css";
import { setTodoItemAsCheckedThunkCreator, deleteTodoItemThunkCreator, updateTodoItemActionCreator, updateTodoItemThunkCreator } from "../../reducers/todo-reducer";

function TodoItem(props) {
    const nameRef = React.createRef();
    const descriptionRef = React.createRef();
    const priorityRef = React.createRef();

    var state = useSelector((state) => state.todoPage.updateTodoItem);
    const dispatch = useDispatch();

    const setTodoItemAsCheckedListener = () => {
        dispatch(setTodoItemAsCheckedThunkCreator(props.id, props.ownerId));
    }

    const deleteTodoItemListener = () => {
        dispatch(deleteTodoItemThunkCreator(props.id, props.ownerId));
    }

    const [show, setShow] = useState(false);

    const onFormChange = () => {
        dispatch(updateTodoItemActionCreator(Number(props.id), nameRef.current.value, descriptionRef.current.value, Number(priorityRef.current.value), Number(props.listId)));
    }

    const updateTodoListListener = () => {
        if (!(state.name === "" || state.description === "")) {
            dispatch(updateTodoItemThunkCreator(state.id, state.name, state.description, state.priority, state.listId));
        }

        setShow(false);
    }

    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => {
        dispatch(updateTodoItemActionCreator(Number(props.id), props.name, props.description, Number(props.priority), Number(props.listId)));
        setShow(true);
    };

    let priorityClassName;
    switch (props.priority) {
        case 0:
            priorityClassName = "bg-light pl-0 pr-0";
            break;
        case 1:
            priorityClassName = "bg-warning pl-0 pr-0";
            break;
        case 2:
            priorityClassName = "bg-danger pl-0 pr-0";
            break;
        default:
            priorityClassName = "bg-dark pl-0 pr-0";
            break;
    }
    if (props.isDone === false) {
        return (

            <div>
                <Col className="card w-100" xs={12}>
                    <Row className="no-gutters">
                        <Col className={priorityClassName}
                            style={{ maxWidth: 12 + 'px', padding: "0 0 0 0", margin: "0 0 0 0" }}>{" "}</Col>
                        <Col className="ps-0">
                            <div className="card-body container-fluid ps-0">
                                <div className="row">
                                    <div className="col-md-9">
                                        <div className="container ">
                                            <div className="row align-items-center">
                                                <div className="col-md-auto ">
                                                    <h4 className="text-uppercase element-title">{props.name}</h4>
                                                </div>
                                                <div className="col-md">
                                                    <h4 className="text text-muted">
                                                        {props.createDateTime.substr(0, 10)}
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col text element-text">
                                                    {props.description}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-md-3 d-flex justify-content-end align-items-center">
                                        <ButtonGroup>
                                            <Button variant="outline-success"><i
                                                className="fas fa-check" onClick={setTodoItemAsCheckedListener}></i></Button>
                                            <Button variant="outline-warning"><i
                                                className="fas fa-pen" onClick={handleShow}></i></Button>
                                            <Button variant="outline-danger" onClick={deleteTodoItemListener}><i
                                                className="fas fa-trash-alt"></i></Button>
                                        </ButtonGroup>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Modal show={show} onHide={handleClose} dialogClassName="modal-lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Редактирование элемента ToDo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>

                            <Row>
                                <div className="col-lg-8">
                                    <Form.Group controlId="update-element-name">
                                        <Form.Label>Заголовок</Form.Label>
                                        <Form.Control required type="text" value={state.name} onChange={onFormChange} ref={nameRef} />
                                    </Form.Group>
                                </div>

                                <div className="col-lg-4">
                                    <Form.Group controlId="update-element-priority">
                                        <Form.Label>Приоритет</Form.Label>
                                        <Form.Select value={state.priority} ref={priorityRef} onChange={onFormChange}>
                                            <option value="0">Обычный</option>
                                            <option value="1">Важный</option>
                                            <option value="2">Критический</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>

                                <div className="col-12">
                                    <Form.Group controlId="update-element-desciption">
                                        <Form.Label>Описание</Form.Label>
                                        <Form.Control required as="textarea" rows={3} value={state.description} onChange={onFormChange} ref={descriptionRef} />
                                    </Form.Group>
                                </div>
                            </Row>

                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Отмена
                        </Button>
                        <Button variant="success" onClick={updateTodoListListener}>
                            Сохранить изменения
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }

    return (
        <div>
            <Col className="card w-100" xs={12} >
                <Row className="no-gutters">
                    <Col className={priorityClassName}
                        style={{ maxWidth: 12 + 'px', padding: "0 0 0 0", margin: "0 0 0 0" }}>{" "}</Col>
                    <Col className="ps-0 ">
                        <div className="card-body container-fluid ps-0  ended-task">
                            <div className="row">
                                <div className="col-md-9">
                                    <div className="container ">
                                        <div className="row align-items-center">
                                            <div className="col-md-auto ">
                                                <h4 className="text-uppercase element-title">{props.name}</h4>
                                            </div>
                                            <div className="col-md">
                                                <h4 className="text text-muted">
                                                    {props.createDateTime.substr(0, 10)}
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col text element-text">
                                                {props.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-md-3 d-flex justify-content-end align-items-center">

                                    <Button variant=""><i
                                        className="ended-task fas fa-check fa-3x">
                                    </i></Button>

                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </div>
    )
}

export default TodoItem;