import React, { useEffect } from "react"

const EventList = (props) => {

    const { setState } = props

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data =>
            //console.log(data)
            {
                const fivefirsttodos = data.slice(0, 6)
                setState(state => ({ ...state, todos: fivefirsttodos }))
            })
    }, []);

    //console.log(props.todos)

    const renderTodos = () => {
        return props.todos.map(todo => {
            return (<li className="todos-widget-list-item" key={todo.id}>
                {todo.title}
            </li>
            );
        });
    };

    return (
        <div>
            <div className="eventlist-widget">
                <ul className="todos-widget-list">
                    {renderTodos()}
                </ul>

            </div>
        </div>
    )
}


export default EventList