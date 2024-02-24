import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Switch from '@mui/material/Switch';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditBlogPost = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const [error, setError] = useState("");
  const [status, setStatus] = useState(false);
  const { id } = useParams();
  const [data, setData] = useState({});
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      
      const token = localStorage.getItem('userToken');
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/blog/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setData(response.data.data);
        setTitle(response.data.data.title);
        setContent(response.data.data.content);
        setStatus(response.data.data.status);
      } catch (error) {
        setError(error.message)
      }
    }
    fetchData();
  }, [id]);
  

  const updateBlog = async (data) => {
    setError("");
    const formData = new FormData();
    formData.append('id', id); // Include ID in form data
    formData.append('title', title);
    formData.append('content', content);
    formData.append('image', data.image[0]);
    formData.append('status', status ? 'active' : 'inactive');
    try {
      const token = localStorage.getItem('userToken');
      await axios.post("http://127.0.0.1:8000/api/update-blog", formData, {
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

  const handleImageChange = (e) => {
    setData({ ...data, image: URL.createObjectURL(e.target.files[0]) });
  };

  return (
    <div className="container mt-4">
      <h2>Edit Blog Post</h2>
      <form onSubmit={handleSubmit(updateBlog)} encType='multipart/form-data'>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title"  required />
          {errors.title && <p className="text-danger">{errors.title.message}</p>}
        </div>
        <div className="mb-3">
          <input type="hidden" {...register("id")} value={data?.id} /> {/* Hidden input for ID */}
          <label htmlFor="content" className="form-label">Content:</label>
          <textarea className="form-control" value={content} id="content" onChange={(e) => {setContent(e.target.value)}} rows="5" required></textarea>
          {errors.content && <p className="text-danger">{errors.content.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image:</label>
          <input
            type="file"
            className="form-control"
            {...register("image")}
            onChange={handleImageChange}
          />
          {data?.image && <img src={data?.image} alt="Preview" style={{ width: '200px' }} />}
          {errors.image && <p className="text-danger">{errors.image.message}</p>}
        </div>
        <div className="mb-3 form-check">
          
          <Controller
            name="status"
            control={control}
            value={status}
            render={({ field: { onChange, value } }) => (
              <Switch
                checked={status}
                value={status}
                onChange={(e) => {
                  setStatus(e.target.checked);
                  onChange(e.target.checked);
                }}
              />
            )}
          />
          <label className="form-check-label" htmlFor="status">
            {status ? 'Active' : 'Inactive'}
          </label>
        </div>
        {error && <div className="alert alert-danger" role="alert">{error}</div>}
        <button type="submit" className="btn btn-success">Update</button>
      </form>
    </div>
  );
};

export default EditBlogPost;
