import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Comment from './Comment';
import CreateComment from './CreateComment';

const SingleBlog = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    // Use useCallback to memoize the fetchBlog function
    // This ensures that it doesn't get recreated on every render
    const fetchBlog = useCallback(async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem('userToken');
            const response = await axios.get(`http://127.0.0.1:8000/api/blog/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setData(response.data.data);
        } catch (error) {
            console.error(error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        fetchBlog();
    }, [fetchBlog]);

    if (loading) {
        return (
            <div className="container mt-5 mb-5">
                <div className="d-flex justify-content-center mt-5">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            </div>
        );
    }

    return (
        <>
            {error && <p>{error}</p>}
            <div className="container mt-5 mb-5">
                <div className="card mb-3" style={{ backgroundColor: '#dadada' }}>
                    <img src={data?.image} className="card-img-top" alt="Blog" />
                    <div className="card-body">
                        <h5 className="card-title">{data?.title}</h5>
                        <p className="card-text">{data?.content}</p>
                        <p className="card-text"><small>Last updated {data?.elapsedTime}</small></p>
                    </div>
                </div>
                <CreateComment blog_id={id} fetchBlog={fetchBlog} />
                <Comment id={id} />
            </div>
        </>
    );
};

export default SingleBlog;
