import create from 'zustand'
import { fetchData } from './api'
// const getData = async()=>{
//     // const data = await fetchData();

//     const data = await fetchData();
//     // setData()
//     setData(data);
//   }
const [useStore] = create(set => ({
    data: [
        { confirmed: '', recovered: '', deaths: '', lastUpdate: '' }
    ],
    country: '',
    setData: async cov => {
        const response = await fetchData(cov)
        set({ data: await response.json() })
    },
    setCountryData: (country) => {
        set((state) => ({
            ...state,
            country,
        }))
    }
}));
export default useStore;