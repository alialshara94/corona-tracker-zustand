import React from 'react';

const Cards = ({data}) => {
    // console.log(data.data)
    return (
        <div>
           
                <h1>{data.data.map((d=>d.confirmed))}</h1>
           
        </div>
    );
}

export default Cards;