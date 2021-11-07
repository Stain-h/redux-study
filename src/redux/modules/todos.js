import {createActions, handleActions} from 'redux-actions';

export const { addTodo, completeTodo } = createActions('ADD_TODO', 'COMPLETE_TODO', {prefix: 'redux-study/todos'})

const initialState = [];

const reducer = handleActions({
    ADD_TODO: (state, action) => {
        return [...state, {text: action.payload, done: false}]
    },
    COMPLETE_TODO: (state, action) => state.map((todo, index)=> {
        if(index === action.payload){
            return {
                ...todo,
                done: true
            }
        }
        return todo
    }),
},initialState, {
    prefix: 'redux-study/todos',
})

export default reducer
