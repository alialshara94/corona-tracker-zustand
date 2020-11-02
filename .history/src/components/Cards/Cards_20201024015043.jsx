import React from 'react';

const Cards = ({confirmed,recovered,deaths,lastUpdate}) => {
    return (
        <div>
            <h1>{lastUpdate}</h1>
        </div>
    );
}

export default Cards;