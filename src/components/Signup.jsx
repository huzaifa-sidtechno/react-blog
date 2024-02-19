import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const [error, setError] = useState("");

  // Function to handle form submission
  const signup = async (data) => {
    setError(""); 
    console.log(data); // For debugging purposes
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register", data);
      localStorage.clear(); 
      localStorage.setItem('userData', response.data.user);
      localStorage.setItem('userToken', response.data.access_token);
      dispatch(login({ user: response.data.user, access_token: response.data.access_token })); 
      navigate('/home'); // Redirect to dashboard or any intended page
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred during registration.");
    }
  };

  // Watch the password value to validate the confirmation
  const password = watch("password");

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <h5 className="card-header">Signup</h5>
            <div className="card-body">
              <form onSubmit={handleSubmit(signup)}> {/* Corrected to use the signup function */}
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="fullName" {...register("name", { required: true })} />
                  {errors.name && <p className="text-danger">Full name is required.</p>}
                </div>
                <div className="mb-3">
                  <label htmlFor="emailSignup" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="emailSignup" {...register("email", { required: true })} />
                  {errors.email && <p className="text-danger">Email is required.</p>}
                </div>
                <div className="mb-3">
                  <label htmlFor="passwordSignup" className="form-label">Password</label>
                  <input type="password" className="form-control" id="passwordSignup" {...register("password", { required: true, minLength: 8 })} />
                  {errors.password && <p className="text-danger">Password is required and must be at least 8 characters long.</p>}
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input type="password" className="form-control" id="confirmPassword" {...register("confirm_password", {
                    validate: value => value === password || "The passwords do not match."
                  })} />
                  {errors.confirm_password && <p className="text-danger">{errors.confirm_password.message}</p>}
                </div>
                {error && <div className="alert alert-danger" role="alert">{error}</div>}
                <button type="submit" className="btn btn-primary">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
