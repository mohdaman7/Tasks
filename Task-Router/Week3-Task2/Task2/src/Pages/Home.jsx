import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Welcome to the Blog Page</h1>
      <p><Link to='/createblog'>Create a New Blog</Link></p>
      <p><Link to='/blogs'>View All Blogs</Link></p>
    </div>
  )
}

export default Home
