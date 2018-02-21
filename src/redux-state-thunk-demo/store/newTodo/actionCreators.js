import {
    CREATE_TODO_START,
    CREATE_TODO_SUCCESS,
    UPDATE_NEW_TODO_DESCRIPTION,
} from './constants';

/*
The redux-thunk middleware handles the case where redux receives a function
rather than a plain action. Instead of passing the function to the next handler
(which would ultimately be the reducer) as would happen with an action,
`redux-thunk` calls the function with `store.dispatch` as an argument
(our argument `dispatch` below). Then, we are able to `dispatch` actions in the
function body.
*/
export const createTodo = description => {
    // Normally, you'd return an action object here
    return dispatch => {
        dispatch({ type: CREATE_TODO_START });

        // dispatch action with type CREATE_TODO_SUCCESS after 1500 ms
        setTimeout(
            () => dispatch({ type: CREATE_TODO_SUCCESS, description }),
            1500
        );
    };
};


export const updateNewTodoDescription = description => ({
    type: UPDATE_NEW_TODO_DESCRIPTION,
    description,
});
