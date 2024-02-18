import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { blogContext } from "../context/blogContext";
import { HiMagnifyingGlass } from "react-icons/hi2";
import "./blog.css";

export default function Blog() {
  const {
    blogs,
    setTitle,
    setContent,
    setAuthor,
    setImage_url,
    addBlog,
    deleteBlog,
    editBlog,
    clickEditBlog,
  } = useContext(blogContext);
  const [search, setSearch] = useState("");
  const [filterSearch, setFilterSearch] = useState([]);

  useEffect(() => {
    const result = blogs.filter(
      (item) => item.title && item.title.includes(search)
    );
    setFilterSearch(result);
  }, [search, blogs]);

  return (
    <div className="blog-container">
      <div className="top-item">
        <div></div>
        <div className="searchBox">
          <input
            type="text"
            className="search_input"
            placeholder="Search Blogs"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="search-icon">
            <HiMagnifyingGlass />
          </div>
        </div>
        <div
          className="button-blog add-button"
          data-bs-toggle="modal"
          data-bs-target="#createBlogModal"
        >
          Add Some Blog
        </div>
      </div>

      <div className="blog-card-container">
        {filterSearch.map((item) => (
          <div key={item._id} className="blog-card">
            <Link to={`/blog/${item._id}`} className="card-link">
              <div className="card-image">
                <img src={item.image_url} alt={item.title} />
              </div>
            </Link>
            <div className="card-body">
              <h3 className="card-title">{item.title}</h3>
              <p className="card-text">{item.content.substring(0, 300)}...</p>
            </div>

            <div className="cardBottom">
              <button
                className="button-blog edit-button"
                data-bs-toggle="modal"
                data-bs-target={`#editBlogModal${item._id}`}
                onClick={() => clickEditBlog(item)}
              >
                Edit This Blog
              </button>
              <button
                className="button-blog delete-button"
                onClick={() => deleteBlog(item._id)}
              >
                Delete This Blog
              </button>
            </div>

            {/* //-----------------editBlog---------------------// */}
            <form onSubmit={(event) => editBlog(event, item)}>
              <div
                className="modal fade"
                id={`editBlogModal${item._id}`}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Edit Blog
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="mb-3">
                        <label className="col-form-label">Title:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="title"
                          name="title"
                          defaultValue={item.title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="col-form-label">Author:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="author"
                          name="author"
                          defaultValue={item.author}
                          onChange={(e) => setAuthor(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="col-form-label">
                          {`Image URL (only URL)`}:
                        </label>
                        <input
                          type="text"
                          accept="image/*"
                          className="form-control"
                          id="image_url"
                          name="image_url"
                          defaultValue={item.image_url}
                          onChange={(e) => setImage_url(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="col-form-label">Content:</label>
                        <textarea
                          className="form-control"
                          id="content"
                          name="content"
                          defaultValue={item.content}
                          onChange={(e) => setContent(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                      >
                        Edit Blog
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            {/* //----------------editBlog----------------------// */}
          </div>
        ))}
      </div>

      {/* //------------------addBlog--------------------// */}
      <form onSubmit={addBlog}>
        <div
          className="modal fade"
          id="createBlogModal"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add New Blog
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="col-form-label">Title:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="col-form-label">Author:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="author"
                    name="author"
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="col-form-label">
                    {`Image URL (only URL)`}:
                  </label>
                  <input
                    type="text"
                    accept="image/*"
                    className="form-control"
                    id="image_url"
                    name="image_url"
                    onChange={(e) => setImage_url(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="col-form-label">Content:</label>
                  <textarea
                    className="form-control"
                    id="content"
                    name="content"
                    onChange={(e) => setContent(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Create Blog
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      {/* //-----------------addBlog---------------------// */}
    </div>
  );
}
