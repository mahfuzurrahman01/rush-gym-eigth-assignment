import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
        <div className='header'>
            <FontAwesomeIcon icon={faDumbbell} size="6x" className='icon'/>
            <h1>Rush GYM</h1>
            <small className='text-secondary'>Lets burn some calories</small>
        </div>
    );
};

export default Header;