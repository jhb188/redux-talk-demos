import {
    CREATE_TODO,
    TOGGLE_TODO_COMPLETE,
    UPDATE_NEW_TODO_DESCRIPTION,
} from './constants';

const initialState = {
    todos: [],
    newTodoDescription: '',
}

const reducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case CREATE_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: state.todos.length + 1,
                        description: action.description,
                        done: false,
                    },
                ],
                newTodoDescription: '',
            };

        case TOGGLE_TODO_COMPLETE:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.todoId
                    ? { ...todo, done: !todo.done }
                    : todo
                ),
            };

        case UPDATE_NEW_TODO_DESCRIPTION:
            return {
                ...state,
                newTodoDescription: action.description || '',
            };

        default:
            return state;
    }
};

export default reducer;
