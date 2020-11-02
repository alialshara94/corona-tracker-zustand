import React from 'react';

const Cards = ({ data }) => {
    return (
        <div>
            <h1>{data.map(info=>(
                <p>{info.lastUpdate}</p>
            ))}</h1>
        </div>
    );
}

export default Cards;