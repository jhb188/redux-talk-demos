import React from 'react';
import { connect, Provider } from 'react-redux';
import store, {
    createTodo,
    toggleTodoComplete,
    updateNewTodoDescription,
} from './store';
import Todos from './view';

const mapStateToProps = state => ({
    todos: state.todos,
    newTodoDescription: state.newTodoDescription,
    createTodo,
    toggleTodoComplete,
    updateNewTodoDescription,
});

// connectTodoState is a higher-order component
const connectTodoState = connect(mapStateToProps);

const ReduxConnectedTodos = connectTodoState(Todos);

// more concisely,
// connect(mapStateToProps)(Todos)

export default () => (
    <Provider store={ store }>
        <ReduxConnectedTodos />
    </Provider>
);
