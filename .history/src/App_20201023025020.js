import React from 'react';
import styles from './App.module.css'
import {Cards,Charts,Country} from './components/index';
function App() {
  return (
    <div className={styles.container}>
      <Cards/>
      <Charts/>
      <Country/>
    </div>
  );
}

export default App;
