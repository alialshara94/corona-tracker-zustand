import React from 'react';

const Cards = ({data: {confirmed,recovered,deaths,lastUpdate}}) => {
    console.log(confirmed)
    return (
        <div>
            <h1>{confirmed}</h1>
        </div>
    );
}

export default Cards;