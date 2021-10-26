import { GET_USER_START, GET_USER_SUCCESS, GET_USER_FAIL, GET_USERS_PENDING, GET_USERS_FULFILLED, GET_USERS_REJECTED  } from '../actions'

const initialState = {
  loading: false,
  data: [],
  error: null
};

export default function users(state = initialState, action) {
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