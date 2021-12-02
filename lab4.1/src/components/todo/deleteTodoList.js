import React from "react";
import {Button} from "react-bootstrap";
import { deleteTodoListThunkCreator } from "../../reducers/todo-reducer";
import { useDispatch } from "react-redux";

function DeleteTodoList(props) {
    const dispatch = useDispatch();
    const deleteListListener = () =>{
        dispatch(deleteTodoListThunkCreator(props.id));
    }

    return (
        <Button variant="danger" id="delete-item" onClick={deleteListListener}>
            <i className="fas fa-trash-alt">
            </i> Удалить список
        </Button>
    )
}

export default DeleteTodoList;