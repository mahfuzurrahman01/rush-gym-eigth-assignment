import React from 'react';
import "./Card.css"
const Card = (props) => {
    const { addToListHandler } = props;
    const { name, age, picture, about, time } = props.item

    return (
        <div>
            <div className="card">
                <img src={picture} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <small className='card-text text-secondary'>{about.slice(0,120)}...</small>
                        <h6 className="card-text mt-1 mb-0">For age: {age}</h6>
                        <h6 className="card-text mt-2 mb-0">Duration: {time}s</h6>
                        <button href="#" className="btn btn-outline-dark text-white"onClick={() => addToListHandler(time)}>Add to list</button>
                        
                    </div>
            </div>
            {/* <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-6">
                        <img src={picture} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-6">
                        <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            <small class="card-text">{about}</small>
                            <h6 className="card-text mt-1 mb-0">For age: {age}</h6>
                            <h6 className="card-text mt-2 mb-0">Duration: {time}s</h6>
                            <button href="#" className="btn btn-outline-dark text-white" onClick={() => addToListHandler(time)}>Add to list</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Card;