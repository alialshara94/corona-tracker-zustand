import React from 'react';

const Cards = ({data: {confirmed,recovered,deaths,lastUpdate}}) => {
    
    return (
        <div>
            <h1>{confirmed}</h1>
        </div>
    );
}

export default Cards;