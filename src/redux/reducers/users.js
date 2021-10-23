const initialState = {
  loading: false,
  data: [],
  error: null
};

export default function users(state = initialState, action) {
  if(action.type === 'GET_USER_START'){
    return {
      ... state,
      loading: true,
      error: null
    }
  }

  if(action.type === 'GET_USER_SUCCESS'){
    return {
      ... state,
      loading: false,
      data: action.data
    }
  } 

  if(action.type === 'GET_USER_FAIL'){
    return {
      ... state,
      loading: false,
      error: action.error
    }
  }
  
  return state;
}