import React,{useState,useEffect} from 'react';
import styles from './App.module.css'
import {Cards,Charts,Country} from './components/index';
import {fetchData} from './api'
function App() {

  const [data,setData] = useState([
    {confirmed: 0,recovered: 0,deaths: 0,lastUpdate: 0}
  ]);

  useEffect( ()=>{
    const getData = async()=>{
      const data = await fetchData();
      console.log('data', data);
      setData(data);
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
