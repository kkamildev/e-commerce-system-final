import { create } from "zustand"



type ImageVieverState = {
    active:boolean,
    images:string[],
    imageIndex:number,
    prepare:(images : string[], imageIndex : number) => void,
    clear:() => void,
    getCurrentImage:() => string,
}

const useImageVieverStore = create<ImageVieverState>((set, get) => ({
    active:false,
    images:[],
    imageIndex:0,
    prepare:(images, imageIndex) => set(() => ({images, imageIndex, active:true})),
    clear:() => set(() => ({images:[], imageIndex:0, active:false})),
    getCurrentImage:() => get().images[get().imageIndex]
}))

export {useImageVieverStore}