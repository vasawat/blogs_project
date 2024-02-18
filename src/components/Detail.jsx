import { Link, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { blogContext } from "../context/blogContext";
import "./detail.css";
export default function Detail() {
  const { blogs } = useContext(blogContext);
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [img, setImg] = useState("");
  const [content, setContent] = useState([]);

  useEffect(() => {
    const result = blogs.find((item) => item._id === id);
    if (result) {
      let breakLines = typeof result.content === 'string' ? result.content.split('\n') : [];
      setTitle(result.title);
      setAuthor(result.author);
      setImg(result.image_url);
      setContent(breakLines);
    }
  }, [id, blogs]);

  return (
    <div className="container-detail">
      <h1 className="title">{title}</h1>
      <p className="author">Author: {author}</p>
      <img className="detailImg" src={img} alt="" />
      <div className="boxOfContent">
        {content.map((paragraph, index) => (
          <p key={index} className="eachContentText">
            {paragraph}
          </p>
        ))}
      </div>
      <Link className="backButton" to="/">
        Back to Blogs
      </Link>
    </div>
  );
}
