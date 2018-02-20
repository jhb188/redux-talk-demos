import {
    CREATE_TODO_SUCCESS,
} from '../newTodo/constants';
import {
    TOGGLE_TODO_COMPLETE,
} from './constants';

const initialState = [];

const todosReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case CREATE_TODO_SUCCESS:
            return [
                ...state,
                {
                    id: state.length + 1,
                    description: action.description,
                    done: false,
                },
            ];

        case TOGGLE_TODO_COMPLETE:
            return state.map(todo => todo.id === action.todoId
                ? { ...todo, done: !todo.done }
                : todo
            );

        default:
            return state;
    }
};

export default todosReducer;
