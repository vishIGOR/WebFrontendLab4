import { Card, Row, Tab, Button } from "react-bootstrap";
import TodoItem from "./todoItem";
import React from "react";
import "./../../App.css";

function TodoList(props) {

    console.log(props.ownerid);
    return (
        <Tab tabClassName="color-black" eventKey={props.id} title={props.name}>
            <Card.Body className="container">
                <Row>
                    <div className="row justify-content-between">
                        <h2 className="col ps-3">{props.name}</h2>
                        <div className="col-2 col-lg-auto d-flex align-items-center pe-0">
                            <Button variant="danger" id="delete-item" ><i className="fas fa-trash-alt">
                            </i> Удалить список</Button>
                        </div>

                    </div>
                </Row>
                <div className="col-sm-12 mt-4 todo-deck ps-3 pe-3">
                    <Row>
                        {props.items.map((item) => {
                            return <TodoItem id={item.id} name={item.name} description={item.description} priority={item.priority} isDone={item.isDone} createDateTime={item.createDateTime} listId={props.id} key={item.id} />
                        })}
                    </Row>
                </div>
            </Card.Body>
        </Tab>
    )

}

export default TodoList;