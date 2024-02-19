import React from 'react';
import BlogList from './BlogList';
import { useSelector } from 'react-redux';

const Home = () => {
  // Dummy data for demonstration
  const posts = [
    { 
      image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      title: 'First Blog Post', 
      content: 'Content of the first blog post.' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      title: 'Second Blog Post', 
      content: 'Content of the second blog post.' 
    },
    { 
      image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
      title: 'Third Blog Post', 
      content: 'Content of the third blog post.' 
    },
    // Add more blog posts as needed
  ];

  const userInfo = useSelector((state) => state.user);
  const token = localStorage.getItem('userToken');

  return (
    <div>
      {/* <h1 className='text-center mt-3 mb-4'>Welcome to the Blog! {userInfo?.name}</h1> */}
      <div className="container" >
      <div className="row mt-5 justify-content-center">
        {token ? (<><BlogList posts={posts} /></>) : (<><h3 className='text-center text-warning mt-5'>First You Logged In Then See Blog Post</h3></>) }
          
        </div>
      </div>
    </div>
  );
};

export default Home;
