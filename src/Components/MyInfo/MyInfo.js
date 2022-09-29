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
            <div className='my-details'>
                <div className='weight'>
                    <h5>61<small>kg</small></h5>
                    <p>weight</p>
                </div>
                <div className='height'>
                    <h5>5.6</h5>
                    <p>Height</p>
                </div>
                <div className='age'>
                    <h5>23<small>yrs</small></h5>
                    <p>Age</p>
                </div>
            </div>

        </div>
    );
};

export default MyInfo;