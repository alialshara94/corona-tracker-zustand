import React,{useState,useEffect} from 'react';
import styles from './App.module.css'
import {Cards,Charts,Country} from './components/index';
import {fetchData} from './api'
function App() {

  // const [data,setData] = useState([
  //   {confirmed: [{value:0,detail:''}],recovered: [{value:0,detail:''}],deaths: [{value:0,detail:''}],lastUpdate: ''}
  // ]);
  const [data,setData]= useState([
    null
  ]);

  useEffect( ()=>{
    const getData = async()=>{
      const data = await fetchData();
      // console.log('data', data.data);
      setData(data.data.);
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
