import { combineReducers } from 'redux';
import newTodoReducer from './newTodo/reducer';
import todosReducer from './todos/reducer';

const rootReducer = combineReducers({
    newTodo: newTodoReducer,
    todos: todosReducer,
});

export default rootReducer;
