import React, { Component } from 'react';

export default class Todos extends Component {
    state = {
        todos: [],
        newTodoDescription: '',
    }

    createTodo = () => this.setState({
        todos: [
            ...this.state.todos,
            {
                id: this.state.todos.length + 1,
                description: this.state.newTodoDescription,
                done: false,
            },
        ],
        newTodoDescription: '',
    })

    toggleTodoComplete = todoId => this.setState({
        todos: this.state.todos.map(
            todo => todo.id === todoId
                ? { ...todo, done: !todo.done }
                : todo
        )
    })

    updateNewTodoDescription = e => this.setState({
        newTodoDescription: e.target.value || '',
    })

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.todos.map(
                            todo => (
                                <li key={ todo.id }>
                                    { todo.description }

                                    <input
                                        type="checkbox"
                                        checked={ todo.done }
                                        onClick={
                                            () => this.toggleTodoComplete(todo.id)
                                        }
                                    />
                                </li>
                            )
                        )
                    }
                </ul>

                <input
                    onChange={ this.updateNewTodoDescription }
                    value={ this.state.newTodoDescription }
                />
                <button onClick={ this.createTodo }>
                    Add Todo
                </button>
            </div>
        )
    }
}
