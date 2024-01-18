import heroImg from "../assets/hero.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-h">The Growth Handbook</h1>

        <p className="hero-p">
          Welcome to a world of words, where stories come to life and adventures
          unfold on every page. Immerse yourself in the magic of literature,
          where each book is a gateway to new realms of imagination. Get the
          latest New York Times monthly book rankings by clicking the buttons
          below.
        </p>
        <Link to="/search">
          {" "}
          <button className="hero-btn">Rankings-Fiction</button>
        </Link>
        <Link to="/searchNonFiction">
          {" "}
          <button className="hero-btn-nf">Nonfiction</button>
        </Link>
      </div>

      <img src={heroImg} className="hero-img"></img>
    </div>
  );
}
