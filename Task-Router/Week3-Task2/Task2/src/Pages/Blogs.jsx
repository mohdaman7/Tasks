import React, { useContext } from "react";
import BlogContext from "../BlogContext";
import { Link } from "react-router-dom";

function Blogs() {
  const { blogs } = useContext(BlogContext);
  return (
    <div>
      <h1>All Blogs</h1>
      <ul>
        {blogs.map((blog) => {
          <li key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>{blog.body.slice(0, 100)}...</p>
            </Link>
          </li>;
        })}
      </ul>
    </div>
  );
}

export default Blogs;
