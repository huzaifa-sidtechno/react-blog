import axios from 'axios';
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const CreateComment = ({ blog_id , fetchBlog}) => {
    // State to manage modal visibility
    const [showModal, setShowModal] = useState(false);

    // Function to handle opening the modal
    const handleOpenModal = () => setShowModal(true);

    // Function to handle closing the modal
    const handleCloseModal = () => setShowModal(false);

    const { register, handleSubmit } = useForm();
    const [ error, setError ] = useState('')
    const navigate = useNavigate();

    const submitComment = async (data) => {
        try {
            setError('')
            const token = localStorage.getItem('userToken');
            const postcomment = await axios.post('http://127.0.0.1:8000/api/blog-comment-store', data , {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            handleCloseModal(true)
            fetchBlog()
        } catch (error) {
            setError(error?.response?.message)
        }

    }

    return (
        <>
        
        {error && <p>{error}</p>}
        <div className="d-flex justify-content-end">
            {/* Button to trigger modal */}
            <button className='btn btn-success' style={{ width: '20%' }} onClick={handleOpenModal}>Create Comment</button>

            {/* Modal definition */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Comment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Modal content goes here */}
                    <form onSubmit={handleSubmit(submitComment)}>
                        <div className="mb-3">
                            <input type="hidden" {...register('blog_id')} value={blog_id} />
                            <label htmlFor="commentContent" className="form-label">Comment</label>
                            <textarea className="form-control" {...register('comment')} id="commentContent" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Create</button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
        </>
    );
};

export default CreateComment;
