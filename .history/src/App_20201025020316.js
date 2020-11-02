import React,{useState,useEffect} from 'react';
import styles from './App.module.css'
import {Cards,Charts,Country} from './components/index';
import {fetchData} from './api'
function App() {

  // const [data,setData] = useState([
  //   {confirmed: [{value:0,detail:''}],recovered: [{value:0,detail:''}],deaths: [{value:0,detail:''}],lastUpdate: ''}
  // ]);
  // const [data,setData]= useState([
  //   {confirmed: '',recovered: '',deaths: '',lastUpdate: ''}
  // ]);

  const [confirmed,setConfirmed] =useState([null]);
  const [recovered,setRecovered] =useState([null]);
  const [deaths,setDeaths] =useState([null]);
  const [lastUpdate,setLastUpdate] =useState('');

  useEffect( ()=>{
    const getData = async()=>{
      const data = await fetchData();
      // console.log('data', data.data);
      // setData(data);
      setConfirmed(data.confirmed);
      setRecovered(data.recovered);
      setDeaths(data.deaths);
      setLastUpdate(data.lastUpdate);
    }
    getData();
  })
  return (
    <div className={styles.container}>
      <Cards confirmed={confirmed} recovered={recovered} deaths= {deaths} lastUpdate={lastUpdate}/>
      {/* <Cards data={data}/> */}
      <Charts/>
      <Country/>
    </div>
  );
}

export default App;
