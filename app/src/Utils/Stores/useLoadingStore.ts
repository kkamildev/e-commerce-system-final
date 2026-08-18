

import {create} from "zustand"

type LoadingState = {
    loaders: string[],
    addLoader:(id : string) => void,
    deleteLoader:(id : string) => void
}

const useLoadingStore = create<LoadingState>((set) => ({
    loaders:[],
    addLoader:(id : string) => set((store) => {
        if(!store.loaders.includes(id)){
            return {loaders:[...store.loaders, id]}
        }
    }),
    deleteLoader:(id : string) => set((store) => {
        if(store.loaders.includes(id)){
            return {loaders:store.loaders.filter((obj) => obj !== id)}
        }
    })
}))

export {useLoadingStore}