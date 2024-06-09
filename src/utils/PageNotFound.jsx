import React from 'react'
import imgNotFound from '../assets/icons/404.png';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className='mb-5'>
            <img src={imgNotFound} alt="Page Not Found" />
            <div className='text-center'>
                <h2 className='h1'>Something was Broken</h2>
                <p className='text-secondary'>We are working tirelessly to fix this issue. Please bear with us.</p>
                <Link to="/" className='btn btn-dark'>Go to Homepage</Link>
            </div>
        </div>
    )
}

export default PageNotFound