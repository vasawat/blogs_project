import aboutimg from "../images/about.svg";
import "./about.css";

export default function About() {
  return (
    <div className="container">
      <h2 className="title">about us</h2>
      <img className="bigImg" src={aboutimg} alt="" />
    </div>
  );
}
