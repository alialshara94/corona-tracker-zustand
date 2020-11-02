import React from 'react';

const Cards = ({data}) => {
    // console.log(data.data)
    return (
        <div>
            {data.data.map(res=>(
                <h1>res.confirmed</h1>
            ))}
        </div>
    );
}

export default Cards;