import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'; // Adjust the import based on your setup
import { login } from '../store/AuthSlice'; // Adjust the import path based on your project structure

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState("");
  const userToken = localStorage.getItem('userToken'); // Check for existing token

  useEffect(() => {
    if (userToken) {
      navigate('/');
    }
  }, [navigate, userToken]);

  const loginHandler = async (data) => {
    setError("");
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", data);
      localStorage.setItem('userData', JSON.stringify(response.data.user));
      localStorage.setItem('userToken', response.data.access_token);
      dispatch(login({ user: response.data.user, access_token: response.data.access_token }));
      navigate('/');
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred during login.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <h5 className="card-header">Login</h5>
            <div className="card-body">
              <form onSubmit={handleSubmit(loginHandler)}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" {...register("email", { required: true })} />
                  {errors.email && <div className="text-danger">Email is required</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" {...register("password", { required: true })} />
                  {errors.password && <div className="text-danger">Password is required</div>}
                </div>
                {error && <div className="text-danger mb-3">{error}</div>}
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
