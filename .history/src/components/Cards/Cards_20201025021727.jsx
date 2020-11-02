import React from 'react';
import styles from './cards.module.css';
import {Card,CardContent,Typography,Grid} from '@material-ui/core'
const Cards = ({confirmed,recovered,deaths,lastUpdate}) => {

    return (
        <div>
            {/* <h1>{confirmed.value}</h1>
            <h1>{recovered.value}</h1>
            <h1>{deaths.value}</h1>
            <h1>{lastUpdate}</h1> */}
            
        </div>
    );
}

export default Cards;