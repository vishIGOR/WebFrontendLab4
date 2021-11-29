import React from "react";
import { loadTodoListsThunkCreator } from "../../reducers/todo-reducer";
import TodoListWrapper from "./todoListWrapper";
import { connect } from "react-redux";

class MiddleTodoListsComponent extends React.Component {
    componentDidMount() {
        this.props.loadTodoListsThunkCreator();
    }
    render() {
        return (<TodoListWrapper {...this.props} />)
    }
}

function mapStateToProps(state) {
    return { todoLists: state.todoLists }
}

const TodoListsContainer = connect(mapStateToProps, { loadTodoListsThunkCreator })(MiddleTodoListsComponent)

export default TodoListsContainer;