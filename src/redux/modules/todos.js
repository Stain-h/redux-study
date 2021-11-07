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

// // 액션 타입
// const ADD_TODO = 'redux-study/todos/ADD_TODO';
// const COMPLETE_TODO = 'redux-study/todos/COMPLETE_TODO';

// // 액션 생성 함수 
// // {type: ADD_TODO, text: '할일' }
// export function addTodo(text) {
//     return {type: ADD_TODO, text}
// }
// // {type: COMPLETE_TODO, index: 3}
// export function completeTodo(index) {
//     return {type: COMPLETE_TODO, index}
// }

// // 초기값 [{text: '코딩', done: false}, {text: '점심먹기', done: false}]
// const initialState = [];

// // 리듀서
// export default function reducer(previousState = initialState, action) {
//     // 초기값 설정 if(previousState == undefined){   return []; }
//     if (action.type === ADD_TODO) {
//         return [
//             ...previousState, {
//                 text: action.text,
//                 done: false
//             }
//         ]
//     }

//     if (action.type === COMPLETE_TODO) {
//         return previousState.map((todo, index) => {
//             if (index === action.index) {
//                 return {
//                     ...todo,
//                     done: true
//                 }
//             }
//             return todo;
//         })
//     }

//     return previousState;
// }
