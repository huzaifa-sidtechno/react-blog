import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'; // Import Spinner component from React Bootstrap

const SingelBlog = () => {
    const { id } = useParams();

    const [data, setData] = useState({})
    const [ error, setError] = useState('')
    const [ loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const token = localStorage.getItem('userToken');

                const response = await axios.get('http://127.0.0.1:8000/api/blog/' + id , {
                    headers: {
                      Authorization: `Bearer ${token}`
                    }
                });  
                setData(response.data.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setError(error.message)
            }
        }
        fetchBlog()
    }, [id])

    if (loading) {
        return (
            <div className="container mt-5 mb-5">
                <div className="d-flex justify-content-center mt-5">
                    <Spinner animation="border" role="status" className="spinner-lg">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            </div>
        );
    }

    return (
        <>
            {error && <p>{error}</p>}
            <div className="container mt-5 mb-5">
            <div className="card" style={{ backgroundColor: '#dadada' }}>
                    <div className="card mb-3">
                        <img src={data?.image} className="card-img-top" alt="card-image" />
                        <div className="card-body" style={{ backgroundColor: '#dadada' }}>
                            <h5 className="card-title">{data?.title}</h5>
                            <p className="card-text">{data?.content}</p>
                            <p className="card-text"><small className="text-body-secondary">created at {data?.elapsedTime}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingelBlog