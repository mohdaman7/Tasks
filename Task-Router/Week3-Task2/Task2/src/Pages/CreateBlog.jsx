import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BlogContext from '../BlogContext'


function CreateBlog() {

    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const {addBlog} = useContext(BlogContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        addBlog({id:Date.now(),title,body})
        navigate('/blogs');
    }

  return (
    <div>
      <h1>Create Blog</h1>
      <form>
        <div>
            <label>Title :</label>
            <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div>
            <label>Body :</label>
            <textarea value={body} onChange={(e)=>setBody(e.target.value)}/>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default CreateBlog
