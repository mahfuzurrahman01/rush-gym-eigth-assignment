import React from 'react';
import './Break.css'
const Break = (props) => {
    const{ breakHandler } = props;
        
    return (
        <div className='break'>
            <p>Add A Break</p>
            <div className='break-point'>
                <h5 onClick={()=> breakHandler(10)}>10</h5>
                <h5 onClick={()=> breakHandler(20)}>20</h5>
                <h5 onClick={()=> breakHandler(30)}>30</h5>
                <h5 onClick={()=> breakHandler(40)}>40</h5>
                <h5 onClick={()=> breakHandler(50)}>50</h5>
            </div>
        </div>
    );
};

export default Break;