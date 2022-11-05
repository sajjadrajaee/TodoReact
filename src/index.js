import React from "react"
import ReactDOM from "react-dom"
import TodoContainer from './components/TodoContainer'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import NotMatch from "./components/NoMatch";
import './App.css'
ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<TodoContainer />} />
          <Route path="About" element={<About />} />
          <Route path="NotMatch" element={<NotMatch />} />
        </Routes>       
          
     </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"));