import React from 'react';
import Break from '../Break/Break';
import Exercise from '../Exercise-details/Exercise';
import MyInfo from '../MyInfo/MyInfo';
import './Sidebar.css'
const Sidebar = (props) => {
    // const {count} = props;
    let count = props.count;
    return (
        <div className='sidebar'>
            <MyInfo></MyInfo>
            <Break></Break>
            <Exercise count = {count}></Exercise>
        </div>
    );
};

export default Sidebar;