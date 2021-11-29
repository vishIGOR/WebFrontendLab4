import TodoLegend from "./todoLegend";

function TodoRoute() {
    return (
        <div className="d-flex flex-column">
            <div className="content">
                <div className="container-lg">
                    <TodoLegend/>
                    {/* <TodoListWrapper></TodoListWrapper> */}
                </div>
            </div>
            <footer className="footer">
                <div>Footer</div>
            </footer>
        </div>
    )

}


export default TodoRoute;