import React, { useEffect, useState } from 'react';
import './Main.css'
import Header from '../Header/Header';
import Card from '../Card/Card';


const Main = () => {
    const [activity,setActivity] = useState([]);
    useEffect(() =>{
        fetch('fakedb.json')
        .then(res => res.json())
        .then(data => setActivity(data))
    },[])
    return (
        <div className="main">
            <Header></Header>
             <div className='cards-container'>
             {
                activity.map(item => <Card key = {item.id} item = {item}></Card>)
             }
             </div>
        </div>
    );
};

export default Main;