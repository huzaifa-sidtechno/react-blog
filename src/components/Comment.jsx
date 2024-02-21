import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaHeart } from 'react-icons/fa'; // Importing FontAwesome heart icon

export const Comment = ({ id }) => {
    const [error, setError] = useState('');
    const [data, setData] = useState([]);
    const token = localStorage.getItem('userToken'); // Assuming token is stored in localStorage

    const getComments = async () => {
        try {
            setError('');
            const response = await axios.get(`http://127.0.0.1:8000/api/blog-comment/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setData(response.data.map(comment => ({
                ...comment,
                isLiked: false, // Initialize isLiked status for each comment
            })));
        } catch (error) {
            setError(error?.response?.data?.message || 'API response error');
        }
    };

    useEffect(() => {
        getComments();
    }, [id]);

    const toggleLike = async (commentId, isLiked) => {
        try {
            const endpoint = isLiked ? `/unlike/${commentId}` : `/like/${commentId}`; // Assuming these are your endpoints
            await axios.post(`http://127.0.0.1:8000/api/blog-comment${endpoint}`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            // Update local state to reflect like/unlike without needing to refetch all comments
            setData(data.map(comment => comment.id === commentId ? { ...comment, isLiked: !isLiked } : comment));
        } catch (error) {
            setError(error?.response?.data?.message || 'Failed to update like status');
        }
    };

    return (
        <>
            {data.map((value, index) => (
                <div key={index} className="card mt-3">
                    <div className="card-header">
                        Comment
                        <span className='float-right'>{value?.elapsedTime}</span>
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p>{value?.comment}</p>
                            <footer className="blockquote-footer"><cite title="Source Title">{value?.users?.name}</cite></footer>
                        </blockquote>
                    </div>
                    <div className="card-footer">
                        {/* Like button with dynamic styling based on like status */}
                        <button className="btn" onClick={() => toggleLike(value.id, value.isLiked)}>
                            <FaHeart color={value.isLiked ? 'red' : 'grey'} />
                            {" "}like {value?.like}
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Comment;