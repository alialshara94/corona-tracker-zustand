import React,{useState,useEffect} from 'react';
import { fetchDailyData } from '../../api';
import {Line, Bar} from 'react-chartjs-2';
import styles from './charts.module.css';
// rfc
const Charts = () => {
    const [dailyData,setDailyData] = useState([]);

    useEffect(() => {
        const fetchDailyApi = async () => {
            setDailyData(await fetchDailyData())
        };

        fetchDailyApi();
    });

    const lineChart = (
        dailyData.length
        ? (
            <Line
                data={{
                    labels: dailyData.map(({data})=> data),
                    datasets: [{
                        data: dailyData.map(({confirmed})=> confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true
                    },{
                        data: dailyData.map(({deaths})=> deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255,0,0,0.5)',
                        fill: true
                    },
                ]
                }}
            />
        )
    );


    return (
        <div>
            <h1>Charts</h1>
        </div>
    );
}

export default Charts;
