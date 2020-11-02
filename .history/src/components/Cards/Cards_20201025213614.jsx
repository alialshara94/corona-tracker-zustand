import React from 'react';
import styles from './cards.module.css';
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
const Cards = ({ confirmed, recovered, deaths, lastUpdate }) => {

    /* <h1>{confirmed.value}</h1>
    <h1>{recovered.value}</h1>
    <h1>{deaths.value}</h1>
<h1>{lastUpdate}</h1> */
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">REAL DATA</Typography>
                        <Typography color="textSecondary" >REAL DATA</Typography>
                        <Typography variant="body2" >Number of active cases of CoronaVirus (Covid-19)</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">REAL DATA</Typography>
                        <Typography color="textSecondary" >REAL DATA</Typography>
                        <Typography variant="body2" >Number of Recoveres cases of CoronaVirus (Covid-19)</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">REAL DATA</Typography>
                        <Typography color="textSecondary" >REAL DATA</Typography>
                        <Typography variant="body2" >Number of Deaths caused by CoronaVirus (Covid-19)</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}

export default Cards;