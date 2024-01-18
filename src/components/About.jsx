export default function About() {
  return (
    <div className="about-card">
      <h1 className="hero-h">About</h1>
      <div className="about-content">
        <div className="p-contact">
          This is a website made for passionate readers who would like to keep
          track on the monthly rankings issued by New York Times. This website
          contains both fiction as well as non-fiction monthly rankings. User is
          also provided link to buy book . The link will redirect user to the
          amazon website where he/she can place order.The rankings provided in
          this website is based on New York Times ranking ,rankings is not given
          by the owner of the website.
          <p>
            As the rankings change on the New York Times , the changes will be
            updated on this website.
          </p>
        </div>
        <img
          src="https://plus.unsplash.com/premium_photo-1678048604398-f42dda6997bd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cXVlc3Rpb25zfGVufDB8fDB8fHww"
          alt="about"
          className="aboutImg"
        />
      </div>
    </div>
  );
}
