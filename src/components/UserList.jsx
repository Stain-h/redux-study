import axios from "axios"
import { useEffect } from "react"

export default function UserList({ users, start, success, fail }) {
  useEffect(()=> {
    async function getUsers() {
      const DATAURL = 'https://api.github.com/users';
      try {
        start();
        const res = await axios.get(DATAURL);
        success(res.data);
      } catch(e) {
        fail(e)
      }
    }
    getUsers();
  }, [start, success, fail])

  if(users.length === 0){
    return <p>현재 유저 정보 없음.</p>
  }

  return(
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.login}</li>
      ))}
    </ul>
  )
}