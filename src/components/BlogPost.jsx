import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Switch from '@mui/material/Switch';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const [error, setError] = useState("");
  const [status, setStatus] = useState(false);
  
  const createBlog = async (data) => {
    setError("");
    // Prepare formData for multipart/form-data submission
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('content', data.content);
    formData.append('image', data.image[0]); // Assuming single file upload
    formData.append('status', data.status ? 'active' : 'inactive');
    try {
      const token = localStorage.getItem('userToken');

      await axios.post("http://127.0.0.1:8000/api/create-blog", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
           Authorization: `Bearer ${token}`
        }
      });
      navigate('/');
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred.");
    }
  };

  const statusCheck = (data) => {
    if(data == true){
      setStatus(true)
    }else{
      setStatus(false)
    }
  }

  return (
    <div className="container mt-4">
      <h2>Create a New Blog Post</h2>
      <form onSubmit={handleSubmit(createBlog)} encType='multipart/form-data'>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title:</label>
          <input type="text" className="form-control" id="title" {...register("title", { required: true })} />
          {errors.title && <p className="text-danger">Title is required.</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">Content:</label>
          <textarea className="form-control" id="content" rows="5" {...register("content", { required: true })}></textarea>
          {errors.content && <p className="text-danger">Content is required.</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image URL:</label>
          <input type="file" className="form-control" {...register("image", { required: true })} />
          {errors.image && <p className="text-danger">Image is required.</p>}
        </div>
        <div className="mb-3 form-check">
        <Controller
            name="status"
            control={control}
            defaultValue={false}
            render={({ field: { onChange, value } }) => (
              <Switch
                checked={value}
                onChange={e => onChange(e.target.checked , statusCheck(e.target.checked))}
              />
            )}
          />
          <label className="form-check-label" htmlFor="status">
            {status == true ? 'Active' : 'Inactive'}
          </label>
        </div>
        {error && <div className="alert alert-danger" role="alert">{error}</div>}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
