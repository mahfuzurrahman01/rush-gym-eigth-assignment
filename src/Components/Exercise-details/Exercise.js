import React from 'react';
import './Exercise.css'
const Exercise = () => {
    return (
        <div>
            <h5 className='text-center'>Exercise Details</h5>
            <div className='time'>
                <h5>Duration</h5>
                <p><span id='timing'>0</span>s</p>
            </div>
            <div className='break-time'>   <h5>Break time</h5>
                <p><span id='timing'>0</span>s</p>
            </div>
            <button className='btn w-75 text-white btn-outline-dark'>Activity Complete</button>
        </div>
    );
};

export default Exercise;