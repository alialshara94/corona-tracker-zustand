import React from 'react';

const Cards = ({ data }) => {
    // data.map((item) => {
    //     console.log(item.confirmed)
    // })

    return (
        <div>
            {data.map(c => (
                <h1 key={c.confirmed}>{c.confirmed}</h1>
            ))}
        </div>
    );
}

export default Cards;