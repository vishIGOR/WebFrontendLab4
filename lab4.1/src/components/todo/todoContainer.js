import { connect } from "react-redux";
import React from "react";
import TodoListWrapper from "./todoListWrapper";
import { loadTodoListsThunkCreator } from "../../reducers/todo-reducer";

class MiddleTodoListsComponent extends React.Component {
    componentDidMount() {
        this.props.loadTodoListsThunkCreator();
        console.log(this.props);
    }
    render() {
        return (<TodoListWrapper {...this.props} />)
    }
}

function mapStateToProps(state) {
    return { todoPage: state.todoPage }
}

const TodoListsContainer = connect(mapStateToProps, { loadTodoListsThunkCreator })(MiddleTodoListsComponent)

export default TodoListsContainer;