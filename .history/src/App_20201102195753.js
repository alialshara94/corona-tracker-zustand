import React, { useEffect } from 'react';
import styles from './App.module.css'
import { Cards, Charts, Country } from './components/index';
import { fetchData } from './api'
import useStore from './store';

function App() {

  const { data, setData } = useStore();
  const {country,setCountryData} =useStore();

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData(country);
      setData(data);
    }
    getData();
  })

  const handleCountryChange = async (country) => {
    setCountryData(country)
  }

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <Country handleCountryChange={handleCountryChange} />
      <Charts data={data} country={country}/>
    </div>
  );
}

export default App;
