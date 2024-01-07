import heroImg from "../assets/hero.jpg";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-h">The Growth Handbook</h1>

        <p className="hero-p">
          Welcome to a world of words, where stories come to life and adventures
          unfold on every page. Immerse yourself in the magic of literature,
          where each book is a gateway to new realms of imagination.
        </p>
        <button className="hero-btn">Search Books</button>
      </div>
      <img src={heroImg} className="hero-img"></img>
    </div>
  );
}
