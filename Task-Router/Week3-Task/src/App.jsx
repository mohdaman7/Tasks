import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/register";
import Login from "./Pages/login";
import Home from "./Pages/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
