import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { BlogProvider } from "./BlogContext";
import CreateBlog from "./Pages/CreateBlog";
import Blogs from "./Pages/Blogs";
import BlogDetail from "./Pages/BlogDetail";
import Home from "./Pages/Home";



function App() {
  return (
    <>
      <BlogProvider>

        <BrowserRouter>

          <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/createblog" element={<CreateBlog/>}/>
            <Route path="/blogs" element={<Blogs/>}/>
            <Route path="/blogs/:id" element={<BlogDetail/>}/>

          </Routes>

        </BrowserRouter>

      </BlogProvider>
    </>
  );
}

export default App;
