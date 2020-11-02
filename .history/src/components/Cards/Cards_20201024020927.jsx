import React from 'react';

const Cards = ({ data }) => {
    return (
        <div>
            {data.map((item)=>(
                <h1>{item.lastUpdate}</h1>
            ))}
        </div>
    );
}

export default Cards;