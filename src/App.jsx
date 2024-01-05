import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import heroImg from "./assets/hero.jpg";

function App() {
  return (
    <>
      <nav>
        <div className="logo">The Growth Book</div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
        <button className="btn-sign">SignUp</button>
      </nav>
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-h">The Growth Handbook</h1>

          <p className="hero-p">
            Welcome to a world of words, where stories come to life and
            adventures unfold on every page. Immerse yourself in the magic of
            literature, where each book is a gateway to new realms of
            imagination.
          </p>
          <button className="hero-btn">Search Books</button>
        </div>
        <img src={heroImg} className="hero-img"></img>
      </div>
    </>
  );
}

export default App;
