import React from 'react';
import "./Card.css"
const Card = (props) => {
    const { name, age, picture,about } = props.item
 
    return (
        <div>
            <div className="card">
                <img src={picture} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{age}</p>
                        <small className='card-text'>{about.slice(0,120)}...</small>
                        <button href="#" className="btn btn-outline-dark">Add to list</button>
                    </div>
            </div>
        </div>
    );
};

export default Card;