import { useState, useEffect } from "react";
import axios from "axios";

export default function Search() {
  return (
    <div className="search">
      <h1></h1>
      <input type="text" placeholder="Search"></input>
      <div className="content-search"></div>
    </div>
  );
}
