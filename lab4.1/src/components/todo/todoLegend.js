import React from "react";
import { Card, Badge, Row } from "react-bootstrap";
import CreateTodoItem from "./createTodoItem.js";
import CreateTodoList from "./createTodoList.js";



class TodoLegend extends React.Component {
    render() {
        if (this.props.todoPage.todoLists === "test") {
            return (<div>Легенда ToDo подгружается</div>)
        }
        return (
            <div className="col-sm-12 mt-4">
                <Card>
                    <Card.Body className="justify-content-start ">
                        <h5>Приоритеты элементов ToDo:</h5>
                        <div className="justify-content-start flex-row d-flex text-uppercase container-fluid ">
                            <Row>
                                <Badge bg="light" text="dark" className="col-auto"><h6>обычный</h6></Badge>
                                <Badge bg="warning" text="dark" className="col-auto"><h6>важный</h6></Badge>
                                <Badge bg="danger" text="dark" className="col-auto"><h6>критический</h6></Badge>
                            </Row>
                        </div>
                    </Card.Body>
                </Card>

                <CreateTodoList />
                <CreateTodoItem todoLists={this.props.todoPage.todoLists} />
            </div>
        )
    }

}

export default TodoLegend;