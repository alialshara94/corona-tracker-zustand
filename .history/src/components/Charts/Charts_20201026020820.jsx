import React,{useState,useEffect} from 'react';
import { fetchDailyData } from '../../api';
// rfc
const Charts = () => {
    const [dailyData,setDailyData] = useState([]);

    useEffect(() => {
        const fetchDailyApi = async () => {
            setDailyData(await fetchDailyData())
        };

        fetchDailyData();
    })

    return (
        <div>
            <h1>Charts</h1>
        </div>
    );
}

export default Charts;
