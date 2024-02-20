import "./about.css";

export default function About() {
  return (
    <div className="container">
      <h2 className="title">about us</h2>
      <div className="rickrollBox">
        <iframe
          title="rickroll"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=b2zlCE5jn66BrKy?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1"
          frameborder="0"
          allow="autoplay"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
