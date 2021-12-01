import TodoListsContainer from "./todoContainer";
import TodoLegend from "./todoLegend";

function TodoRoute() {
    return (
        <div className="d-flex flex-column">
            <div className="content">
                <div className="container-lg">
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