import { createActions, handleActions } from 'redux-actions';

export const { showAll, showComplete } = createActions('SHOW_ALL', 'SHOW_COMPLETE', {prefix: 'redux-study/filter'});

const initialState = "ALL";

const reducer = handleActions({
    SHOW_ALL: (state, action) => 'ALL',
    SHOW_COMPLETE: () => 'COMPLETE'
}, initialState, {prefix: 'redux-study/filter'})

export default reducer;


// ///////////////////////////////////// OLD_VER
// // 액션 타입 
// const SHOW_ALL = 'redux-study/filter/SHOW_ALL';
// const SHOW_COMPLETE = 'redux-study/filter/SHOW_COMPLETE';

// // 액션 생성 함수 
// export function showAll() {
//     return {type: SHOW_ALL}
// }
// export function showComplete() {
//     return {type: SHOW_COMPLETE}
// }

// // 초기값
// // {todos: [{text: '코딩', done: false}, {text: '점심먹기', done: false}], filter: 'ALL' }
// const initialState = "ALL";

// // 리듀서
// export default function reducer(previousState = initialState, action) {
//   if(action.type === SHOW_COMPLETE) {
//       return 'COMPLETE';
//   }
//   if(action.type === SHOW_ALL) {
//       return 'ALL';
//   }

//   return previousState; 
// }
