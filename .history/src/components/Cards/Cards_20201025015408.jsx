import React from 'react';

const Cards = ({ data }) => {
    // data.map((item) => {
        // console.log(data.confirmed)
    // })
    console.log(data);

    return (
        <div>
            {/* <h1>{data.confirmed}</h1> */}
            {/* <h1>{data.map(value=>(
                <p>{value.value}</p>
            ))}</h1> */}
            {/* {data.map(c => (
                <h1 key={c.confirmed}>{c.confirmed}</h1> */}
            {/* ))} */}
        </div>
    );
}

export default Cards;