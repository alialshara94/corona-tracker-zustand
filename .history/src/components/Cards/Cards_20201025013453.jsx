import React from 'react';

const Cards = ({ data }) => {
    // data.map((item) => {
    //     console.log(item.confirmed)
    // })

    return (
        <div>

            <h1>{data.confirmed}</h1>

        </div>
    );
}

export default Cards;