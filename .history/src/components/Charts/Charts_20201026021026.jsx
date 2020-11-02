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
    })

    return (
        <div>
            <h1>Charts</h1>
        </div>
    );
}

export default Charts;
