import React from "react";
import { Tabs, Tab, Row, Card } from "react-bootstrap";
import "./../../App.css";
import TodoItem from "./todoItem";

class TodoListWrapper extends React.Component {
    render() {
        // this.pseudoProps = [
        //     {
        //         "id": 0,
        //         "name": "хардкод 1",
        //         "ownerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        //         "createDateTime": "2021-11-30T16:21:12.857Z",
        //         "items": [
        //             {
        //                 "id": 0,
        //                 "name": "name 1",
        //                 "description": "string 1",
        //                 "priority": 0,
        //                 "isDone": false,
        //                 "createDateTime": "2021-11-30T16:21:12.857Z"
        //             },
        //             {
        //                 "id": 1,
        //                 "name": "name 2",
        //                 "description": "string 2",
        //                 "priority": 1,
        //                 "isDone": false,
        //                 "createDateTime": "2021-11-30T16:21:12.857Z"
        //             }
        //         ]
        //     },
        //     {
        //         "id": 1,
        //         "name": "хардкод 2",
        //         "ownerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        //         "createDateTime": "2021-11-30T16:21:12.857Z",
        //         "items": [
        //             {
        //                 "id": 0,
        //                 "name": "name 3",
        //                 "description": "string 3",
        //                 "priority": 2,
        //                 "isDone": false,
        //                 "createDateTime": "2021-11-30T16:21:12.857Z"
        //             },
        //             {
        //                 "id": 1,
        //                 "name": "name 4",
        //                 "description": "string 4",
        //                 "priority": 1,
        //                 "isDone": false,
        //                 "createDateTime": "2021-11-30T16:21:12.857Z"
        //             }
        //         ]
        //     }

        // ]
        // console.log(this.props);
        if (this.props.todoPage.todoLists === "test") {
            return <div>ToDo листы подгружаются...</div>
        }
        return (
            <Card className="mt-4">
                <Tabs defaultActiveKey={this.props.todoPage.todoLists[0].id} id="todo-tabs" className="nav-justified ps-3 mt-3 pe-3" >
                    {
                        this.props.todoPage.todoLists.map((value) => {
                            return <Tab tabClassName="color-black" eventKey={value.id} title={value.name} key={value.id}>
                                <Card.Body className="container">
                                    <div className="col-sm-12 mt-4 todo-deck">
                                        <Row>
                                            {value.items.map((item) => {
                                                console.log(item);
                                                return <TodoItem id={item.id} name={item.name} description={item.description} priority={item.priority} isDone={item.isDone} createDateTime={item.createDateTime} listId={value.id} key={item.id} />
                                            })}
                                        </Row>
                                    </div>
                                </Card.Body>
                            </Tab>
                        })
                    }
                </Tabs>
            </Card>

        )
    }
}


export default TodoListWrapper;