import React from 'react';

const Todos = ({
    createTodo,
    dispatch,
    newTodoDescription,
    todos,
    toggleTodoComplete,
    updateNewTodoDescription,
}) => (
    <div>
        <ul>
            {
                todos.map(
                    todo => (
                        <li key={ todo.id }>
                            { todo.description }

                            <input
                                type="checkbox"
                                checked={ todo.done }
                                onClick={
                                    () => dispatch(toggleTodoComplete(todo.id))
                                }
                            />
                        </li>
                    )
                )
            }
        </ul>

        <input
            onChange={ e => dispatch(updateNewTodoDescription(e.target.value)) }
            value={ newTodoDescription }
        />

        <button
            onClick={
                () => dispatch(
                    createTodo(newTodoDescription)
                )
            }
        >
            Add Todo
        </button>
    </div>
);

export default Todos;
