import { connect } from "react-redux";
import React from "react";
import TodoListWrapper from "./todoListWrapper";
import { loadTodoListsThunkCreator } from "../../reducers/todo-reducer";
import TodoLegend from "./todoLegend";

class MiddleTodoListsComponent extends React.Component {
    componentDidMount() {
        this.props.loadTodoListsThunkCreator();
    }
    render() {
        return (<div>
            <TodoLegend {...this.props}/>
            <TodoListWrapper {...this.props} />
        </div>
        )
    }
}

function mapStateToProps(state) {
    return { todoPage: state.todoPage }
}

const TodoListsContainer = connect(mapStateToProps, { loadTodoListsThunkCreator })(MiddleTodoListsComponent)

export default TodoListsContainer;