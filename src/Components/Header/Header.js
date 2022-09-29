import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className='header'>
            <FontAwesomeIcon icon={ faDumbbell } size="6x" className='icon'/>
            <h1>Rush GYM</h1>
            <small className='slogan bg-opacity-50'>“If you want something you've never had, you must be willing to do something you've never done.”</small>
        </div>
    );
};

export default Header;