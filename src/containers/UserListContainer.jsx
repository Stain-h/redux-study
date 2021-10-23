import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserList from "../components/UserList";
import { getUsersFail, getUsersStart, getUsersSuccess } from "../redux/actions";
import axios from 'axios';

export default function UserListContainer(){
  const users = useSelector(state => state.users.data)
  const dispatch = useDispatch();

  const getUsers = useCallback( async () => {
      const DATAURL = 'https://api.github.com/users';
      try {
        dispatch(getUsersStart());
        const res = await axios.get(DATAURL);
        dispatch(getUsersSuccess(res.data));
      } catch(error) {
        dispatch(getUsersFail(error));
      }
    }
  , [dispatch])
  
  return <UserList users={users} getUsers={getUsers} />
}