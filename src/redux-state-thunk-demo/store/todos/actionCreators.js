import { TOGGLE_TODO_COMPLETE } from './constants';

export const toggleTodoComplete = todoId => ({
    type: TOGGLE_TODO_COMPLETE,
    todoId,
});
