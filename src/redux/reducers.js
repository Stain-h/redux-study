import {ADD_TODO, COMPLETE_TODO} from './actions'
// state ['코딩', '점심먹기']
// [{text: '코딩', done: false}, {text: '점심먹기', done: false}]
const initialState = [];
export function todoApp(previousState = initialState, action) {
    // 초기값 설정 if(previousState == undefined){   return []; }

    if (action.type === ADD_TODO) {
        return [
            ...previousState,
            {text: action.text, done: false}
        ];
    } 

    if (action.type === COMPLETE_TODO) {
        return previousState.map((todo, index) => {
            if(index === action.index) {
                return { ... todo, done: true}
            }
            return todo;
        }) 
    }

    return previousState; 
}

/*
		Reducer 란?
		현재 상태와 액션 객체를
		파라미터로 받아와서
		새로운 상태를 반환해주는
		함수이다.
 */