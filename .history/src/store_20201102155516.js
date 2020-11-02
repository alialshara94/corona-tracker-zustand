import create from 'zustand'
// import {fetchData} from './api'
// const getData = async()=>{
//     // const data = await fetchData();
    
//     const data = await fetchData();
//     // setData()
//     setData(data);
//   }
export const [useStore] = create(set => ({
    data: [
        { confirmed: '', recovered: '', deaths: '', lastUpdate: '' }
    ],
    country: '',
    setData: (data) => {
        set((state) => ({
            ...state,
            data,
        }))
    },
    setCountryData: (country) => {
        set((state) => ({
            ...state,
            country,
        }))
    }
}));
