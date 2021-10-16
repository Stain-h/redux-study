import { ADD_TODO, COMPLETE_TODO } from '../actions'

// [{text: '코딩', done: false}, {text: '점심먹기', done: false}]
const initialState = [];

export default function todos(previousState = initialState, action) {
  // 초기값 설정 if(previousState == undefined){   return []; }
  if (action.type === ADD_TODO) {
      return[
              ... previousState,
              {text: action.text, done: false}
          ]
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
