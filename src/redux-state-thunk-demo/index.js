import React from 'react';
import { connect, Provider } from 'react-redux';
import store from './store';
import { toggleTodoComplete } from './store/todos/actionCreators';
import {
    createTodo,
    updateNewTodoDescription,
} from './store/newTodo/actionCreators';
import Todos from './view';

const mapStateToProps = state => ({
    isCreatingTodo: state.newTodo.isCreating,
    todos: state.todos,
    newTodoDescription: state.newTodo.description,
});

const mapDispatchToProps = {
    createTodo,
    toggleTodoComplete,
    updateNewTodoDescription,
};

const ReduxConnectedTodos = connect(
    mapStateToProps,
    mapDispatchToProps
)(Todos);

export default () => (
    <Provider store={ store }>
        <ReduxConnectedTodos />
    </Provider>
);
