import React,{useState,useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core'
const Country = () => {
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