import React,{useState,useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core'
import styles from './country.module.css'
import {fetchDailyData, getCountries} from '../../api'


const Country = () => {

    const [countries,setCountries] =useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            setCountries(await getCountries);
        }
        fetchCountries();
    },[setCountries])

    return(
        <div>
            <FormControl>
                <NativeSelect>
                    <option value="global">Global</option>
                </NativeSelect>
            </FormControl>
        </div>   
    );
}

export default Country;