import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        const res = await axios.get(url);
        return res;
        // const {data: {confirmed,recovered,deaths,lastUpdate}} = await axios.get(url);
        // return {confirmed,recovered,deaths,lastUpdate};
    } catch (error) {
        console.log(error);
    }
}