import { useState, useEffect } from "react";
import axios from "axios";

export default function Search() {
  const [item, setItem] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=yIyZRJXm51wM5GE6v8px40TLn3EgTWP5"
      )
      .then((response) => {
        console.log(response.data.results.books);
        setItem(response.data.results.books);
      });
  }, []);
  return (
    <div className="search">
      <h1 className="h-rank">NYT's Rankings</h1>
      <div className="display">
        {item.map((i, index) => {
          return (
            <div className="display-content" key={index}>
              <div className="content-text">
                <h3 className="p-display-main">{i.title}</h3>
                <h5 className="p-display-main">{i.author}</h5>
                <p className="p-desc">{i.description}</p>
                <p className="publisher">Publisher:{i.publisher}</p>
              </div>
              <div className="content-image-container">
                <img src={i.book_image} className="content-img-books" alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
