import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const BlogList = () => {
  // State to store fetched posts
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const userData =  localStorage.getItem('userData');
  const userInfo = JSON.parse(userData);
  useEffect(() => {
    const getPosts = async () => {
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
    };
    getPosts();
  }, []);



  return (
    <>
    {error && <div className="alert alert-danger" role="alert">{error}</div>}
      {posts.map((post, index) => (
        <div key={index} className="col-md-4 mb-4">
          <div className="card" style={{ width: '18rem' }}>
            <img src={post?.image} className="card-img-top" alt={post?.title} />
            <div className="card-body">
              <h5 className="card-title">{post?.title}</h5>
              <p className="card-text">{post?.content.substring(0, 100)}{post?.content.length > 25 ? "..." : ""}</p>
              <Link to={`/blog/${post?.id}`} className="btn btn-primary">
                Read more
              </Link>  
              {userInfo.id == post?.user_id && <><Link to={`/blog-edit/${post?.id}`} className="btn btn-success mx-2">
                Edit
              </Link></>}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogList;
