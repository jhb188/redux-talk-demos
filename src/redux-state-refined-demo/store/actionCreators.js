import {
    CREATE_TODO,
    TOGGLE_TODO_COMPLETE,
    UPDATE_NEW_TODO_DESCRIPTION,
} from './constants';

export const createTodo = description => ({
    type: CREATE_TODO,
    description,
});

export const toggleTodoComplete = todoId => ({
    type: TOGGLE_TODO_COMPLETE,
    todoId,
});

export const updateNewTodoDescription = description => ({
    type: UPDATE_NEW_TODO_DESCRIPTION,
    description,
});
