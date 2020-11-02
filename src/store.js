import create from 'zustand'

const useStore = create(set => ({
    data: [],
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
export default useStore;