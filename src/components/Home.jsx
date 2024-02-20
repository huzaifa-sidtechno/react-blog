import React from 'react';
import BlogList from './BlogList';
import { useSelector } from 'react-redux';

const Home = () => {
  const userInfo = useSelector((state) => state.user);
  const token = localStorage.getItem('userToken');

  return (
    <div>
      {/* <h1 className='text-center mt-3 mb-4'>Welcome to the Blog! {userInfo?.name}</h1> */}
      <div className="container" >
      <div className="row mt-5 justify-content-center">
        {token ? (<><BlogList /></>) : (<><h3 className='text-center text-warning mt-5'>First You Logged In Then See Blog Post</h3></>) }
          
        </div>
      </div>
    </div>
  );
};

export default Home;
