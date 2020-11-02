import create from 'zustand'

export const useStore = create(set => ({
    data: [
       
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
