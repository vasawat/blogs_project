import React, { createContext, useState, useEffect } from "react";
export const blogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBackendData] = useState([{}]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [image_url, setImage_url] = useState("");
  const fetchData = async () => {
    try {
      const response = await fetch("/api");
      const data = await response.json();
      setBackendData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // eslint-disable-next-line
  let addBlog = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/addBlog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          title: title,
          content: content,
          author: author,
          image_url: image_url,
        }),
      });
      const data = await response.json();
      console.log("Add Blog response:", data);
    } catch (err) {
      console.log("Error NOW");
      console.log(err);
    }
  };
  // eslint-disable-next-line
  const deleteBlog = async (id) => {
    try {
      await fetch("/api/deleteBlog", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ id: id }),
      });
      await fetchData();
    } catch (err) {
      console.error(err);
    }
  };
  const clickEditBlog = (item) => {
    setTitle(item.title);
    setContent(item.content);
    setAuthor(item.author);
    setImage_url(item.image_url);
  };
  // eslint-disable-next-line
  const editBlog = async (event, id) => {
    event.preventDefault();
    try {
      await fetch("/api/editBlog", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          id: id,
          title: title,
          content: content,
          author: author,
          image_url: image_url,
        }),
      });
      await fetchData();
    } catch (err) {
      console.log("Error NOW");
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [addBlog, deleteBlog, editBlog]);
  return (
    <blogContext.Provider
      value={{
        blogs,
        title,
        setTitle,
        content,
        setContent,
        author,
        setAuthor,
        image_url,
        setImage_url,
        addBlog,
        deleteBlog,
        editBlog,
        clickEditBlog,
      }}
    >
      {children}
    </blogContext.Provider>
  );
};
