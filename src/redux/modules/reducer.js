import {combineReducers} from 'redux';
import todos from './todos';
import filter from './filter';
import users from './users';
import {connectRouter} from 'connected-react-router';
import history from '../../history';

const reducer = combineReducers({
	todos,
	filter,
	users,
	router: connectRouter(history)
})

export default reducer; 

/*
		Reducer 란?
		현재 상태와 액션 객체를
		파라미터로 받아와서
		새로운 상태를 반환해주는
		함수이다.
 */