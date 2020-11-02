import React,{useEffect} from 'react';
import styles from './App.module.css'
import {Cards,Charts,Country} from './components/index';
import {fetchData} from './api'
function App() {
  useEffect( ()=>{
    const getData = async()=>{
      const data = await fetchData;
      console.log('data', data);
    }
    getData();
  })
  return (
    <div className={styles.container}>
      <Cards/>
      <Charts/>
      <Country/>
    </div>
  );
}

export default App;
