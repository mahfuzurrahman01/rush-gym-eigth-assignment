import React, { useState } from 'react';
import Break from '../Break/Break';
import Exercise from '../Exercise-details/Exercise';
import MyInfo from '../MyInfo/MyInfo';
import { setToLocalStorage } from '../Utilities/Utilities';
import './Sidebar.css'


const Sidebar = (props) => {
    const [breakTime,setBreakTime] = useState(0)
    const breakHandler = (id) =>{
        setBreakTime(id)
        setToLocalStorage(id)
    } 
    // const {count} = props;
    let count = props.count;
    return (
        <div className='sidebar'>
            <MyInfo></MyInfo>
            <Break breakHandler = {breakHandler}></Break>
            <Exercise count = {count} breakTime = {breakTime}></Exercise>
        </div>
    );
};

export default Sidebar;