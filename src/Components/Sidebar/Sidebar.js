import React from 'react';
import Break from '../Break/Break';
import Exercise from '../Exercise-details/Exercise';
import MyInfo from '../MyInfo/MyInfo';
import './Sidebar.css'
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <MyInfo></MyInfo>
            <Break></Break>
            <Exercise></Exercise>
        </div>
    );
};

export default Sidebar;