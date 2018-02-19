import React from 'react';
import { connect, Provider } from 'react-redux';
import store from './store';
import {
    createTodo,
    toggleTodoComplete,
    updateNewTodoDescription,
} from './store/actionCreators';
import Todos from './view';

const mapStateToProps = state => ({
    todos: state.todos,
    newTodoDescription: state.newTodoDescription,
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
