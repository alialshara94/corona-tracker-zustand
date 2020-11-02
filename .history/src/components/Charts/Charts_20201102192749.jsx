import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Bar, Line } from 'react-chartjs-2';
import styles from './charts.module.css';
// rfc
const Charts = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchDailyApi = async () => {
            setDailyData(await fetchDailyData())
        };

        fetchDailyApi();
        // console.log(dailyData)
    },[]);

    const lineChart = (
        dailyData.length
            ? (
                <Line
                    data={{
                        labels: dailyData.map(({ date }) => date),
                        datasets: [{
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: 'Infected',
                            borderColor: '#3333ff',
                            fill: true
                        }, {
                            data: dailyData.map(({ deaths }) => deaths),
                            label: 'Deaths',
                            borderColor: 'red',
                            backgroundColor: 'rgba(255,0,0,0.5)',
                            fill: true
                        },
                        ]
                    }}
                />
            ) : null
    );



    const barChart = (
        confirmed ?
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: ['rgba(60, 0, 255, 0.5)',
                            ' rgba(0, 255, 34, 0.5)',
                            'rgba(255, 0, 0, 0.5)',]
                    }],
                    data: [confirmed, recovered, deaths],
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Currunt state in ${country}` }
                }}
            /> : null
    );

    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    );
}

export default Charts;
