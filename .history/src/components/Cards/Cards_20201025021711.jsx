import React from 'react';
import styles from './cards.module.css';
import {Card,CardContent,Typography,Grid} from '@material-ui/core'
const Cards = ({confirmed,recovered,deaths,lastUpdate}) => {
    // data.map((item) => {
        // console.log(data.confirmed)
    // })
    // console.log(confirmed);

    return (
        <div>
            <h1>{confirmed.value}</h1>
            <h1>{recovered.value}</h1>
            <h1>{deaths.value}</h1>
            <h1>{lastUpdate}</h1>
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