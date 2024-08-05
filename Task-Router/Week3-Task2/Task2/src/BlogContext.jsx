import React,{createContext,useState} from "react";

const BlogContext = createContext();

export function BlogProvider({children}){
    const [blogs,setBlogs] = useState([])

    const addBlog = ((blog) => {
        setBlogs([...blog,blog])
    })

    return (
        <BlogContext.Provider value={{blogs,addBlog}}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContext