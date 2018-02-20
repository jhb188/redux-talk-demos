import {
    CREATE_TODO_START,
    CREATE_TODO_SUCCESS,
    UPDATE_NEW_TODO_DESCRIPTION,
} from './constants';

const initialState = {
    isCreating: false,
    description: '',
};

const newTodoReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case CREATE_TODO_START:
            return { ...state, isCreating: true };

        case CREATE_TODO_SUCCESS:
            return initialState;

        case UPDATE_NEW_TODO_DESCRIPTION:
            return {
                ...state,
                description: action.description || '',
            };

        default:
            return state;
    }
}

export default newTodoReducer;
