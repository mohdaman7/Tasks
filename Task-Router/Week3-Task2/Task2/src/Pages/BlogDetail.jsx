import React,{useContext} from 'react'
import { useParams } from 'react-router-dom'
import BlogContext from '../BlogContext'

function BlogDetail() {
    const {id} = useParams();
    const {blogs} = useContext(BlogContext);
    const blog = blogs.find((b)=>b.id === parseInt(id,10))

    if(!blog){
        return <h2>Blog not found</h2>
    }

  return (
    <div>
      <h2>{blog.title}</h2>
      <h2>{blog.body}</h2>
    </div>
  )
}

export default BlogDetail
