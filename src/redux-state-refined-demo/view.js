import React from 'react';

const Todos = ({
    // action creators
    createTodo,
    toggleTodoComplete,
    updateNewTodoDescription,
    // data from mapStateToProps
    newTodoDescription,
    todos,
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
                                    () => toggleTodoComplete(todo.id)
                                }
                            />
                        </li>
                    )
                )
            }
        </ul>

        <input
            onChange={ e => updateNewTodoDescription(e.target.value) }
            value={ newTodoDescription }
        />

        <button
            onClick={ () => createTodo(newTodoDescription) }
        >
            Add Todo
        </button>
    </div>
);

export default Todos;
