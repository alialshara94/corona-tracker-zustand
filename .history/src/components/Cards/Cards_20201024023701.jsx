import React from 'react';

const Cards = ({data}) => {
    data.data.map(item=>{
        console.log(item.confirmed)
    })
    
    return (
        <div>
           
                {/* <h1>{data.data}</h1> */}
           
        </div>
    );
}

export default Cards;