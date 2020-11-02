import React,{useState,useEffect} from 'react';
import styles from './App.module.css'
import {Cards,Charts,Country} from './components/index';
import {fetchData} from './api'
function App() {

  const [confirmed,setConfirmed] = useState(null);
  const [recovered,setRecovered] = useState(null);
  const [deaths,setDeaths] = useState(null);
  const [lastUpdate,setLastUpdate] = useState(null);

  useEffect( ()=>{
    const getData = async()=>{
      const data = await fetchData();
      // console.log('data', data);
      setConfirmed(data.confirmed);
      setRecovered(data.recovered);
      setDeaths(data.deaths);
      setLastUpdate(data.lastUpdate);
    }
    getData();
  })
  return (
    <div className={styles.container}>
      <Cards data={data}/>
      <Charts/>
      <Country/>
    </div>
  );
}

export default App;
