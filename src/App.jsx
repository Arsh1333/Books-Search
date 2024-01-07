import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Search from "./components/Search";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const btnHandler = () => {
    console.log("clicked");
  };
  return (
    <BrowserRouter>
      {" "}
      <>
        <nav>
          <div className="logo">The Growth Book</div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
          </ul>
          <button onClick={btnHandler} className="btn-sign">
            SignUp
          </button>
        </nav>
      </>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
