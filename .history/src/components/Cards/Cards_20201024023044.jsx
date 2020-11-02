import React from 'react';

const Cards = ({data}) => {
    // console.log(data.data)
    return (
        <div>
           
                <h1>{data.data.confirmed}</h1>
           
        </div>
    );
}

export default Cards;