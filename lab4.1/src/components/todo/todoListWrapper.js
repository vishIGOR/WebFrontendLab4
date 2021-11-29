import React from "react";

class TodoListWrapper extends React.Component {
    render() {
        return (
            <div className="mt-4">
                <div className="todo-deck">
                    {/* {
                        this.props.todoLists.lists.map((value) => {
                            return <NewsItem title={value.title} content={value.content} likes={value.serviceInfo.likes} tags={value.tags} date={value.date} id={value.id} key={value.id} />
                        })
                    } */}
                </div>
            </div>
        )
    }
}


export default TodoListWrapper;