import {combineReducers} from 'redux';
import todos from './todos';
import filter from './filter';

const reducer = combineReducers({todos, filter})

export default reducer;

/*
		Reducer 란?
		현재 상태와 액션 객체를
		파라미터로 받아와서
		새로운 상태를 반환해주는
		함수이다.
 */