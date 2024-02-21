import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash, FaRegEye } from 'react-icons/fa';

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const userData = localStorage.getItem('userData');
  const userInfo = JSON.parse(userData);

  const getPosts = useCallback(async () => {
    try {
      const token = localStorage.getItem('userToken');
      const response = await axios.get("http://127.0.0.1:8000/api/blog", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setPosts(response.data.data); // Adjust based on the actual structure
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred.");
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const deleteBlog = async (id) => {
    try {
      const token = localStorage.getItem('userToken');
      await axios.get(`http://127.0.0.1:8000/api/blog-delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      getPosts(); // Refresh the posts list after deletion
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <>
      {error && <div className="alert alert-danger" role="alert">{error}</div>}
      {posts.map((post, index) => (
        <div key={index} className="col-md-4 mb-4">
          <div className="card" style={{ width: '18rem' }}>
            <img src={post?.image} className="card-img-top" alt={post?.title} />
            <div className="card-body">
              <h5 className="card-title">{post?.title}</h5>
              <p className="card-text">{post?.content.substring(0, 100)}{post?.content.length > 100 ? "..." : ""}</p>
              <Link to={`/blog/${post?.id}`} className="btn btn-primary"><FaRegEye /></Link>
              {userInfo?.id === post?.user_id && (
                <>
                  <Link to={`/blog-edit/${post?.id}`} className="btn btn-success mx-2"><FaEdit /></Link>
                  <button onClick={() => deleteBlog(post?.id)} className="btn btn-danger"><FaTrash /></button>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogList;
