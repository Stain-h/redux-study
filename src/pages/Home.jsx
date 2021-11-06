import { Link } from "react-router-dom";
import React from 'react'

function Home() {
  return (
    <div>
    <h1>Home</h1>
    <ul>
      <li><Link to="/todos">todos</Link></li>
      <li><Link to="/users">users</Link></li>
    </ul>
  </div>
  )
}

export default Home
