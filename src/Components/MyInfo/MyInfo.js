import React from 'react';
import "./MyInfo.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocation } from '@fortawesome/free-solid-svg-icons';
import img from "../../IMG-20220315-WA0003.jpg"
const MyInfo = () => {
    return (
        <div className='my-info'>
            <img src={img} alt="" />
            <div className='name-address'>
             <h5>Mahfuzur Rahman</h5>
             <p><FontAwesomeIcon icon = {faMapLocation} className='icon'/> Cumilla,Bangladesh</p>
            </div>
        </div>
    );
};

export default MyInfo;