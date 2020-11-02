import React,{useState,useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core'
import styles from './country.module.css'
import { fetchCountries} from '../../api'


const Country = () => {

    const [countries,setCountries] =useState([]);

    useEffect(() => {
        const getCountries = async () => {
            setCountries(await fetchCountries());
        }
        getCountries();
    },[setCountries])

    console.log(countries);
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