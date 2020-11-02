import React from 'react';

const Cards = ({ data }) => {
    return (
        <div>
            <h1>{data.data.lastUpdate}</h1>
        </div>
    );
}

export default Cards;