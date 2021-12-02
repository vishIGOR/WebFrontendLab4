import React from "react";
import { Tabs, Tab, Row, Card } from "react-bootstrap";
import "./../../App.css";
import DeleteTodoList from "./deleteTodoList";
import TodoItem from "./todoItem";
// import TodoList from "./todoList";


class TodoListWrapper extends React.Component {
    render() {

        if (this.props.todoPage.todoLists === "test") {
            return <div>ToDo листы подгружаются...</div>
        }

        return (
            <Card className="mt-4">
                <Tabs defaultActiveKey={this.props.todoPage.todoLists[0].id} id="todo-tabs" className="card-header nav-justified flex-column flex-md-row ps-3 pe-3 pb-0" >
                    {
                        this.props.todoPage.todoLists.map((value) => {
                            // return <TodoList id={value.id} name={value.name} ownerId={value.ownerId} items={value.items} key={value.id}/>
                            return <Tab tabClassName="color-black" eventKey={value.id} title={value.name} key={value.id}>
                                <Card.Body className="container-fluid">
                                    <Row>
                                        <div className="row justify-content-between">
                                            <h2 className="col ps-3">{value.name}</h2>
                                            <div className="col-sm-auto d-flex align-items-center pe-0">
                                                <DeleteTodoList id={value.id}/>
                                            </div>

                                        </div>
                                    </Row>
                                    <div className="col-sm-12 mt-4 todo-deck container-fluid ps-3 pe-3">
                                        <Row>
                                            {value.items.map((item) => {
                                                return <TodoItem id={item.id} name={item.name} description={item.description} priority={item.priority} ownerId={value.ownerId} isDone={item.isDone} createDateTime={item.createDateTime} listId={value.id} key={item.id} />
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