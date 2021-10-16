import { SHOW_COMPLETE, SHOW_ALL } from '../actions'

// {todos: [{text: '코딩', done: false}, {text: '점심먹기', done: false}], filter: 'ALL' }
const initialState = "ALL";

export default function filterReducer(previousState = initialState, action) {
  if(action.type === SHOW_COMPLETE) {
      return 'COMPLETE';
  }
  if(action.type === SHOW_ALL) {
      return 'ALL';
  }

  return previousState; 
}
