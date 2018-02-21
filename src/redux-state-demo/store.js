import { createStore } from 'redux';

const initialState = {
    todos: [],
    newTodoDescription: '',
}

const CREATE_TODO = 'CREATE_TODO';
const UPDATE_NEW_TODO_DESCRIPTION = 'UPDATE_NEW_TODO_DESCRIPTION';
const TOGGLE_TODO_COMPLETE = 'TOGGLE_TODO_COMPLETE';

/*
A reducer accepts two arguments,
1) the current state (by convention, the initial state if the current state is
`undefined`)
2) an action, which is an object with a type property and optionally any other
arbitrary properties

and returns the next state.
*/
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

        case UPDATE_NEW_TODO_DESCRIPTION:
            return {
                ...state,
                newTodoDescription: action.description || '',
            };

        case TOGGLE_TODO_COMPLETE:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.todoId
                    ? { ...todo, done: !todo.done }
                    : todo
                ),
            };

        default:
            return state;
    }
};

const store = createStore(reducer);

// log the initial state of our store
console.log('Initial state:');
console.log(store.getState());
console.log('');

// we call the `dispatch` method of our store with a single argument, a plain
// JavaScript object called an action, which must have a type property
store.dispatch({
    type: CREATE_TODO,
    description: 'My First Todo',
});

console.log('After first `store.dispatch`:');
console.log(store.getState());
console.log('');

// createTodo is an action creator because it returns a redux action
export const createTodo = description => ({
    type: CREATE_TODO,
    description,
});

store.dispatch(createTodo('My Second Todo'));

console.log('After `store.dispatch` with action creator:');
console.log(store.getState());
console.log('');

// other action creators
export const toggleTodoComplete = todoId => ({
    type: TOGGLE_TODO_COMPLETE,
    todoId,
});

export const updateNewTodoDescription = description => ({
    type: UPDATE_NEW_TODO_DESCRIPTION,
    description,
});

export default store;
