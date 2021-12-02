import TodoListsContainer from "./todoContainer";

function TodoRoute() {
    return (
        <div className="d-flex flex-column">
            <div className="content">
                <div className="container-xl">
                    <TodoListsContainer></TodoListsContainer>
                </div>
            </div>
            <footer className="footer">
                <div>Footer</div>
            </footer>
        </div>
    )

}


export default TodoRoute;