import React,{useState,useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core'
import styles from './country.module.css'
import { fetchCountries} from '../../api'


const Country = ({handleCountryChange}) => {

    const [countries,setCountries] =useState([]);

    useEffect(() => {
        const getCountries = async () => {
            setCountries(await fetchCountries());
        }
        getCountries();
    },[setCountries])

    return(
        <div>
            <FormControl className={styles.FormControl}>
                <NativeSelect defaultValue='' onChange={(e)=>{handleCountryChange(e.target.value)}}>
                    <option value="">Global</option>
                    {countries.map((country,i)=> (
                        <option key={i} value={country}>{country}</option>
                    ))}
                </NativeSelect>
            </FormControl>
        </div>   
    );
}

export default Country;