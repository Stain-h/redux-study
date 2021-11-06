import axios from 'axios'

// 액션 타입 

// 깃헙 API 호출 시작을 의미
export const GET_USER_START = 'redux-study/users/GET_USER_START';
// 깃헙 API 호출에 대한 응답이 성공적으로 돌아온 경우
export const GET_USER_SUCCESS = 'redux-study/users/GET_USER_SUCCESS';
// 깃헙 API 호출에 대한 응답이 실패한 경우
export const GET_USER_FAIL = 'redux-study/users/GET_USER_FAIL';

// redux-promise-middleware
const GET_USERS = 'redux-study/users/GET_USERS';

const GET_USERS_PENDING = 'redux-study/users/GET_USERS_PENDING';
const GET_USERS_FULFILLED = 'redux-study/users/GET_USERS_FULFILLED';
const GET_USERS_REJECTED = 'redux-study/users/GET_USERS_REJECTED';

// 액션 생성 함수
export function getUsersStart() {
  return {type: GET_USER_START}
}
export function getUsersSuccess(data) {
  return {type: GET_USER_SUCCESS, data}
}
export function getUsersFail(error) {
  return {type: GET_USER_FAIL, error}
}

// 초기값 
const initialState = {
  loading: false,
  data: [],
  error: null
};

// 리듀서 
export default function reducer(state = initialState, action) {
  if(action.type === GET_USER_START || action.type === GET_USERS_PENDING){
    return {
      ... state,
      loading: true,
      error: null
    }
  }

  if(action.type === GET_USER_SUCCESS){
    return {
      ... state,
      loading: false,
      data: action.data
    }
  } 

  if(action.type === GET_USERS_FULFILLED){
    return {
      ... state,
      loading: false,
      data: action.payload
    }
  } 

  if(action.type === GET_USER_FAIL){
    return {
      ... state,
      loading: false,
      error: action.error
    }
  }

  if(action.type === GET_USERS_REJECTED){
    return {
      ... state,
      loading: false,
      error: action.payload.message
    }
  }
  
  return state;
}

// redux-thunk-middleware
export function getUsersThunk() {
  return async(dispatch) => {
      try {
          dispatch(getUsersStart());
          const res = await axios.get('https://api.github.com/users');
          dispatch(getUsersSuccess(res.data));
      } catch (error) {
          dispatch(getUsersFail(error));
      }
  }
}


// redux-promise-middleware
export function getUsersPromise() {
  return {
      type: GET_USERS,
      payload: async() => {
        const res = await axios.get('https://api.github.com/users');
        return res.data;
      }
  }
}