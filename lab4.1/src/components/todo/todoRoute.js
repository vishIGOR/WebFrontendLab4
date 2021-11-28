import TodoList from "./todoList";


function TodoRoute() {
    return (
        <div className="route">
            <div className="content">
                <div className="container-lg">
                    <TodoList></TodoList>
                </div>
            </div>
            <div className="footer">
                <div>Footer</div>
            </div>
        </div>
    )

}


export default TodoRoute;