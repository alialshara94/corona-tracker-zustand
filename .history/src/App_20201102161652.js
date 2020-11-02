import React,{useEffect} from 'react';
import styles from './App.module.css'
import {Cards,Charts,Country} from './components/index';
import {fetchData} from './api'
import useStore from './store';
// import create from 'zustand'

// const useStore = create(set => ({
//   data: [
//     {confirmed: '',recovered: '',deaths: '',lastUpdate: ''}
//   ],
//   country: '',
//   setData: (data)=>{
//     set((state)=> ({
//       ...state,
//       data,
//     }))
//   },
//   setCountryData: (country)=>{
//     set((state)=>({
//       ...state,
//       country,
//     }))
//   }
// }));
function App() {

  // const [data,setData] = useState([
  //   {confirmed: [{value:0,detail:''}],recovered: [{value:0,detail:''}],deaths: [{value:0,detail:''}],lastUpdate: ''}
  // ]);
  // const [dataFetches,setDataFetches]= useState([
  //   {confirmed: '',recovered: '',deaths: '',lastUpdate: ''}
  // ]);
  // const [countryData,setCountryFetches] =useState({});
  const {data,setData}= useStore();
  // const [country,setCountryData] =useStore({});

  // const [confirmed,setConfirmed] =useState([null]);
  // const [recovered,setRecovered] =useState([null]);
  // const [deaths,setDeaths] =useState([null]);
  // const [lastUpdate,setLastUpdate] =useState('');

  useEffect( ()=>{
    const getData = async()=>{
      // const data = await fetchData();
      
      const data = await fetchData();
      // setData()
      setData(data);
    }
    getData();
  })
  // console.log('data', data);


  // const country = useStore(state => state.country);
  const handleCountryChange = async (country) =>{
    const data = await fetchData(country);

    setData(data);
    // console.log(data);
  }

  return (
    <div className={styles.container}>
      {/* <Cards confirmed={confirmed} recovered={recovered} deaths= {deaths} lastUpdate={lastUpdate}/> */}
      <Cards data={data}/>
      <Country handleCountryChange= {handleCountryChange}/>
      <Charts/>
    </div>
  );
}

export default App;
