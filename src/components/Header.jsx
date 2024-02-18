import { Link } from "react-router-dom";
import "./header.css";
export default function Header() {
  return (
    <nav>
      <Link to="/" className="logo linkHeader">
        My Blogs
      </Link>
      <div className="topRightHeader">
        <Link to="/" className="linkHeader topRightHeader_item">
          Homepage
        </Link>
        <Link to="/about" className="linkHeader topRightHeader_item">
          About us
        </Link>
      </div>
    </nav>
  );
}
