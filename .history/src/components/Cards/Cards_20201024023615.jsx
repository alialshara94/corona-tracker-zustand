import React from 'react';

const Cards = ({data}) => {
    
    
    return (
        <div>
           
                <h1>{data.data.map(item=(
        console.log(item.confirmed)
    ));}</h1>
           
        </div>
    );
}

export default Cards;