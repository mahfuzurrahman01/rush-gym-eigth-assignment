import React from 'react';
import "./MyInfo.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocation, } from '@fortawesome/free-solid-svg-icons';
import img from "../../IMG-20220315-WA0003.jpg"
const MyInfo = () => {
    return (
        <div>
            <div className='my-info'>
                <img src={img} alt="" />
                <div className='name-address'>
                    <h5>Mahfuzur Rahman</h5>
                    <p><FontAwesomeIcon icon={faMapLocation} className='icon' /> Cumilla,Bangladesh</p>
                </div>
            </div>
            <h6 className='text-center'>My comfort level!</h6>
            <div className='my-details'>
                <div className='weight'>
                    <h5>HTML</h5>
                    <p>95%</p>
                </div>
                <div className='height'>
                    <h5>CSS</h5>
                    <p>85%</p>
                </div>
                <div className='age'>
                    <h5>JavaScript</h5>
                    <p>67%</p>
                </div>
            </div>

        </div>
    );
};

export default MyInfo;