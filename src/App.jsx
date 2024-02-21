import React, { useEffect } from 'react';
import Header from './components/Header'; // Correct the import path and remove curly braces
import Footer from './components/Footer'; // Correct the import path and remove curly braces
import Login from './components/Login'; // Correct the import path and remove curly braces
import Signup from './components/Signup'; // Correct the import path and remove curly braces
import { BrowserRouter, Routes, Route } from 'react-router-dom/dist';
import Home from './components/Home';
import About from './components/About';
import BlogPost from './components/BlogPost';
import SingelBlog from './components/SingelBlog';
import EditBlogPost from './components/EditBlogPost';
import { useDispatch, useSelector } from 'react-redux';
import { login,logout } from './store/AuthSlice'; // Adjust the import path based on your project structure


const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.user.isLoggedIn); // Correct usage of useSelector

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    const userToken = localStorage.getItem('userToken');

    // Dispatch login action if userData and userToken exist in localStorage
    if (userData && userToken && !isLoggedIn) { // Check if user is not already logged in
        dispatch(login({ user: JSON.parse(userData), access_token: userToken }));
      }
    }, [dispatch, isLoggedIn]);

  const token = useSelector(state => state.user.userToken); // Correct usage of useSelector
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog/:id" element={<SingelBlog />} />
          <Route path="/blog-edit/:id" element={<EditBlogPost />} />
          {token ? (<>
            <Route path="/blog-post" element={<BlogPost />} /></>) : (<><Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </>)}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
