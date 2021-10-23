export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

// {type: ADD_TODO, text: '할일' }
export function addTodo(text) {
  return{
    type: ADD_TODO,
    text
  }
}
// {type: COMPLETE_TODO, index: 3}
export function completeTodo(index) {
  return {
    type: COMPLETE_TODO,
    index
  }
}

export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETE = 'SHOW_COMPLETE';

export function showAll() {
  return { type: SHOW_ALL }
}
export function showComplete() {
  return { type: SHOW_COMPLETE }
}

// users
export const GET_USER_START = 'GET_USER_START';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAIL = 'GET_USER_FAIL';

export function getUsersStart() {
  return {
    type: GET_USER_START
  }
}
export function getUsersSuccess(data) {
  return {
    type: GET_USER_SUCCESS,
    data,
  }
}
export function getUsersFail(error) {
  return {
    type: GET_USER_FAIL,
    error,
  }
}



/*
  **action


*/